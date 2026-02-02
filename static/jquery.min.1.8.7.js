// ====================== 整体自执行作用域 ======================
// 用 IIFE 包裹，避免变量污染全局
(function() {

    /* ================= 基础信息 ================= */
    // 应用名称（用于展示、引导页文案）
    var APP_NAME = "偶尔看吧";

    // 当前版本号（用于版本提示、更新说明）
    var APP_VERSION = "1.0.6";

    // 更新日志（首次进入 / 新版本展示）
    var UPDATE_LOG = ["1.0.5 · 优化启动速度", "1.0.4 · 修复部分机型兼容问题", "1.0.1 · 首次发布"];

    // Android App 自定义 Scheme（用于尝试拉起 App）
    var ANDROID_SCHEME = "ouerkan://open";

    // ================= APK 下载地址（多源） =================
    // 多个下载地址，防单点失效
    var APK_URLS = ["https://od.lk/s/MTBfMzQ0ODg5NDY4Xw/app.apk", "https://od.lk/d/MTBfMzQ0ODg5NDY4Xw/app.apk", ];

    // 随机选择一个 APK 下载地址
    // 用于简单的下载分流
    var APK_URL = APK_URLS[Math.floor(Math.random() * APK_URLS.length)];

    /* ================= UA 判断 ================= */
    // 统一转小写，便于正则判断
    var ua = navigator.userAgent.toLowerCase();

    // 平台 / 容器判断
    var isIOS = /iphone|ipad|ipod/.test(ua);
    var isAndroid = /android/.test(ua);
    var isWeChat = /micromessenger/.test(ua);
    var isQQ = /qq\//.test(ua);

    // Android WebView（App 内浏览器）
    var isWebView = isAndroid && /wv|version\/[\d.]+/i.test(ua);
    // 是否为【自己 App】的 Android WebView（通过 UA 标识）
    var isMyAndroidApp = isAndroid && ua.indexOf("ouerkannapp") !== -1;

    // ================= PWA / 桌面模式判断 =================
    // iOS Safari 添加到主屏幕后，standalone = true
    function isStandalone() {
        return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
    }

    /* ================= 语义化环境 ================= */
    // iOS 浏览器内（非桌面）
    var isIOSBrowser = isIOS && !isStandalone();

    // iOS 桌面模式（添加到主屏幕后）
    var isIOSDesktop = isIOS && isStandalone();

    // Android App 内 WebView
    var isAndroidApp = isAndroid && isWebView;

    // Android 普通浏览器
    var isAndroidBrowser = isAndroid && !isWebView;

    /* ================= 工具函数 ================= */
    // 用整屏 HTML 覆盖 body
    // 用于提示页 / 引导页 / 强制交互
    function showLayer(html) {
        document.body.innerHTML = html;
    }

    /* ================= Android：尝试拉起 App ================= */
    function tryOpenAndroidApp() {
        var opened = false;

        // 页面进入后台，视为成功拉起 App
        function onHide() {
            opened = true;
        }

        document.addEventListener('visibilitychange',
        function() {
            if (document.visibilityState === 'hidden') onHide();
        },
        {
            once: true
        });

        // 通过 iframe scheme 尝试拉起 App
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = ANDROID_SCHEME;
        document.body.appendChild(iframe);

        // 超时未拉起 → 显示下载页
        setTimeout(function() {
            document.body.removeChild(iframe);
            if (!opened) showAndroidDownload();
        },
        1200);
    }

    /* ================= Android 下载引导页 ================= */
    function showAndroidDownload() {
        showLayer(
        // 整体全屏容器
        '<div style="position:fixed;inset:0;z-index:999999;' + 'background:linear-gradient(180deg,#0f0f0f,#1a1a1a);' + 'display:flex;align-items:center;justify-content:center;' + 'font-family:-apple-system,BlinkMacSystemFont;">' +

        '<div style="width:100%;max-width:380px;padding:28px;color:#fff;">' +

        // App 图标 + 名称
        '<div style="text-align:center;margin-bottom:26px;">' + '<div style="width:72px;height:72px;margin:0 auto 14px;' + 'background:#000;border-radius:18px;' + 'display:flex;align-items:center;justify-content:center;' + 'font-size:28px;font-weight:600;">' + APP_NAME.charAt(0) + '</div>' + '<div style="font-size:22px;font-weight:600;">' + APP_NAME + '</div>' + '<div style="font-size:13px;color:#aaa;margin-top:6px;">' + '更流畅 · 更稳定 · 更省心' + '</div>' + '</div>' +

        // 核心引导卡片
        '<div style="background:#111;border-radius:18px;padding:22px;' + 'box-shadow:0 20px 40px rgba(0,0,0,.35);">' +

        '<div style="font-size:16px;line-height:1.8;color:#eee;">' + '推荐下载安装 App<br>' + '获得完整、稳定的使用体验' + '</div>' +

        '<ul style="margin:18px 0 22px;padding:0;list-style:none;' + 'font-size:14px;color:#bbb;line-height:1.9;">' + '<li>• 打开速度更快</li>' + '<li>• 无浏览器限制</li>' + '<li>• 使用更稳定</li>' + '</ul>' +

        // APK 下载按钮
        '<a href="' + APK_URL + '" style="' + 'display:block;width:100%;text-align:center;' + 'padding:14px 0;border-radius:14px;' + 'background:#fff;color:#000;font-size:16px;font-weight:600;' + 'text-decoration:none;">' + '下载安装 App' + '</a>' +

        // 已安装用户手动拉起
        '<a href="' + ANDROID_SCHEME + '" style="' + 'display:block;margin-top:14px;text-align:center;' + 'font-size:14px;color:#aaa;text-decoration:none;">' + '已安装？点这里直接打开' + '</a>' +

        '<div style="margin-top:16px;text-align:center;' + 'font-size:12px;color:#666;">' + '若已安装但未自动打开，请手动点击上方链接' + '</div>' +

        '</div>' + '</div>' + '</div>');
    }

    /* ================= iOS 桌面模式：拦截外跳 ================= */
    // 防止 target="_blank" 跳 Safari
    function fixIOSLinks() {
        document.addEventListener('click',
        function(e) {
            var a = e.target.closest('a');
            if (!a) return;

            var href = a.getAttribute('href');
            if (!href) return;

            // 外链不处理
            if (/^https?:\/\//i.test(href)) return;

            e.preventDefault();
            location.href = href;
        },
        true);

        // 移除所有 target="_blank"
        var links = document.querySelectorAll('a[target="_blank"]');
        for (var i = 0; i < links.length; i++) {
            links[i].removeAttribute('target');
        }
    }

    /* ================= 主逻辑入口 ================= */
    function run() {

        /* ---------- iOS 浏览器 ---------- */
        if (isIOSBrowser) {
            var tip = "请使用 Safari 打开并添加到桌面";
            if (isWeChat) tip = "请点击右上角 ··· 用 Safari 打开";
            if (isQQ) tip = "请在浏览器中打开后添加到桌面";

showLayer(
  '<div style="position:fixed;inset:0;z-index:999999;' +
  'background:linear-gradient(180deg,#f5f6f8,#ffffff);' +
  'display:flex;align-items:center;justify-content:center;' +
  'font-family:-apple-system,BlinkMacSystemFont;padding:24px;">' +

    '<div style="width:100%;max-width:360px;text-align:center;">' +

      // 顶部标识
      '<div style="margin-bottom:22px;">' +
        '<div style="width:72px;height:72px;margin:0 auto 14px;' +
        'border-radius:18px;background:#000;' +
        'display:flex;align-items:center;justify-content:center;' +
        'color:#fff;font-size:28px;font-weight:600;">' +
          APP_NAME.charAt(0) +
        '</div>' +
        '<div style="font-size:22px;font-weight:600;color:#111;">' +
          APP_NAME +
        '</div>' +
      '</div>' +

      // 提示卡片
      '<div style="background:#fff;border-radius:18px;padding:22px;' +
      'box-shadow:0 20px 40px rgba(0,0,0,.08);text-align:left;">' +

        '<div style="font-size:16px;color:#222;line-height:1.6;margin-bottom:10px;">' +
          '当前打开方式暂不支持运行' +
        '</div>' +

        '<div style="font-size:14px;color:#555;line-height:1.8;margin-bottom:16px;">' +
          tip +
        '</div>' +

        '<div style="background:#f6f7f9;border-radius:12px;padding:14px;' +
        'font-size:14px;color:#444;line-height:1.9;">' +
          '① 点击底部 <b>···选择“共享”或者“分享”</b><br>' +
          '② 然后在选择 <b>更多</b><br>' +
          '③ 点击 <b>添加到主屏幕</b>' +
        '</div>' +

        '<div style="margin-top:14px;text-align:center;' +
        'font-size:12px;color:#888;">' +
          '添加后可像 App 一样直接打开' +
        '</div>' +

      '</div>' +
    '</div>' +
  '</div>'
);

document.title = "请使用 Safari 打开";
            return;
        }

        /* ---------- iOS 桌面 ---------- */
        if (isIOSDesktop) {

            // 修复链接行为
            fixIOSLinks();

            // 每个版本只弹一次欢迎层
            if (!sessionStorage.getItem("ios_intro_" + APP_VERSION)) {
                sessionStorage.setItem("ios_intro_" + APP_VERSION, "1");

                var logHtml = "";
                for (var i = 0; i < UPDATE_LOG.length; i++) {
                    logHtml += "• " + UPDATE_LOG[i] + "<br>";
                }

showLayer(
  '<div style="position:fixed;inset:0;z-index:999999;' +
  'background:linear-gradient(180deg,#f5f6f8,#ffffff);' +
  'display:flex;align-items:center;justify-content:center;' +
  'font-family:-apple-system,BlinkMacSystemFont;text-align:center;padding:24px;">' +

    '<div style="width:100%;max-width:360px;">' +

      // 顶部 App 标识
      '<div style="margin-bottom:22px;">' +
        '<div style="width:72px;height:72px;margin:0 auto 14px;' +
        'border-radius:18px;background:#000;' +
        'display:flex;align-items:center;justify-content:center;' +
        'color:#fff;font-size:28px;font-weight:600;">' +
          APP_NAME.charAt(0) +
        '</div>' +
        '<div style="font-size:22px;font-weight:600;color:#111;">' +
          APP_NAME +
        '</div>' +
        '<div style="font-size:13px;color:#888;margin-top:6px;">' +
          '当前版本 v' + APP_VERSION +
        '</div>' +
      '</div>' +

      // 核心卡片
      '<div style="background:#fff;border-radius:18px;padding:22px;' +
      'box-shadow:0 20px 40px rgba(0,0,0,.08);text-align:left;">' +

        '<div style="font-size:16px;color:#222;line-height:1.6;margin-bottom:12px;">' +
          '欢迎回来 👋<br>' +
          '这次更新为你做了这些优化：' +
        '</div>' +

        '<div style="font-size:14px;color:#555;line-height:1.8;margin-bottom:18px;">' +
          logHtml +
        '</div>' +

        '<button onclick="location.reload()" style="' +
          'width:100%;padding:14px 0;border:0;' +
          'background:#000;color:#fff;' +
          'border-radius:14px;font-size:16px;font-weight:600;">' +
          '开始使用' +
        '</button>' +

        '<div style="margin-top:12px;text-align:center;' +
        'font-size:12px;color:#888;">' +
          '已为你准备好更流畅的体验' +
        '</div>' +

      '</div>' +
    '</div>' +
  '</div>'
);
            }
            return;
        }

        /* ================= Android ================= */

        // ① Android 自己 App → 直接放行
        if (isMyAndroidApp) {
            return;
        }

        // ② Android 微信 / QQ → 只提示「浏览器打开」
        if (isAndroid && (isWeChat || isQQ)) {
            showLayer('<div style="position:fixed;inset:0;background:#fff;z-index:999999;' + 'display:flex;align-items:center;justify-content:center;' + 'font-family:-apple-system;text-align:center;padding:24px;">' + '<div style="max-width:360px">' + '<h2 style="font-size:20px;margin-bottom:12px;">' + APP_NAME + '</h2>' + '<p style="font-size:15px;color:#333">' + '当前环境无法下载应用<br>请点击右上角 ···<br>选择“在浏览器中打开”' + '</p>' + '</div>' + '</div>');
            return;
        }

        // ③ Android 系统浏览器 → 才允许拉 App / 下载
        if (isAndroid) {
            tryOpenAndroidApp();
            return;
        }

    }

    /* ================= 生命周期绑定 ================= */
    // pageshow：返回页面 / 冷启动都会触发
    window.addEventListener('pageshow', run);

})();
// ====================== iOS 桌面二次兜底 ======================
// 防止部分情况下链接仍跳 Safari
(function() {
    var ua = navigator.userAgent.toLowerCase();
    var isIOS = /iphone|ipad|ipod/.test(ua);

    var isStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;

    // 非 iOS 桌面直接放行
    if (!isIOS || !isStandalone) return;

    document.addEventListener('click',
    function(e) {
        var a = e.target.closest('a');
        if (!a) return;

        var href = a.getAttribute('href');
        if (!href) return;

        // 只接管站内链接
        if (/^https?:\/\//i.test(href)) return;

        e.preventDefault();

        // 强制使用当前站内路径跳转
        var url = new URL(href, location.href);
        location.assign(url.pathname);
    },
    true);
})();
