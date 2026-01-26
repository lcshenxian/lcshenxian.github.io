(function () {

  /* ========= 基础信息（只改这里） ========= */
  var APP_NAME    = "偶尔看吧";
  var APP_VERSION = "1.0.3";

  var UPDATE_LOG = [
    "1.0.3 · 优化启动速度",
    "1.0.2 · 修复部分机型兼容问题",
    "1.0.1 · 首次发布"
  ];

  // Android App Scheme（必须和 APK 里一致）
  var ANDROID_SCHEME = "ouerkan://open";

  // APK 下载地址
  var APK_URL = "/app.apk";

  /* ========= UA 判断 ========= */
  var ua = navigator.userAgent.toLowerCase();

  var isIOS     = /iphone|ipad|ipod/.test(ua);
  var isAndroid = /android/.test(ua);
  var isWeChat  = /micromessenger/.test(ua);
  var isQQ      = /qq\//.test(ua);

  // Android App 内 WebView 特征
  var isWebView = isAndroid && /wv|version\/[\d.]+/i.test(ua);

  function isStandalone() {
    return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
  }

  /* ========= 语义化运行环境（核心） ========= */
  var isIOSBrowser   = isIOS && !isStandalone();   // iOS Safari / 微信 / QQ
  var isIOSDesktop   = isIOS && isStandalone();    // iOS 桌面 Web App

  var isAndroidApp   = isAndroid && isWebView;     // Android APK 内 WebView
  var isAndroidBrowser = isAndroid && !isWebView;  // Android 浏览器（含小米）

  function once(key) {
    if (localStorage.getItem(key)) return false;
    localStorage.setItem(key, "1");
    return true;
  }

  function showLayer(html) {
    document.body.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* ==================================================
       ① iOS 浏览器：必须添加到桌面
    ================================================== */
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
            '<p style="font-size:15px;line-height:1.8;color:#333">' +
              '当前无法运行<br>' + tip +
            '</p>' +
            '<div style="margin:18px 0;padding:14px;background:#f5f5f5;' +
              'border-radius:12px;font-size:14px;line-height:1.8;">' +
              '① 使用 Safari 打开<br>' +
              '② 点击分享按钮<br>' +
              '③ 选择「添加到主屏幕」' +
            '</div>' +
            '<p style="font-size:13px;color:#888">' +
              '添加后从桌面图标打开即可' +
            '</p>' +
          '</div>' +
        '</div>'
      );

      document.title = "请添加到桌面";
      return;
    }

    /* ==================================================
       ② iOS 桌面：首次启动说明（只一次）
    ================================================== */
    if (isIOSDesktop && once("first_launch_" + APP_VERSION)) {

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
            '<p style="font-size:14px;color:#444">' +
              '当前版本：v' + APP_VERSION +
            '</p>' +
            '<div style="text-align:left;margin:16px 0;font-size:14px;color:#555">' +
              logHtml +
            '</div>' +
            '<button onclick="location.reload()" style="' +
              'width:100%;padding:12px;border:0;' +
              'background:#000;color:#fff;' +
              'border-radius:12px;font-size:15px;">' +
              '开始使用' +
            '</button>' +
          '</div>' +
        '</div>'
      );

      return;
    }

    /* ==================================================
       ③ Android App 内 WebView：直接放行
    ================================================== */
    if (isAndroidApp) {
      // 已在 App 内，什么都不做
      return;
    }

    /* ==================================================
       ④ Android 浏览器：唤起 App / 下载 APK
    ================================================== */
    if (isAndroidBrowser) {

      var start = Date.now();

      var iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = ANDROID_SCHEME;
      document.body.appendChild(iframe);

      setTimeout(function () {

        var delta = Date.now() - start;

        if (delta < 1200 && once("android_download_tip")) {

          showLayer(
            '<div style="position:fixed;inset:0;background:#fff;z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;' +
            'font-family:-apple-system;text-align:center;padding:24px;">' +
              '<div style="max-width:360px">' +
                '<h2 style="font-size:20px;margin-bottom:12px;">' + APP_NAME + '</h2>' +
                '<p style="font-size:15px;line-height:1.8;color:#333">' +
                  '建议下载 App 使用<br>' +
                  '体验更流畅、更稳定' +
                '</p>' +
                '<div style="margin:18px 0;padding:14px;background:#f5f5f5;' +
                  'border-radius:12px;font-size:14px;line-height:1.8;">' +
                  '• 打开更快<br>' +
                  '• 更稳定<br>' +
                  '• 长时间不卡顿' +
                '</div>' +
                '<a href="' + APK_URL + '" style="' +
                  'display:block;margin-top:12px;padding:12px;' +
                  'background:#000;color:#fff;text-decoration:none;' +
                  'border-radius:12px;font-size:15px;">' +
                  '立即下载 App' +
                '</a>' +
                '<p style="margin-top:12px;font-size:13px;color:#888">' +
                  '已安装将自动打开' +
                '</p>' +
              '</div>' +
            '</div>'
          );
        }

        document.body.removeChild(iframe);

      }, 800);
    }

  });

})();

