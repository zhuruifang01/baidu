$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })

    var ch=$(window).height();
    var num=0;
    var flag=true;

    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*ch);
    })
    
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*ch);
    });
    
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    });

    $("section").eq(1).css("height",(ch+100)+"px");
    $("section").eq(3).css("height",(ch+100)+"px");
})