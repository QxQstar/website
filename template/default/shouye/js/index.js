/**
 * Created by Administrator on 2015/12/11.
 */
var mscPl = $("#mscPl");
var mscPlr = $("#mscPlr");
var gaizi = $("#gaizi");
var yanwu1 = $("#yanwu1");
$("#ten").mouseenter(function(){
    mscPl.addClass("rotate");
    mscPlr.addClass("rotateCD");
    ca();
});
function ca() {
    setTimeout(myFun, 1500);
}
    function myFun() {
        mscPl.addClass("stRt");
        mscPlr.addClass("stRt");
        gaizi.addClass("rot");
        setTimeout(f, 3900);
    }
    function f() {
        gaizi.addClass("stRt");
        yanwu1.fadeIn(3000);
    }
if ($("#js_ads_banner_top_slide").length){  //判断当前广告是否展开，如果没有，则执行下面代码
    var $slidebannertop = $("#js_ads_banner_top_slide"),$bannertop = $("#js_ads_banner_top");
    setTimeout(function(){$bannertop.slideUp(1000);$slidebannertop.slideDown(1000);},500); //2500毫秒(2.5秒)后，小广告收回，大广告伸开，执行时间都是1秒(1000毫秒)
    setTimeout(function(){$slidebannertop.slideUp(1000,function (){$bannertop.slideDown(1000);});},5000); //8.5秒(8500毫秒)之后，大广告收回，小广告展开。
}

