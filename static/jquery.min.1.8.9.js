  // 获取页面元素
  var searchInput = document.getElementById('searchInput');
  var searchButton = document.getElementById('searchButton');
  var searchResultsContainer = document.getElementById('searchResults');

  // 创建 Fuse 实例
  var fuse;

  // 异步加载多个 JSON 文件并合并
  Promise.all([
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/sanji/index.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/sanji/index1.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/sanji/index2.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/sanji/index3.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/sanji/index4.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index1.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index2.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index3.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index4.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuixin/index.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuixin/index1.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuixin/index2.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuixin/index3.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuixin/index4.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuire/index.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuire/index1.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuire/index2.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuire/index3.json').then(response => response.json()),
    fetch('https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/zuire/index4.json').then(response => response.json())	
  ])
  .then(jsonDataArray => {
    // 合并所有 JSON 数据到一个数组
    var combinedData = jsonDataArray.flat();

    // 创建 Fuse 实例并传入合并后的数据
    fuse = new Fuse(combinedData, {
      keys: ['biaoti'],
      includeScore: true,
      threshold: 0.4
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

  // 监听搜索按钮点击事件
  searchButton.addEventListener('click', function() {
    var keyword = searchInput.value.trim();
    var results = fuzzySearch(keyword);
    displaySearchResults(results);
  });

  // 监听搜索框输入事件
  searchInput.addEventListener('input', function() {
    var keyword = searchInput.value.trim();
    var results = fuzzySearch(keyword);
    displaySearchResults(results);
  });

  // 模糊搜索函数
  function fuzzySearch(keyword) {
    var results = fuse.search(keyword);
    return results.map(result => result.item);
  }

  // 显示搜索结果
  function displaySearchResults(results) {
    // 清空搜索结果容器
    searchResultsContainer.innerHTML = '';

    // 如果有搜索结果，逐个添加到容器中
    if (results.length > 0) {
      results.forEach(function(result) {
        // 创建带有链接的 <a> 元素
        var linkElement = document.createElement('a');
        linkElement.href = ''+ jiexijiekou1 +'https://'+ lo +lujing+ result.bofang + houzhui;
        linkElement.target = '_blank'; // 在新窗口打开链接
		linkElement.textContent = '搜索到的' + result.biaoti;

        // 创建包含 bofang 的 <img> 元素
        var imgElement = document.createElement('img');
        imgElement.src = 'https://'+ lc +'.life/pic/'+ result.bofang+'.jpg';
        imgElement.alt = result.biaoti;

        // 将 img 元素嵌套在 a 元素中
        linkElement.appendChild(imgElement);

        // 创建包含链接和 bofang 的 <div> 元素
        var resultContainer = document.createElement('div');
        resultContainer.className = 'resultContainer';
        resultContainer.appendChild(linkElement);

        // 将整个容器添加到搜索结果区域
        searchResultsContainer.appendChild(resultContainer);
      });
    } else {
      // 如果没有搜索结果，显示随机推荐的9条内容
      var randomRecommendations = getRandomRecommendations(9);
      randomRecommendations.forEach(function(recommendation) {
        // 创建带有链接的 <a> 元素
        var linkElement = document.createElement('a');
	    linkElement.href = ''+ jiexijiekou1 +'https://'+ lo +lujing + recommendation.bofang + houzhui;
        linkElement.target = '_blank';
        linkElement.textContent = '未搜索到推荐:' + recommendation.biaoti;		

        // 创建包含 bofang 的 <img> 元素
        var imgElement = document.createElement('img');
        imgElement.src = 'https://'+ lc +'.life/pic/'+ recommendation.bofang+'.jpg';
        imgElement.alt = recommendation.biaoti;

        // 将 img 元素嵌套在 a 元素中
        linkElement.appendChild(imgElement);

        // 创建包含链接和 bofang 的 <div> 元素
        var resultContainer = document.createElement('div');
        resultContainer.className = 'resultContainer';
        resultContainer.appendChild(linkElement);

        // 将整个容器添加到搜索结果区域
        searchResultsContainer.appendChild(resultContainer);
      });
    }
  }

  // 获取随机推荐的数据
  function getRandomRecommendations(count) {
    var randomResults = [];
    for (var i = 0; i < count; i++) {
      // 获取随机索引
      var randomIndex = Math.floor(Math.random() * fuse._docs.length);
      // 将随机选取的数据添加到结果数组中
      randomResults.push(fuse._docs[randomIndex]);
    }
    return randomResults;
  }


/**/
  
function password() {   
var testV = 1;   
var pass1 = prompt('请输入验证码','');   
while (testV < 2) {   
if (!pass1)   
history.go(-1);   
if (pass1 == mima) {//初始密码codeke
break;   
}   
testV+=1;   
var pass1 =   
prompt(wangji,lianxi);    
}   
if (pass1!="password" & testV ==2)   
window.location.href="https://m.baidu.com/s?wd=%E5%8A%A0%E5%BE%AE%E4%BF%A1xiaosse";
return " ";    
}   
document.write(password());
    var div=document.getElementById("gengxintishi");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/什么也不显示？咨询联系人/g,tishi); 
document.getElementById("gengxin").innerHTML = gengxin;
//**///
        window.onload = function () {
            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // preventClicks : false,
            });

        if (isMobile()) {
 if(!isUC()) {
            var swipermobile = new Swiper('.mobile-swiper-container', {
                // spaceBetween: 30,
                // centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // preventClicks : false,
            });

        }
}

}


   
   function ShowBoxHandle() {


        function setOpacity(el, opa) {
            el.style.opacity = opa;
            el.filter = "alpha(opacity=" + opa + ")";
            el.style.MozOpacity = opa * 0.01;
            el.style.KhtmlOpacity = opa;
        }


        function fadeOut(elem, speed, opacity) {
            speed = speed || 20;
            opacity = opacity || 0;
            var val = 100;
            (function () {
                setOpacity(elem, val);
                val -= 5;
                if (val >= opacity) {
                    setTimeout(arguments.callee, speed);
                } else if (val < 0) {
                    elem.style.display = 'none';
                }
            })();
        }

        function fadeIn(elem, speed, opacity) {
            speed = speed || 20;
            opacity = opacity || 100;
            elem.style.display = 'block';
            setOpacity(elem, 0);
            var val = 0;
            (function () {
                setOpacity(elem, val);
                val += 5;
                if (val <= opacity) {
                    setTimeout(arguments.callee, speed)
                }
            })();
        }

        var showBox = document.querySelector(".showBox");
        var showBoxMsg = document.querySelector(".showBoxMsg");
        var widthBox = document.body.clientWidth - (document.body.clientWidth * 0.25);




        showBoxMsg.style.width = widthBox + "px"


        var showBoxMsgBtn = document.querySelector(".showBoxMsgBtn");
        var showBoxMsgDiv= document.querySelector(".showBoxMsgDiv");



        showBoxMsg.onclick = function () {
            fadeOut(showBox, 10);
            fadeOut(showBoxMsg, 10);
        };

        showBoxMsgBtn.onclick = function () {
            fadeOut(showBox, 10);
            fadeOut(showBoxMsg, 10);
        };

        showBox.onclick = function () {
            fadeOut(showBox, 10);
            fadeOut(showBoxMsg, 10);
        };
        showBoxMsgDiv.onclick = function () {
            fadeOut(showBox, 10);
            fadeOut(showBoxMsg, 10);
        };

        setTimeout(function () {
            fadeIn(showBox, 10);
            fadeIn(showBoxMsg, 10)
        }, 100);
    }

ShowBoxHandle();