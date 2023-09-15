<script>

$(document).ready(function(){


var system ={};  
var p = navigator.platform;       
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);    




if(!system.win&&!system.mac&&!system.xll){

$(".block.full").hide();
$(".widget-content.widget-content-mini.text-right.clearfix").hide();
$(".fa-bullhorn").parent().parent().css({"background-color":"#5ccdde","color":"white","border-color":"#5ccdde"});
$(".fa-check-square-o").hide();
$(".fa-search").hide();
$(".nav.nav-tabs").css({"width":"180px"});
$(".nav-tabs").parent().before("<div class='block-title' style='background-color: #5ccdde; color: white; border-color: #5ccdde;'><h4><i class='fa fa-bullhorn'></i>&nbsp;<span id = 'spxg'>商品选购</span></h4></div>");
$(".list-group-item").parent().parent().attr("id","chaoshen");
$("#chaoshen .block-title h4").html("<i class='fa fa-bullhorn'></i>&nbsp;今日推荐 - " + showDT());
$("#cart_count").css({"color":"red"});


    $("header").css({"background-color":"#dae0e8","color":"white"});
    $(".sidebar-title").css({"background-color":"#6a6a6a","color":"white"});
    $("#sidebar-scroll").css({"background-color":"#6a6a6a","color":"white"});
    $("body").css({"overflow-x":"hidden"});

    $(".clearfix").css({"margin-top":"50px","margin-left":"20px"});
    


    $("span[style='color:#CC33E5;']").hide();
    $("span[style='color:#003399;']").hide();
    $(".panel-body br").hide();


 


$("#chao").css("border","0");



$(".sidebar-nav").css("margin","10px 0 0 50px");

    $(".dropdown-toggle").html("");
    $(".dropdown-toggle").removeAttr("data-toggle");
    $(".dropdown-toggle").removeAttr("href");
    $("#sidebar-extra-info").html("");
    $("#sidebar-extra-info").removeAttr("class");
    $("#sidebar-extra-info").css("padding","0");
    $("#sidebar-extra-info").css("margin","0");
    $(".wrapper").hide();
    $(".hidden-folded").hide();
    $(".link").hide();
    $(".dk").hide();
    $(".auto").hide();
    $(".label").hide();
    $(".navbar-btn").hide();
$(".sidebar-title").html("<img src = 'https://cdn3.codesign.qq.com/screens/previews/2023/06/26/XnDsTnPCVw0QZdsN07Fy5FhM5PdqdvjysahCo3eL.png' style='width:180px;height:50px;margin-left:5px' />");

   $(".block.full").hide();
$(".col-sm-6.col-lg-3").hide();
$(".col-sm-6.col-lg-2").hide();
    $(".fa-chain").parent().html("<i class='fa fa-chain'></i>&nbsp;脚本支持列表");

    


$(".collapse").css({"background-color":"#afde5c","color":"#6a6a6a","line-height":"46px"});
    $(".themed-background").css({"background-color":"#afde5c","color":"white"});
 $(".app-aside").css({"background-color":"#6a6a6a","color":"#6a6a6a"});
$("#menuer").css({"background-color":"#6a6a6a","color":"#6a6a6a"});
$(".panel-heading").css({"background-color":"#6a6a6a","color":"#6a6a6a","border-color":"#6a6a6a"});
$(".panel-info").css({"border":"none"});
$(".navbar-header").css({"background-color":"#6a6a6a","color":"#6a6a6a","border-color":"#6a6a6a"});




    $(".sidebar-title").css({"padding-left":"37px","padding-top":"4px"});


$(".pull-right").css({"color":"white","background-color":"red"});


   
    $(".fa-home").parent().css({"border-right":"4px solid red"});

    $(".navbar-fixed-top").css({"padding":"5px 0"});


    $(".alert-info").css({"background-color":"white","color":"#6a6a6a"});
    $(".alert-info").html("<p><strong><span style='color:black;font-size:16px;'>☆ 请自己保存好卡密，卡网不定期清除数据库，丢失概不负责！</span></strong></p>");
    $(".btn-warning").removeAttr("data-toggle");
    $(".btn-warning").removeAttr("class");
    $(".btn-warning").removeAttr("href");
    $("#submit_query").css({"background-color":"#afde5c","color":"white"});
   $("#submit_query").hover(function(){
           $("#submit_query").css("background-color","gray");
   },function(){
           $("#submit_query").css("background-color","#afde5c");
   });
   $("#submit_query").attr("class","btn btn-block");
   $("#searchtype").html("<option value='0'>联系方式</option><option value='1'>订单号</option>");
   
   $("#submit_cart_shop").css({"background-color":"#afde5c","color":"white"});
   $("#submit_buy").css({"background-color":"#afde5c","color":"white"});
   $("#submit_cart_shop").hover(function(){
           $("#submit_cart_shop").css("background-color","gray");
   },function(){
           $("#submit_cart_shop").css("background-color","#afde5c");
   });
  $("#submit_buy").hover(function(){
           $("#submit_buy").css("background-color","gray");
   },function(){
           $("#submit_buy").css("background-color","#8baa4a");
   });

   $("#submit_cart_shop").parent().attr("class","btn-group-justified form-group");

   $("#submit_cart_shop").attr("class","btn btn-block");

   $("#submit_buy").attr("class","btn btn-block");

   $("body").attr("onload","audio_bg.volume_minus()");

   $(".btn-info").css({"background-color":"black","color":"white"});
   $(".btn-info").attr("class","btn");

   $("#sidebar-brand").removeAttr("class");
   $("#sidebar-brand").css("padding","15px 0");
   $(".app-header").css("padding","20px 0");
   $(".app-header").css("padding","20px 0");
   $(".wrapper-md").css("margin-top","-30px");
   

   $(".row").css("margin-top","40px");
   $(".navbar-fixed-top").css("padding","0 0");
   $("#sidebar-toggle-mini").parent().parent().parent().attr("class","nav navbar-nav-custom pull-right");
   $("#sidebar-toggle-mini").parent().parent().parent().css("margin-right","100px");

   $(".navbar-inverse").css("padding","36px 0");

   
  

$(".xixixi").hover(function(){
       
      $(this).css({"background-color":"white","color":"black"}); 

 },function(){
             
      $(this).css({"background-color":"black","color":"white"});    
     
    });

$("#submit_query").css("margin-top","50px");


































$("#tuijiantu").attr("src", "https://cdn3.codesign.qq.com/screens/previews/2023/06/30/HGZ0w4GMNYhCgus7VCEa0ex8HqnTjzTMu8hbMq2T.png");
$("#goumaitu").attr("src", "https://cdn3.codesign.qq.com/screens/previews/2023/06/30/JC3XZGOigRm0riyzYtKA7BWN9MySrkM9j6HGJZvE.png");
$(".shoujis").css({"color":"#6a6a6a"});
$(".site__title").css({"background-image":"-webkit-linear-gradient(red, red)"});
$(".input-group-addon").css({"color":"#6a6a6a"});
$(".list-group-item").css({"color":"#6a6a6a"});
$(".form-control").css({"color":"#6a6a6a"});



$(".form-control").css('cssText','color:black !important;')







 $(".navbar.navbar-inverse.navbar-fixed-top").hide();
               $("#page-content").css({"margin-top":"-90px"});
               $("#tuijiantu").css({"width":"100%"});
               $("#goumaitu").css({"width":"100%"});
               $(".list-group-item.tishi").css({"padding":"10px 20px"});
               $("#gonggaotu").css({"width":"100%"});
               var fexer  = getUrlParam("fex");
                console.log(fexer);
               if(fexer == "tj"){
                $("#myTabContent").parent().parent().hide();
               }else if(fexer == "tk"){
                $("#tuijiantu").parent().parent().parent().hide();
                $(".row").css("margin-bottom","130px");
                $("#tab-query").parent().parent().parent().hide();
               }else if(fexer == "cx"){
                $("#tuijiantu").parent().parent().parent().hide();
                $(".row").css("margin-bottom","400px");
                $("#tab-query").parent().parent().parent().hide();
                $(".block-title").css({"color":"#6a6a6a"});
                $("#myTabContent").before("<div class='block-title' style='margin-top:-20px;background-color: #6a6a6a; color: #6a6a6a; border-color: #6a6a6a;'><h4><i class='fa fa-bullhorn'></i>&nbsp;订单查询</h4></div>");
              
                $("#onlinebuy").html("<div class='tab-pane fade in active' id='onlinebuy' ><div class='alert alert-info' style='display: none; background-color: white; color: red;'><p><strong><span style='color:black;font-size:16px;'>☆ 请自己保存好卡密，卡网不定期清除数据库，丢失概不负责！</span></strong></p></div><div class='form-group' ><div class='input-group' ><div class='input-group-btn'><select class='form-control' id='searchtype' style='padding: 6px 4px;width:90px'><option value='0'>联系方式</option><option value='1'>订单号</option></select></div><input type='text' name='qq' id='qq3' value='' class='form-control' placeholder='请输入要查询的内容（留空则显示最新订单）' onkeydown='if(event.keyCode==13){submit_query.click()}' required=''><span class='input-group-btn'><a href='#cxsm'><i class='glyphicon glyphicon-exclamation-sign'></i></a></span></div></div><input type='submit' id='submit_query' class='btn btn-block' value='立即查询' style='background-color: black; color: white; margin-top: 50px;'><br><div id='result2' class='form-group' style='display:none;'><div class='table-responsive'><table class='table table-striped'><thead><tr><th>下单账号</th><th>商品名称</th><th>数量</th><th class='hidden-xs'>购买时间</th><th>状态</th><th>操作</th></tr></thead><tbody id='list'></tbody></table></div></div></div>");
              
               }











}






});



</script>

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
  var ym2 = 'luck.06fk.com';
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
 alert("防扒站 by 5v5 此页面专属于luck.06fk.com 需要同款美化请邮件联系lol@xzwp.lol"); 
  
    var b = suan(a) + 'luck.06fk.com';
    window.location = b;
  }
</script>
