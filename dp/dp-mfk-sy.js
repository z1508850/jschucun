<style>
@font-face {
      font-family: "MyFont";
   src: url("https://cdn3.codesign.qq.com/screens/2023/09/14/xDP3923q4EY409jwlKp14/nhyawbve23fq764v/7fd2e13c-8889-4df9-8e16-940b065f4d1a.png") format("woff2"),
           url("https://cdn3.codesign.qq.com/screens/2023/09/14/xDP3923q4EY409jwlKp14/nhyawbve23fq764v/e46ef2a7-10b7-4146-aee6-c3896d9c4175.png") format("woff");
    }
    body {
      font-family: "MyFont", sans-serif;
background-image: url('https://cdn3.codesign.qq.com/screens/previews/2023/09/14/DKmwMQqtORMzYDe7DEkt5kBwa6MpgIYYBu2FLI5Z.png');
    }
.h4{
 font-family: "MyFont";
   }
.site__title {
color: #f35626;
font-family: MyFont;
background-image: -webkit-linear-gradient(yellow, yellow);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-animation: hue 1s infinite linear;
}
@-webkit-keyframes hue {
from {

-webkit-filter: hue-rotate(0deg);
-moz-filter: hue-rotate(0deg);
}
to {
-webkit-filter: hue-rotate(-360deg);
-moz-filter: hue-rotate(-360deg);
}
}

 .hr {
    color: #000;
    border: 0;
    font-size: 12px;
    padding: 10px 0;
    position: relative;
}
.hr::before {
font-weight: bold;
font-family: "MyFont";
    content: "天卡推荐";
 font-size: 16px;
    position: absolute;
    padding: 0 10px;
    line-height: 1px;
    border: solid red;
    border-width: 0 100vw;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
}
 .hrr {
    color: 	#000;
    border: 0;
    font-size: 12px;
    padding: 10px 0;
    position: relative;
}
.hrr::before {
font-weight: bold;
font-family: "MyFont";
    content: "周月推荐";
 font-size: 16px;
    position: absolute;
    padding: 0 10px;
    line-height: 1px;
    border: solid Yellow;
    border-width: 0 100vw;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
}

 .hrrr {
    color: 	#000;
    border: 0;
    font-size: 12px;
    padding: 10px 0;
    position: relative;
}
.hrrr::before {
font-weight: bold;
font-family: "MyFont";
    content: "售后无忧";
 font-size: 16px;
    position: absolute;
    padding: 0 10px;
    line-height: 1px;
    border: solid Chartreuse;
    border-width: 0 100vw;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
}
</style>

<div style = "text-align : center;margin-top:20px;">




<img id = "tuijiantu" style = "margin-top:0px;width:250px;" src = "https://cdn3.codesign.qq.com/screens/previews/2023/06/27/pEG8xXeDORSF0AI7auyMJWMzYqaVxPB2dvDoR7GT.png"   />

</div>

<script src="//lib.baomitu.com/jquery/1.12.4/jquery.min.js"></script>







<script>
            ((function() {
            var callbacks = [],  timeLimit = 50, open = false;
            setInterval(_debug, 1);
            return {
                addListener: function(fn) {
                    callbacks.push(fn);
                },
                cancleListenr: function(fn) {
                    callbacks = callbacks.filter(function(v) {
                        return v !== fn;
                    });
                }
            }
 
            function _debug() {
                var startTime = new Date();
                debugger;
                if (new Date() - startTime > timeLimit) {
                    if (!open) {
                        callbacks.forEach(function(fn) {
                            fn.call(null);
                        });
                    }
                    open = true;
                    window.stop();
                    alert('大佬别扒了 需要同款请邮件联系 lol@xzwp.lol');
                    document.body.innerHTML = "";
                } else {
                    open = false;
                }
            }
        })()).addListener(function() {
            window.location.reload();
        });
</script>
<script>
var a = 'retrtrfdcfvvvv';
  var ym = window.location;
  var ym2 = 'lff.mfk99.cn/s/';
  var ym3 = String(ym);
  function suan(a){
    var re = a.substring(0,2);
    var tr = a.substring(2,4);
    var tr2 = a.substring(4,6);
    var fd = a.substring(6,8);
    var cf = a.substring(8,10);
    var vv = a.substring(10,12);
    var vv2 = a.substring(12,14);
    re = 'h';
    tr = 't';
    tr2 ='t';
    fd = 'p';  
    cf = ':';
    vv = '/';
    vv2 = '/';
    var p = re+tr+tr2+fd+cf+vv+vv2;
    return p;
  }
  if (ym3.indexOf(ym2) == -1 ) {
 alert("防扒站 by 5v5 此页面专属于lff.mfk99.cn/s/ 需要同款美化请邮件联系lol@xzwp.lol"); 
  
    var b = suan(a) + 'lff.mfk99.cn/s/';
    window.location = b;
  }
</script>
