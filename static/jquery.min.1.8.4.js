(function passwordCheck(){
  var maxTry = 2;
  var count = 0;
  var mima = "1988";        // 正确验证码
  var sousuo = "日期";     // 跳转关键词

  function ask(){
    var pass = prompt("请输入验证码", "");

    // 用户点了「取消」
    if (pass === null) {
      // 直接结束，不继续执行后续 JS
      location.href = "about:blank";
      return;
    }

    // 验证成功
    if (pass === mima) {
      window.__PWD_OK__ = true;   // 🔓 解锁标记
      return;
    }

    // 验证失败
    count++;

    if (count < maxTry) {
      alert("验证码错误，还有一次机会");
      ask(); // 再问一次
    } else {
      // 超过次数 → 跳走
      location.href = "https://m.baidu.com/s?wd=" + encodeURIComponent(sousuo);
    }
  }

  ask();
})();

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

