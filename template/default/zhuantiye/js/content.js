/**
 * Created by Administrator on 2015/12/17.
 */
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