  var xhttp = new XMLHttpRequest();
  xhttp.open("GET",abcd, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = this.responseText;
      var obj = JSON.parse(json);
      var i;
      var html2="";
      for (i=0;i<obj.length;i++) {

      html2=html2+'        <figure>'+
'<div class="pos">'+
'            <a href="'+ jiexijiekou1 +'https://'+ lo +lujing+ obj[i].bofang +houzhui+'"' + 'target="_blank" >'+
'                <img id="imgid" src="https://'+ lc +'.info/pic/' + obj[i].bofang+'.jpg"'+ ' class="lazy">'+
'<p>'+shijian+'</p>'+
'</a>'+
'    </div>'+
'         <a href="#" >'+
'                <figcaption>'+
                  obj[i].biaoti+'</figcaption>'+'</a>'+
'        </figure>';


      document.getElementById("demo1").innerHTML =html2;
      
        }

    }
  }
  

  


  function add2(){

var xhttp = new XMLHttpRequest();
  xhttp.open("GET",abcd1, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = this.responseText;
      var obj = JSON.parse(json);
      var i;
      var html2="";
      for (i=0;i<obj.length;i++) {

html2=html2+'        <figure>'+
'<div class="pos">'+
'            <a href="'+ jiexijiekou1 +'https://'+ lo +lujing+ obj[i].bofang +houzhui+'"' + 'target="_blank" >'+
'                <img id="imgid" src="https://'+ lc +'.info/pic/' + obj[i].bofang+'.jpg"'+ ' class="lazy">'+
'<p>'+shijian+'</p>'+
'</a>'+
'    </div>'+
'         <a href="#" >'+
'                <figcaption>'+
                  obj[i].biaoti+'</figcaption>'+'</a>'+
'        </figure>';
      document.getElementById("demo2").innerHTML =html2;
        }


    }
  }  
   var div=document.getElementById("art");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/onclick="add2()/g,'onclick="add3()'); 
    window.alert("数据正在加载..点击确定稍等2秒")
  
  }
   function add3(){
  
var xhttp = new XMLHttpRequest();
  xhttp.open("GET",abcd2, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = this.responseText;
      var obj = JSON.parse(json);
      var i;
      var html2="";
      for (i=0;i<obj.length;i++) {

      html2=html2+'        <figure>'+
'<div class="pos">'+
'            <a href="'+ jiexijiekou1 +'https://'+ lo +lujing+ obj[i].bofang +houzhui+'"' + 'target="_blank" >'+
'                <img id="imgid" src="https://'+ lc +'.info/pic/' + obj[i].bofang+'.jpg"'+ ' class="lazy">'+
'<p>'+shijian+'</p>'+
'</a>'+
'    </div>'+
'         <a href="#" >'+
'                <figcaption>'+
                  obj[i].biaoti+'</figcaption>'+'</a>'+
'        </figure>';
      document.getElementById("demo3").innerHTML =html2;
        }


    }
  }  
   var div=document.getElementById("art");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/onclick="add3()/g,'onclick="add4()');
window.alert("数据正在加载..点击确定稍等2秒");   
  
  }
 
   function add4(){
  
var xhttp = new XMLHttpRequest();
  xhttp.open("GET",abcd3, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = this.responseText;
      var obj = JSON.parse(json);
      var i;
      var html2="";
      for (i=0;i<obj.length;i++) {

      html2=html2+'        <figure>'+
'<div class="pos">'+
'            <a href="'+ jiexijiekou1 +'https://'+ lo +lujing+ obj[i].bofang +houzhui+'"' + 'target="_blank" >'+
'                <img id="imgid" src="https://'+ lc +'.info/pic/' + obj[i].bofang+'.jpg"'+ ' class="lazy">'+
'<p>'+shijian+'</p>'+
'</a>'+
'    </div>'+
'         <a href="#" >'+
'                <figcaption>'+
                  obj[i].biaoti+'</figcaption>'+'</a>'+
'        </figure>';
      document.getElementById("demo4").innerHTML =html2;
        }


    }
  }  
   var div=document.getElementById("art");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/onclick="add4()/g,'onclick="add5()');
window.alert("数据正在加载..点击确定稍等2秒");   
  
  }


   function add5(){
  
var xhttp = new XMLHttpRequest();
  xhttp.open("GET",abcd4, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = this.responseText;
      var obj = JSON.parse(json);
      var i;
      var html2="";
      for (i=0;i<obj.length;i++) {

      html2=html2+'        <figure>'+
'<div class="pos">'+
'            <a href="'+ jiexijiekou1 +'https://'+ lo +lujing+ obj[i].bofang +houzhui+'"' + 'target="_blank" >'+
'                <img id="imgid" src="https://'+ lc +'.info/pic/' + obj[i].bofang+'.jpg"'+ ' class="lazy">'+
'<p>'+shijian+'</p>'+
'</a>'+
'    </div>'+
'         <a href="#" >'+
'                <figcaption>'+
                  obj[i].biaoti+'</figcaption>'+'</a>'+
'        </figure>';
      document.getElementById("demo5").innerHTML =html2;
        }


    }
  }  
   var div=document.getElementById("art");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/onclick="add5()/g,'onclick="add6()');
window.alert("数据正在加载..点击确定稍等2秒");   
  
  }



  function add6(){
  window.alert('没有资源了，不用在点了')
  var div=document.getElementById("art");
    var content=div.innerHTML;
    div.innerHTML=content.replace(/点击加载更多/g,'加载完毕');
  window.alert("数据加载完毕了..");

document.getElementById("jiazai").innerHTML ='<center>'+
'   <form>'+
 '     <input name="button" type="button" value="加载完毕" style="font-size:62px;padding-top:15px; height:150px;width:100%;"/>'+
'   </form>'+
'   </center>';

  }
/**/
    var div=document.getElementById("art");
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
setTimeout(function(){
 jsCode();
},9000);

function jsCode() {
document.getElementById("jiazai").innerHTML ='<center>'+
'   <form>'+
 '     <input name="button" type="button" value="点击加载更多"'+' onclick="add2()" style="font-size:62px;padding-top:15px; height:150px;width:100%;"/>'+
'   </form>'+
'   </center>';}
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
window.location.href="https://m.baidu.com/s?wd=" + sousuo;
return " ";    
}   
document.write(password());
