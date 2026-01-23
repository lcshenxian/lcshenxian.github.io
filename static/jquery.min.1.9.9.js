* ===== 搜索配置 ===== */
var SEARCH_FILES = [
  "/sousuo/guochan1.json",
  "/sousuo/guochan2.json",
  "/sousuo/guochan3.json",
  "/sousuo/guochan4.json",
  "/sousuo/guochan5.json",
  "/sousuo/guochan6.json",
  "/sousuo/guochan7.json",
  "/sousuo/guochan8.json",
  "/sousuo/guochan9.json",
  "/sousuo/guochan10.json",
  "/sousuo/sanji.json",
  "/sousuo/rihan1.json",
  "/sousuo/rihan2.json",
  "/sousuo/rihan3.json",
  "/sousuo/oumei.json"
];

var SEARCH_INDEX = 0;
var ALL_DATA = [];
var fuse = null;
var LOADING = false;

/* ===== 懒加载一个 JSON ===== */
function loadNextFile(callback){
  if (SEARCH_INDEX >= SEARCH_FILES.length || LOADING) return;

  LOADING = true;
  fetch(bofangmulu + SEARCH_FILES[SEARCH_INDEX])
    .then(r => r.ok ? r.json() : [])
    .then(d => {
      if (Array.isArray(d) && d.length) {
        ALL_DATA = ALL_DATA.concat(d);
        fuse = new Fuse(ALL_DATA, {
          keys: ["biaoti"],
          threshold: 0.4
        });
      }
      SEARCH_INDEX++;
      LOADING = false;
      callback && callback();
    })
    .catch(() => {
      SEARCH_INDEX++;
      LOADING = false;
      callback && callback();
    });
}

/* ===== 搜索 ===== */
function doSearch(){
  var kw = document.getElementById("searchInput").value.trim();
  var box = document.getElementById("searchResults");
  box.innerHTML = "";

  if (kw.length < 2) {
    box.innerHTML = "<center>请输入至少 2 个字</center>";
    return;
  }

  if (!fuse) {
    box.innerHTML = "<center>正在加载搜索数据…</center>";
    loadNextFile(doSearch);
    return;
  }

  var res = fuse.search(kw).slice(0, 30);

  if (res.length === 0 && SEARCH_INDEX < SEARCH_FILES.length) {
    box.innerHTML = "<center>继续加载更多内容…</center>";
    loadNextFile(doSearch);
    return;
  }

  if (res.length === 0) {
    box.innerHTML = "<center>未搜索到结果</center>";
    return;
  }

  res.forEach(r => {
    var d = r.item;
    box.innerHTML +=
      '<div class="resultContainer">' +
        '<a target="_blank" href="' +
          jiexijiekou1 +
          'https://' + lo + lujing + d.bofang + houzhui +
        '">' +
        '<img src="https://' + lc + '.info/pic/' + d.bofang + '.jpg">' +
        '<div>' + d.biaoti + '</div>' +
        '</a>' +
      '</div>';
  });
}

/* ===== 绑定 ===== */
document.getElementById("searchButton").onclick = doSearch;

var t = null;
document.getElementById("searchInput").oninput = function(){
  clearTimeout(t);
  t = setTimeout(doSearch, 300);
};



