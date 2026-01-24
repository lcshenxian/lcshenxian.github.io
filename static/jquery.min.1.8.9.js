/* ================== JSON 加载系统 ================== */
var RANDOM_RANGE=5;
var JSON_INDEX=Math.floor(Math.random()*RANDOM_RANGE);
var JSON_BASE="";
var FAIL_COUNT=0,FAIL_LIMIT=2,LOAD_COUNT=0;
var PAGE_SIZE=12;
var currentData=[],renderIndex=0,currentContainer=null,isRendering=false;

/* 渲染 */
function renderChunk() {
  if (!currentContainer || isRendering) return;

  isRendering = true;

  var html = "";
  var end = Math.min(renderIndex + PAGE_SIZE, currentData.length);

  for (var i = renderIndex; i < end; i++) {
    var item = currentData[i];
    var bofang = item && item.bofang ? String(item.bofang) : "";
    var biaoti = item && item.biaoti ? String(item.biaoti) : "";

    html +=
      '<figure>' +
        '<div class="pos">' +
          '<a href="' + jiexijiekou1 + 'https://' +
            lo + lujing + encodeURIComponent(bofang) + houzhui +
            '" target="_blank" rel="noopener noreferrer">' +
            '<img src="https://' + lc + '.info/pic/' +
              encodeURIComponent(bofang) + '.jpg" class="lazy">' +
            '<p>' + shijian + '</p>' +
          '</a>' +
        '</div>' +
        '<a href="' + jiexijiekou1 + 'https://' +
            lo + lujing + encodeURIComponent(bofang) + houzhui +
            '" onclick="return false;"><figcaption>' +
          biaoti +
        '</figcaption></a>' +
      '</figure>';
  }

  currentContainer.insertAdjacentHTML("beforeend", html);
  renderIndex = end;
  isRendering = false;
}


/* 滚动 */
var lock=false;
window.onscroll=function(){
  if(lock)return;
  lock=true;
  setTimeout(function(){
    lock=false;
    if(!currentContainer)return;
    if(window.innerHeight+scrollY>=document.body.offsetHeight-120){
      if(renderIndex<currentData.length)renderChunk();
      else loadNextJSON();
    }
  },200);
};

/* ========= 文案替换 & 弹窗 ========= */
(function () {
  var art = document.getElementById("art");
  if (art) {
    art.innerHTML = art.innerHTML.replace(/什么也不显示？咨询联系人/g, tishi);
  }
  var gx = document.getElementById("gengxin");
  if (gx) gx.innerHTML = gengxin;
})();

/* JSON */
function loadNextJSON(){
  if(FAIL_COUNT>=FAIL_LIMIT){
    document.getElementById("jiazai").innerHTML="已全部加载";
    return;
  }
  var url=JSON_BASE+(JSON_INDEX===0?"index.json":"index"+JSON_INDEX+".json");
  var xhr=new XMLHttpRequest();
  xhr.open("GET",url,true);
  xhr.send();
  xhr.onload=function(){
    if(xhr.status===200){
      var obj=JSON.parse(xhr.responseText);
      FAIL_COUNT=0;JSON_INDEX++;LOAD_COUNT++;
      var div=document.createElement("div");
      div.className="items";
      document.body.insertBefore(div,document.getElementById("jiazai"));
      currentContainer=div;
      currentData=obj;renderIndex=0;
      renderChunk();
    }else{FAIL_COUNT++;JSON_INDEX++;}
  };
}

/* 启动器（唯一入口） */
(function waitInit(){
  if(window.__APP_STARTED__)return;
  if(window.__PWD_OK__ && typeof window.urldizhi==="string"){
    window.__APP_STARTED__=true;
    JSON_BASE=window.urldizhi+mulu;
    loadNextJSON();
  }else setTimeout(waitInit,100);
})();
