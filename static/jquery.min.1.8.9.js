/* ========= 启动 ========= */
/********************************************************
 * 1.8.8.js 最终完整版
 * 低噪音 JSON 顺序探测 + 单 JSON 下滑慢加载
 * 纯静态 · GitHub Pages 专用
 ********************************************************/

/* ========= JSON 探测配置 ========= */
var RANDOM_RANGE = 5;
var JSON_INDEX = Math.floor(Math.random() * RANDOM_RANGE);// 当前 JSON 编号

var JSON_BASE = "";


var FAIL_COUNT = 0;     // 连续失败次数
var FAIL_LIMIT = 2;     // 连续失败上限（2 次认为后面没了）
var LOAD_COUNT = 0;     // 已成功加载的 JSON 数（demo1、demo2…）

/* ========= 单 JSON 内部慢加载配置 ========= */
var PAGE_SIZE = 12;     // 每次渲染条数（10~15 最稳）
var currentData = [];   // 当前 JSON 的完整数据
var renderIndex = 0;    // 当前已渲染到的位置
var currentContainer = null;
var isRendering = false;

/* ========= 渲染一批数据 ========= */
function renderChunk() {
  if (!currentContainer || isRendering) return;

  isRendering = true;

  var html = "";
  var end = Math.min(renderIndex + PAGE_SIZE, currentData.length);

  for (var i = renderIndex; i < end; i++) {
    var item = currentData[i];
    html +=
      '<figure>' +
        '<div class="pos">' +
          '<a href="' + jiexijiekou1 + 'https://' +
            lo + lujing + item.bofang + houzhui +
            '" target="_blank">' +
            '<img src="https://' + lc + '.info/pic/' +
              item.bofang + '.jpg" class="lazy">' +
            '<p>' + shijian + '</p>' +
          '</a>' +
        '</div>' +
        '<a href="#"><figcaption>' +
          item.biaoti +
        '</figcaption></a>' +
      '</figure>';
  }

  currentContainer.insertAdjacentHTML("beforeend", html);
  renderIndex = end;
  isRendering = false;
}

/* ========= 滚动触发 ========= */
function bindScrollLoad() {
  window.onscroll = function () {
    if (!currentContainer) return;

    var nearBottom =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 120;

    if (nearBottom) {
      if (renderIndex < currentData.length) {
        renderChunk();
      } else {
        loadNextJSON(); // 当前 JSON 播完，自动切下一个
      }
    }
  };
}

/* ========= 加载下一个 JSON ========= */
function loadNextJSON() {
  if (FAIL_COUNT >= FAIL_LIMIT) {
    finishLoad();
    return;
  }

  var url = JSON_BASE +
    (JSON_INDEX === 0 ? "index.json" : "index" + JSON_INDEX + ".json");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

      if (xhr.status === 200) {
        try {
          var obj = JSON.parse(xhr.responseText);

          FAIL_COUNT = 0;
          JSON_INDEX++;
          LOAD_COUNT++;

          // 准备容器
          var targetId = "demo" + LOAD_COUNT;
          var container = document.getElementById(targetId);

          if (!container) {
            container = document.createElement("div");
            container.className = "items";
            container.id = targetId;
            document.body.insertBefore(
              container,
              document.getElementById("jiazai")
            );
          }

          // 初始化慢加载状态
          currentData = obj;
          renderIndex = 0;
          currentContainer = container;

          renderChunk();
          bindScrollLoad();

        } catch (e) {
          FAIL_COUNT++;
          JSON_INDEX++;
        }

      } else {
        FAIL_COUNT++;
        JSON_INDEX++;
      }
    }
  };
}

/* ========= 加载完毕 ========= */
function finishLoad() {
  window.onscroll = null;
  document.getElementById("jiazai").innerHTML =
    '<center>' +
      '<input type="button" value="加载完毕" ' +
      'style="font-size:62px;height:150px;width:100%;" />' +
    '</center>';
}

/* ========= 文案替换 & 弹窗 ========= */
(function () {
  var art = document.getElementById("art");
  if (art) {
    art.innerHTML = art.innerHTML.replace(/什么也不显示？咨询联系人/g, tishi);
  }
  var gx = document.getElementById("gengxin");
  if (gx) gx.innerHTML = gengxin;
})();

/* ========= ShowBox（保持原效果） ========= */
function ShowBoxHandle() {
  function setOpacity(el, o) {
    el.style.opacity = o;
    el.filter = "alpha(opacity=" + o + ")";
  }
  function fadeIn(el) {
    el.style.display = "block";
    var v = 0;
    (function f() {
      setOpacity(el, v);
      if ((v += 5) <= 100) setTimeout(f, 10);
    })();
  }
  function fadeOut(el) {
    var v = 100;
    (function f() {
      setOpacity(el, v);
      if ((v -= 5) >= 0) setTimeout(f, 10);
      else el.style.display = "none";
    })();
  }

  var box = document.querySelector(".showBox");
  var msg = document.querySelector(".showBoxMsg");
  if (!box || !msg) return;

  box.onclick = msg.onclick = function () {
    fadeOut(box);
    fadeOut(msg);
  };

  setTimeout(function () {
    fadeIn(box);
    fadeIn(msg);
  }, 100);
}
ShowBoxHandle();

(function waitAll(){
  if (window.__JS2_STARTED__) return;

  if (
    window.__PWD_OK__ &&
    window.urldizhi &&
    typeof mulu !== "undefined"
  ) {
    window.__JS2_STARTED__ = true; // 🔒 启动锁
    JSON_BASE = urldizhi + mulu;
    loadNextJSON();
  } else {
    setTimeout(waitAll, 100);
  }
})();
