//下面就是说明
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

  var APK_URLS = [
  "https://od.lk/s/MTBfMzQ0ODg5NDY4Xw/app.apk",
  "https://od.lk/d/MTBfMzQ0ODg5NDY4Xw/app.apk",
];

// 随机取一个
  var APK_URL = APK_URLS[Math.floor(Math.random() * APK_URLS.length)];

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
    '<div style="position:fixed;inset:0;z-index:999999;' +
    'background:linear-gradient(180deg,#0f0f0f,#1a1a1a);' +
    'display:flex;align-items:center;justify-content:center;' +
    'font-family:-apple-system,BlinkMacSystemFont;">' +

      '<div style="width:100%;max-width:380px;padding:28px;color:#fff;">' +

        '<div style="text-align:center;margin-bottom:26px;">' +
          '<div style="width:72px;height:72px;margin:0 auto 14px;' +
          'background:#000;border-radius:18px;' +
          'display:flex;align-items:center;justify-content:center;' +
          'font-size:28px;font-weight:600;">' +
            APP_NAME.charAt(0) +
          '</div>' +
          '<div style="font-size:22px;font-weight:600;">' + APP_NAME + '</div>' +
          '<div style="font-size:13px;color:#aaa;margin-top:6px;">' +
            '更流畅 · 更稳定 · 更省心' +
          '</div>' +
        '</div>' +

        '<div style="background:#111;border-radius:18px;padding:22px;' +
        'box-shadow:0 20px 40px rgba(0,0,0,.35);">' +

          '<div style="font-size:16px;line-height:1.8;color:#eee;">' +
            '推荐下载安装 App<br>' +
            '获得完整、稳定的使用体验' +
          '</div>' +

          '<ul style="margin:18px 0 22px;padding:0;list-style:none;' +
          'font-size:14px;color:#bbb;line-height:1.9;">' +
            '<li>• 打开速度更快</li>' +
            '<li>• 无浏览器限制</li>' +
            '<li>• 使用更稳定</li>' +
          '</ul>' +

          '<a href="' + APK_URL + '" style="' +
            'display:block;width:100%;text-align:center;' +
            'padding:14px 0;border-radius:14px;' +
            'background:#fff;color:#000;font-size:16px;font-weight:600;' +
            'text-decoration:none;">' +
            '下载安装 App' +
          '</a>' +

          '<a href="' + ANDROID_SCHEME + '" style="' +
            'display:block;margin-top:14px;text-align:center;' +
            'font-size:14px;color:#aaa;text-decoration:none;">' +
            '已安装？点这里直接打开' +
          '</a>' +

          '<div style="margin-top:16px;text-align:center;' +
          'font-size:12px;color:#666;">' +
            '若已安装但未自动打开，请手动点击上方链接' +
          '</div>' +

        '</div>' +

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




