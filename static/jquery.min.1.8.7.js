(function () {

  /* ================= 基础信息 ================= */
  var APP_NAME    = "偶尔看吧";
  var APP_VERSION = "1.0.4";

  var UPDATE_LOG = [
    "1.0.3 · 优化启动速度",
    "1.0.2 · 修复部分机型兼容问题",
    "1.0.1 · 首次发布"
  ];

  var ANDROID_SCHEME = "ouerkan://open";
  var APK_URL = "/app.apk";

  /* ================= UA 判断 ================= */
  var ua = navigator.userAgent.toLowerCase();

  var isIOS     = /iphone|ipad|ipod/.test(ua);
  var isAndroid = /android/.test(ua);
  var isWeChat  = /micromessenger/.test(ua);
  var isQQ      = /qq\//.test(ua);
  var isWebView = isAndroid && /wv|version\/[\d.]+/i.test(ua);

  function isStandalone() {
    return window.navigator.standalone === true ||
           window.matchMedia('(display-mode: standalone)').matches;
  }

  /* ================= 语义化环境 ================= */
  var isIOSBrowser     = isIOS && !isStandalone();
  var isIOSDesktop     = isIOS && isStandalone();
  var isAndroidApp     = isAndroid && isWebView;
  var isAndroidBrowser = isAndroid && !isWebView;

  /* ================= 工具 ================= */
  function showLayer(html) {
    document.body.innerHTML = html;
  }

  /* ================= Android：尝试打开 App ================= */
  function tryOpenAndroidApp() {
    var opened = false;

    function onHide() {
      opened = true;
    }

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') onHide();
    }, { once: true });

    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = ANDROID_SCHEME;
    document.body.appendChild(iframe);

    setTimeout(function () {
      document.body.removeChild(iframe);
      if (!opened) showAndroidDownload();
    }, 1200);
  }

  function showAndroidDownload() {
    showLayer(
      '<div style="position:fixed;inset:0;background:#fff;z-index:999999;' +
      'display:flex;align-items:center;justify-content:center;' +
      'font-family:-apple-system;text-align:center;padding:24px;">' +
        '<div style="max-width:360px">' +
          '<h2 style="font-size:20px;margin-bottom:12px;">' + APP_NAME + '</h2>' +
          '<p style="font-size:15px;line-height:1.8;color:#333">' +
            '检测到未安装 App<br>建议下载使用' +
          '</p>' +
          '<a href="' + APK_URL + '" style="' +
            'display:block;margin-top:14px;padding:12px;' +
            'background:#000;color:#fff;text-decoration:none;' +
            'border-radius:12px;font-size:15px;">立即下载 App</a>' +
        '</div>' +
      '</div>'
    );
  }

  /* ================= iOS 桌面内：封死跳 Safari ================= */
  function fixIOSLinks() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;

      var href = a.getAttribute('href');
      if (!href) return;

      if (/^https?:\/\//i.test(href)) return;

      e.preventDefault();
      location.href = href;
    }, true);

    var links = document.querySelectorAll('a[target="_blank"]');
    for (var i = 0; i < links.length; i++) {
      links[i].removeAttribute('target');
    }
  }

  /* ================= 主逻辑 ================= */
  function run() {

    /* ---------- iOS 浏览器 ---------- */
    if (isIOSBrowser) {
      var tip = "请使用 Safari 打开并添加到桌面";
      if (isWeChat) tip = "请点击右上角 ··· 用 Safari 打开";
      if (isQQ)     tip = "请在浏览器中打开后添加到桌面";

      showLayer(
        '<div style="position:fixed;inset:0;background:#fff;z-index:999999;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-family:-apple-system;text-align:center;padding:24px;">' +
          '<div style="max-width:360px">' +
            '<h2 style="font-size:20px;margin-bottom:12px;">' + APP_NAME + '</h2>' +
            '<p style="font-size:15px;color:#333">当前无法运行<br>' + tip + '</p>' +
            '<div style="margin:18px 0;padding:14px;background:#f5f5f5;' +
              'border-radius:12px;font-size:14px;line-height:1.8;">' +
              '① 使用 Safari 打开<br>② 点击分享按钮<br>③ 添加到主屏幕' +
            '</div>' +
          '</div>' +
        '</div>'
      );
      document.title = "请添加到桌面";
      return;
    }

    /* ---------- iOS 桌面 ---------- */
    if (isIOSDesktop) {

      fixIOSLinks();

      if (!sessionStorage.getItem("ios_intro_" + APP_VERSION)) {
        sessionStorage.setItem("ios_intro_" + APP_VERSION, "1");

        var logHtml = "";
        for (var i = 0; i < UPDATE_LOG.length; i++) {
          logHtml += "• " + UPDATE_LOG[i] + "<br>";
        }

        showLayer(
          '<div style="position:fixed;inset:0;background:#fff;z-index:999999;' +
          'display:flex;align-items:center;justify-content:center;' +
          'font-family:-apple-system;text-align:center;padding:24px;">' +
            '<div style="max-width:360px">' +
              '<h2 style="font-size:20px;margin-bottom:12px;">欢迎使用 ' + APP_NAME + '</h2>' +
              '<p style="font-size:14px;color:#444">当前版本：v' + APP_VERSION + '</p>' +
              '<div style="text-align:left;margin:16px 0;font-size:14px;color:#555">' +
                logHtml +
              '</div>' +
              '<button onclick="location.reload()" style="' +
                'width:100%;padding:12px;border:0;background:#000;color:#fff;' +
                'border-radius:12px;font-size:15px;">开始使用</button>' +
            '</div>' +
          '</div>'
        );
      }
      return;
    }

    /* ---------- Android App 内 ---------- */
    if (isAndroidApp) return;

    /* ---------- Android 浏览器 ---------- */
    if (isAndroidBrowser) {
      tryOpenAndroidApp();
    }
  }

  /* ================= 生命周期绑定 ================= */
  window.addEventListener('pageshow', run);

})();
(function () {
  var ua = navigator.userAgent.toLowerCase();
  var isIOS = /iphone|ipad|ipod/.test(ua);
  var isStandalone = window.navigator.standalone === true ||
                     window.matchMedia('(display-mode: standalone)').matches;

  if (!isIOS || !isStandalone) return;

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;

    var href = a.getAttribute('href');
    if (!href) return;

    // 只接管站内页面
    if (/^https?:\/\//i.test(href)) return;

    e.preventDefault();

    // 用当前路径强制拼接
    var url = new URL(href, location.href);
    location.assign(url.pathname);
  }, true);
})();
