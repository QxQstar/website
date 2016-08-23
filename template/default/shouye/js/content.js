/**
 * Created by Administrator on 2015/12/17.
 */
$(function(){
    var ht = window.screen.availHeight-55;
    var hg = ht+20;
    $("#one").css("height",ht);
    $("#two").css("height",ht);
    $("#t").css("height",ht);
    $("#three").css("height",ht);
    $("#four").css("height",ht);
    $("#f").css("height",hg);
    $("#five").css("height",hg);
    $("#six").css("height",ht);
    $("#seven").css("height",ht);
    $("#eight").css("height",ht);
    $("#eight1").css("height",ht);
    $("#nine").css("height",ht);
    $("#shiyi").css("height",ht);
    $("#shisan").css("height",ht);
    $("#shisi").css("height",ht);
    $("#shiwu").css("height",ht);
    $("#shier").css("height",hg);
    var offset1 = $('#one').offset().top;
    var offset6 = $('#six').offset().top;
    var offset9 = $('#nine').offset().top;
    var offset12 = $('#shiyi').offset().top;
    var offset14 = $('#shier').offset().top;
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        if(scrollTop>=offset1&&scrollTop<offset6){
            $("#j12").removeClass("none");
            $("#j11").addClass("none");
            $("#j21").removeClass("none");
            $("#j22").addClass("none");
        }
        else if(scrollTop>=offset6&&scrollTop<offset9)
        {
            $("#j11").removeClass("none");
            $("#j12").addClass("none");
            $("#j22").removeClass("none");
            $("#j21").addClass("none");
            $("#j31").removeClass("none");
            $("#j32").addClass("none");
        }
        else if(scrollTop>=offset9&&scrollTop<offset12)
        {
            $("#j21").removeClass("none");
            $("#j22").addClass("none");
            $("#j32").removeClass("none");
            $("#j31").addClass("none");
            $("#j41").removeClass("none");
            $("#j42").addClass("none");
        }
        else if(scrollTop>=offset12&&scrollTop<offset14)
        {
            $("#j31").removeClass("none");
            $("#j32").addClass("none");
            $("#j42").removeClass("none");
            $("#j41").addClass("none");
            $("#j51").removeClass("none");
            $("#j52").addClass("none");
        }
        else if(scrollTop>=offset14)
        {
            $("#j52").removeClass("none");
            $("#j51").addClass("none");
            $("#j41").removeClass("none");
            $("#j42").addClass("none");
        }
    });

});
$("#j11").click(function(){
    $("#j12").removeClass("none");
    $("#j11").addClass("none");
    $("#j21").removeClass("none");
    $("#j22").addClass("none");
    $("#j31").removeClass("none");
    $("#j32").addClass("none");
    $("#j41").removeClass("none");
    $("#j42").addClass("none");
    $("#j51").removeClass("none");
    $("#j52").addClass("none");
});
$("#j21").click(function(){
    $("#j22").removeClass("none");
    $("#j21").addClass("none");
    $("#j11").removeClass("none");
    $("#j12").addClass("none");
    $("#j31").removeClass("none");
    $("#j32").addClass("none");
    $("#j41").removeClass("none");
    $("#j42").addClass("none");
    $("#j51").removeClass("none");
    $("#j52").addClass("none");
});
$("#j31").click(function(){
    $("#j32").removeClass("none");
    $("#j31").addClass("none");
    $("#j21").removeClass("none");
    $("#j22").addClass("none");
    $("#j11").removeClass("none");
    $("#j12").addClass("none");
    $("#j41").removeClass("none");
    $("#j42").addClass("none");
    $("#j51").removeClass("none");
    $("#j52").addClass("none");
});
$("#j41").click(function(){
    $("#j42").removeClass("none");
    $("#j41").addClass("none");
    $("#j21").removeClass("none");
    $("#j22").addClass("none");
    $("#j31").removeClass("none");
    $("#j32").addClass("none");
    $("#j11").removeClass("none");
    $("#j12").addClass("none");
    $("#j51").removeClass("none");
    $("#j52").addClass("none");
});
$("#j51").click(function(){
    $("#j52").removeClass("none");
    $("#j51").addClass("none");
    $("#j21").removeClass("none");
    $("#j22").addClass("none");
    $("#j31").removeClass("none");
    $("#j32").addClass("none");
    $("#j41").removeClass("none");
    $("#j42").addClass("none");
    $("#j11").removeClass("none");
    $("#j12").addClass("none");
});
$("#j1 a").hover(function(){
    $("#j1 span").css({"opacity":"1"});
},function(){
    $("#j1 span").css({"opacity":"0"});
});
$("#j2 a").hover(function(){
    $("#j2 span").css({"opacity":"1"});
},function(){
    $("#j2 span").css({"opacity":"0"});
});
$("#j3 a").hover(function(){
    $("#j3 span").css({"opacity":"1"});
},function(){
    $("#j3 span").css({"opacity":"0"});
});
$("#j4 a").hover(function(){
    $("#j4 span").css({"opacity":"1"});
},function(){
    $("#j4 span").css({"opacity":"0"});
});
$("#j5 a").hover(function(){
    $("#j5 span").css({"opacity":"1"});
},function(){
    $("#j5 span").css({"opacity":"0"});
});
$("#sxiao9").hover(function(){
    $("#wenzi1").addClass("none");
    $("#tu1").removeClass("none");
},function(){
    $("#tu1").addClass("none");
    $("#wenzi1").removeClass("none");
});
$("#sdaduzi").hover(function(){
    $("#wenzi2").addClass("none");
    $("#tu2").removeClass("none");
},function(){
    $("#tu2").addClass("none");
    $("#wenzi2").removeClass("none");
});
$("#jijian").hover(function(){
    hva($("#xiao9b"),$("#xiao9"));
},function(){
    hvb($("#xiao9b"),$("#xiao9"));
});
$("#titie").hover(function(){
    hva($("#nasib"),$("#nasi"));
},function(){
    hvb($("#nasib"),$("#nasi"));
});
$("#yundong").hover(function(){
    hva($("#chunseb"),$("#chunse"));
},function(){
    hvb($("#chunseb"),$("#chunse"));
});
function hva(ad,rem){
    ad.fadeOut(300);
    rem.fadeIn(300);
}
function hvb(rem,ad){
    ad.fadeOut(300);
    rem.fadeIn(300);

}
$("#five").hover(function(){
    $("#jiujiu").fadeIn(1000);
    $("#dudu").fadeIn(1000);
},function(){
        $("#jiujiu").fadeIn(1000);
        $("#dudu").fadeIn(1000);
    }
)
$("#shier").hover(function(){
        $("#qjfdc").fadeIn(3000);
    },function(){
        $("#qjfdc").fadeIn(3000);
    }
)
function guanbi(){
    $("#zero").addClass("none");
}