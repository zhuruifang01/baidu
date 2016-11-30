$(function(){
//整屏滑动
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    //向上滑
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH);
    });
    //向下滑
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
        $("#fullpage").css("marginTop",-num*clientH);
    });
    //一次动画完打开开关
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        //滑屏margin动画
        var clientW=$(window).width();
        if(clientW>1000){
            if(num==0){
                return;
            }
            $(".containbox").each(function(index,obj){
                if(index==num){
                    $(obj).find(".left_i").css({marginLeft:0,opacity:1});
                    $(obj).find(".right_i img").css({marginRight:0,opacity:1});
                }else{
                    $(obj).find(".left_i").css({marginLeft:-100,opacity:0});
                    $(obj).find(".right_i img").css({marginRight:-100,opacity:0});
                }
            });
        }
    });
    //$("#fullpage")[0].mousedown(function(e){e.preventDefault();})
    //$("#fullpage")[0].mousemove(function(e){e.preventDefault();})
    //$("#fullpage")[0].mouseup(function(e){e.preventDefault();})
//小屏菜单
    var flag2=true;
    $(".menu").click(function(){
        if(flag2){
            $(this).find(".menu1").css({transform:"translate(0,6px) rotate(45deg)"});
            $(this).find(".menu2").css({transform:"translate(0,-6px) rotate(-45deg)"});
            $(".scene .box a").each(function(index,obj){
                $(this).css({opacity:0,display:"block"});
                $(obj).css({
                   animation:"menusmall 1s linear forwards "+index*0.2+"s"
                })
            });
            flag2=false;
        } else{
            $(this).find(".menu1").css({transform:"translate(0,0px) rotate(0deg)"});
            $(this).find(".menu2").css({transform:"translate(0,0px) rotate(0deg)"});
            $(".scene .box a").each(function(index,obj){
                $(this).css({opacity:1});
                $(obj).css({
                   animation:"menusmall2 1s linear forwards "+(1.2-index*0.2)+"s"
                })
                $(this).css({diaplay:"none"});
            });
            flag2=true;
        }

    });
    $(window).resize(function(){
        var clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",-num*clientH);
        if(clientW>1000){
            $(".scene .box a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(90deg)"
            });
            $(".menu1,.menu2").css({transform:"translate(0,0px) rotate(0deg)"});
            flag=true;
        }
    });

});