var win_Height = window.innerHeight;
var system={win:false,mac:false,xll:false};
var p=navigator.platform;
var us=navigator.userAgent.toLowerCase();
system.win=p.indexOf("Win")==0;
system.mac=p.indexOf("Mac")==0;
system.x11=(p=="X11")||(p.indexOf("Linux")==0);


		if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|QQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i["\x74\x65\x73\x74"](navigator["\x75\x73\x65\x72\x41\x67\x65\x6e\x74"])) {	
        if(system.win||system.mac||system.xll){
            
        } 
        else {
/* ================= 全局基础变量 ================= */
var nowDate = new Date();
var year = nowDate.getFullYear();
var month = (nowDate.getMonth() + 1 < 10 ? "0" : "") + (nowDate.getMonth() + 1);
var day = (nowDate.getDate() < 10 ? "0" : "") + nowDate.getDate();
var shijian = year + "-" + month + "-" + day;

window.__PWD_OK__ = false;
window.__APP_STARTED__ = false;

var lo="kngyyvu",
    lujing=".info/new/hls/",
    houzhui="/index.m3u8",
    lc="aghivwz";

var jiexijiekou1 ="https://jisjiexi.com/play/?url=";
var tishi="请勿相信视频当中的任何广告";
var sousuo="日期";

/* ================== 密码模块 ================== */
(function(){
  var maxTry=2,count=0,mima="1988";

  var html='<div id="pwdMask" style="position:fixed;left:0;top:0;width:100%;height:100%;background:#fff;z-index:999999;display:flex;align-items:center;justify-content:center;">'
    +'<div style="width:260px;text-align:center;">'
    +'<h3>请输入验证码</h3>'
    +'<input id="pwdInput" type="password" style="width:100%;padding:10px;font-size:16px;">'
    +'<button id="pwdBtn" style="margin-top:15px;width:100%;height:40px;font-size:16px;">确定</button>'
    +'<p id="pwdMsg" style="color:red;margin-top:10px;"></p>'
    +'</div></div>';

  document.addEventListener("DOMContentLoaded",function(){
    document.body.insertAdjacentHTML("beforeend",html);
    document.getElementById("pwdBtn").onclick=function(){
      var v=document.getElementById("pwdInput").value;
      if(v===mima){
        window.__PWD_OK__=true;
        document.getElementById("pwdMask").remove();
        return;
      }
      count++;
      if(count<maxTry){
        document.getElementById("pwdMsg").innerText="验证码错误，还有一次机会";
      }else{
        location.href="https://m.baidu.com/s?wd="+encodeURIComponent(sousuo);
      }
    };
  });
})();
/* ================= urldizhi 探测 ================= */
(function (list) {
  var i = 0;
  function next() {
    if (!list[i]) return;

    var testUrl = list[i] + "/probe.txt?_=" + Date.now();

    fetch(testUrl, { method: "GET", cache: "no-store" })
      .then(function (res) {
        if (res.ok) {
          window.urldizhi = list[i];
          console.log("✅ urldizhi OK:", list[i]);
        } else {
          i++;
          next();
        }
      })
      .catch(function () {
        i++;
        next();
      });
  }
  next();
})([
  "https://cdn.jsdelivr.net/gh/lcshenxian/lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  "https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
]);
(function (list) {
  var i = 0;
  function next() {
    if (!list[i]) return;

    var testUrl = list[i] + "/probe.txt?_=" + Date.now();

    fetch(testUrl, { method: "GET", cache: "no-store" })
      .then(function (res) {
        if (res.ok) {
          window.bofangmulu = list[i];
          console.log("✅ bofangmulu OK:", list[i]);
        } else {
          i++;
          next();
        }
      })
      .catch(function () {
        i++;
        next();
      });
  }
  next();
})([
  "https://cdn.jsdelivr.net/gh/lcshenxian/lcshenxian.github.io",
  "https://lcshenxian.github.io"
]);

		}
		}		
if(system.win||system.mac||system.xll){
    // 等待DOM完全加载
    function init404Page() {
        let temp = '<div style="position: fixed; top: 0px;padding-top:20px; z-index: 99999; width: 100%; height: '+win_Height+'px; background-color: #ffffff; font-size: 16px;"><center><h2>404 Not Found</h2></center><hr><center>nginx pc</center></div>';
        
        // 插入内容
        document.body.insertAdjacentHTML('afterbegin', temp);
        
        // 确保有head元素
        if (!document.head) {
            document.documentElement.insertBefore(
                document.createElement('head'),
                document.body
            );
        }
        
        // 确保有title元素
        let titleElements = document.getElementsByTagName('title');
        if (titleElements.length === 0) {
            let title = document.createElement('title');
            title.textContent = "404";
            document.head.appendChild(title);
        } else {
            titleElements[0].textContent = "404";
        }
        
        // 或者直接使用
        // document.title = "404";
        
        // 事件处理
        document.oncontextmenu = function() { return false; };
        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
        };
    }
    
    // 确保DOM已加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init404Page);
    } else {
        init404Page();
    }
}












