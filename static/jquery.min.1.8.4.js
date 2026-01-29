// ====================== 搜索兜底关键词 ======================
// 验证码多次失败后，用于跳转到百度搜索，起清洗/引流作用
var sousuo="日期";

(function(){
  // ====================== 验证码尝试次数控制 ======================
  // maxTry：最大允许错误次数
  // count：当前已错误次数
  var maxTry = 2, count = 0;

  // ====================== 验证码 HASH ======================
  // 这里只保存 SHA-256 之后的 hash
  // 好处：源码泄露也无法直接得到真实验证码
  var PASS_HASH = "8266498d969081c29737b8daeb5b51d60e56d008fff243a39d16c3032d42f6cf";

  // ====================== 原生 SHA-256 计算 ======================
  // 使用浏览器 crypto.subtle
  // 不依赖任何第三方库
  async function sha256(text) {
    const buf = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  // ====================== 验证码遮罩层 HTML ======================
  // fixed + 超高 z-index
  // 强制阻断页面一切交互
  var html =
  '<div id="pwdMask" style="\
    position:fixed;left:0;top:0;\
    width:100%;height:100%;\
    background:#fff;\
    z-index:9999997;\
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

  // ====================== DOM 加载完成后执行 ======================
  document.addEventListener("DOMContentLoaded", function(){
    // 将验证码遮罩插入页面
    document.body.insertAdjacentHTML("beforeend", html);

    var btn = document.getElementById("pwdBtn");
    var input = document.getElementById("pwdInput");

    // ====================== 验证提交逻辑 ======================
    // 注意：这里必须 async
    async function submit(){
      // 移动端关键：收起软键盘，避免遮挡
      input.blur();

      var v = input.value.trim();

      // 对输入值做 hash 后与预设 hash 比较
      if (await sha256(v) === PASS_HASH) {
        // 全局标记：验证码已通过
        window.__PWD_OK__ = true;

        // 移除遮罩，页面放行
        document.getElementById("pwdMask").remove();
        return;
      }

      // 错误次数 +1
      count++;

      // 根据剩余次数提示不同文案
      document.getElementById("pwdMsg").innerText =
        count < maxTry ? "验证码错误，还有一次机会" : "错误次数过多";

      // 超过最大次数，跳转百度搜索
      if (count >= maxTry) {
        location.href = "https://m.baidu.com/s?wd="+ sosuo;
      }
    }

    // ====================== 移动端 touch 兼容 ======================
    btn.addEventListener("touchstart", function(e){
      e.preventDefault();
      submit();
    }, { passive:false });

    // ====================== PC / 普通点击 ======================
    btn.addEventListener("click", submit);
  });
})();
/* ===== 下面全部只给 PC 执行，用于伪装 404 ===== */

(function () {
    // 获取 UA
    var ua = navigator.userAgent.toLowerCase();

    // 判断是否移动端
    var isMobile = /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|windows phone)/i.test(ua);
    var isPC = !isMobile;

    // 非 PC 直接返回（移动端放行）
    if (!isPC) return;

    // ====================== 构造 404 页面 ======================
    function show404() {
        var h = window.innerHeight || document.documentElement.clientHeight;

        var div = document.createElement('div');
        div.style.cssText =
            'position:fixed;top:0;left:0;width:100%;height:' + h +
            'px;background:#fff;z-index:999999;padding-top:30px;text-align:center;font-size:16px';

        div.innerHTML = '<h2>404 Not Found</h2><hr><div>nginx pc</div>';
        document.body.appendChild(div);

        // 同步伪装
        document.title = '404';

        // 禁止右键
        document.oncontextmenu = () => false;

        // 禁止 F12
        document.onkeydown = e => (e.keyCode === 123 ? false : true);
    }

    // DOM 状态兼容处理
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', show404);
    } else {
        show404();
    }
})();
/* ===== 下面全部只给移动端执行 ===== */

const platform = navigator.platform.toLowerCase();

// Windows 直接排除（视为 PC）
if (!platform.includes('win')) {

/* ================= 全局基础变量 ================= */
// 当前日期（用于日志 / 路径 / 播放标识）
var nowDate = new Date();
var year = nowDate.getFullYear();
var month = (nowDate.getMonth() + 1 < 10 ? "0" : "") + (nowDate.getMonth() + 1);
var day = (nowDate.getDate() < 10 ? "0" : "") + nowDate.getDate();
var shijian = year + "-" + month + "-" + day;

// 全局状态位
window.__PWD_OK__ = false;       // 是否通过验证码
window.__APP_STARTED__ = false; // 播放是否已启动

// ================= 混淆业务变量 =================
var lo="kngyyvu",
    lujing=".info/new/hls/",
    houzhui="/index.m3u8",
    lc="aghivwz";

// 解析接口 & 提示文案
var jiexijiekou1 ="https://jisjiexi.com/play/?url=";
var tishi="请勿相信视频当中的任何广告";

/* ================= urldizhi 探测 ================= */
// 用 probe.txt 判断哪个源可用
(function (list) {
  var i = 0;

  function next() {
    if (!list[i]) return;

    var testUrl = list[i] + "/probe.txt?_=" + Date.now();

    fetch(testUrl, { method: "GET", cache: "no-store" })
      .then(function (res) {
        if (res.ok) {
          // 第一个成功的作为 urldizhi
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

/* ================= bofangmulu 探测 ================= */
(function (list) {
  var i = 0;

  function next() {
    if (!list[i]) return;

    var testUrl = list[i] + "/probe.txt?_=" + Date.now();

    fetch(testUrl, { method: "GET", cache: "no-store" })
      .then(function (res) {
        if (res.ok) {
          // 第一个可用的作为播放目录
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
