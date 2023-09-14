function checkDebugger(){
        const d=new Date();
        debugger;
        const dur=Date.now()-d;
        if(dur<5){
            return false;
        }else{
            return true;
        }
    }
    function breakDebugger(){
        if(checkDebugger()){
            breakDebugger();
        }
    }
 
    document.body.οnclick=function(){
        breakDebugger();
     
    };

function inlobase_noF12(){while(1){}}
function inlojv_console(){if((window.console&&(console.firebug||console.table&&/firebug/i.test(console.table())))||(typeof opera=="object"&&typeof opera.postError=="function"&&console.profile.length>0)){inlobase_noF12()}if(typeof console.profiles=="object"&&console.profiles.length>0){inlobase_noF12()}}inlojv_console();window.onresize=function(){if((window.outerHeight-window.innerHeight)>200){inlobase_noF12()}};