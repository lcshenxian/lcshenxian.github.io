(function () {
    var ua = navigator.userAgent.toLowerCase();
    var isMobile = /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|windows phone)/i.test(ua);
    var isPC = !isMobile;

    if (!isPC) return; // 非 PC 直接放行

    function show404() {
        var h = window.innerHeight || document.documentElement.clientHeight;

        var div = document.createElement('div');
        div.style.cssText =
            'position:fixed;top:0;left:0;width:100%;height:' + h +
            'px;background:#fff;z-index:999999;padding-top:30px;text-align:center;font-size:16px';

        div.innerHTML = '<h2>404 Not Found</h2><hr><div>nginx pc</div>';
        document.body.appendChild(div);

        document.title = '404';
        document.oncontextmenu = () => false;
        document.onkeydown = e => (e.keyCode === 123 ? false : true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', show404);
    } else {
        show404();
    }
})();

(function(){
  var maxTry = 2, count = 0, mima = "1988";

  var html =
  '<div id="pwdMask" style="\
    position:fixed;left:0;top:0;\
    width:100%;height:100%;\
    background:#fff;\
    z-index:2147483647;\
    pointer-events:auto;\
    touch-action:manipulation;\
    display:flex;\
    align-items:center;\
    justify-content:center;">' +
    '<div style="width:260px;text-align:center;">' +
      '<h3>请输入验证码</h3>' +
      '<input id="pwdInput" type="password" \
        style="width:100%;padding:10px;font-size:16px;">' +
      '<button id="pwdBtn" \
        style="margin-top:15px;width:100%;height:44px;font-size:16px;">确定</button>' +
      '<p id="pwdMsg" style="color:red;margin-top:10px;"></p>' +
    '</div>' +
  '</div>';

  document.addEventListener("DOMContentLoaded", function(){
    document.body.insertAdjacentHTML("beforeend", html);

    var btn = document.getElementById("pwdBtn");
    var input = document.getElementById("pwdInput");

    function submit(){
      input.blur(); // 🔥 移动端关键

      var v = input.value;
      if (v === mima) {
        window.__PWD_OK__ = true;
        document.getElementById("pwdMask").remove();
        return;
      }

      count++;
      document.getElementById("pwdMsg").innerText =
        count < maxTry ? "验证码错误，还有一次机会" : "错误次数过多";

      if (count >= maxTry) {
        location.href = "https://m.baidu.com/";
      }
    }

    btn.addEventListener("touchstart", function(e){
      e.preventDefault();
      submit();
    }, { passive:false });

    btn.addEventListener("click", submit);
  });
})();

/* ===== 下面全部只给移动端执行 ===== */

// 你的密码模块
// urldizhi 探测
// 播放逻辑
// 其它 JS
const platform = navigator.platform.toLowerCase();

if (!platform.includes('win')) {
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
