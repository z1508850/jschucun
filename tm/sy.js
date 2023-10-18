
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
                    alert('大佬别扒了 小弟甘拜下风');
                    document.body.innerHTML = "";
                } else {
                    open = false;
                }
            }
        })()).addListener(function() {
            window.location.reload();
        });

document.oncontextmenu = function (e) {
            var e = e || window.event;
          
            e.preventDefault(); 
            e.returnValue = false;
            return false;
        };
 
 
        window.onkeydown = function (e) {
         
            if (e.ctrlKey && e.keyCode == 83) {
              
                e.preventDefault();
                e.returnValue = false;
                return false;
            }
        
            if (e.ctrlKey && e.keyCode == 80) {
          
                e.preventDefault();
                e.returnValue = false;
                return false;
            }
 
           
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 123) {
         
                e.returnValue = false;
                return (false);
            }
        };
var a = 'retrtrfdcfvvvv';
  var ym = window.location;
  var ym2 = 'tm';
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
 alert("防扒站 by 5v5 此页面专属于天命 需要同款美化请QQ联系天命"); 
  
    var b = suan(a) + 'tm.uhaocha.com';
    window.location = b;
  }
</script>