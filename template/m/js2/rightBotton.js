/**
 * Created by Administrator on 2016/8/10.
 */
$(document).ready(function(){
    headTitle();
});
//Í·²¿ÓÒ²àº¯Êý
function headTitle(){
    var headTitle = $("#headTitle");
    var button = headTitle.find(".show");
    button.click(function(){
        if(parseInt(headTitle.find("ul").css("right")) < 0){
            $(this).find("span").eq(0).addClass("one")
                .next("span").addClass("two")
                .next("span").addClass("three");

            headTitle.find(".mask").css("display","block")
                .next(".rightNav").find("ul").animate({"right":"0"},400);
        }else{
            $(this).find("span").removeClass();
            headTitle.find(".mask").css("display","none")
                .next(".rightNav").find("ul").animate({"right":"-300px"},400);
        }
    });
}