var record = {
    num: ""
}
var checkDecimal = function (n) {
    var decimalReg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;//var decimalReg=/^[-\+]?\d{0,8}\.{0,1}(\d{1,2})?$/;
    if (n.value != "" && decimalReg.test(n.value)) {
        record.num = n.value;

        if (parseInt(n.value) <=5)
        {
            layer.alert("价格不能低于5元");
            n.value = 5;
        }
    } else {
        if (n.value != "") {
      
            n.value = record.num;
        }
    }
}

function fromSubmit1() {

    window.location.href = "/search.aspx?m=wenti&wenti=" + document.getElementById("key_value1").value;
    return false;
}
function onKeyDown1() {
    var code = event.keyCode;
    if (code == 13) {
        fromSubmit1();
        return false;
    }

}

function fromSubmit() {
    window.location.href = "/search.aspx?m=product&biaoti=" + document.getElementById("key_value").value;
    return false;
}
function onKeyDown() {
    var code = event.keyCode;
    if (code == 13) {
        fromSubmit();
        return false;
    }

} 

function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                layer.alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            layer.alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
        }
    }
}
// 加入收藏 兼容360和IE6 
function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            layer.alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}



var request = false;
try {
    request = new XMLHttpRequest();
} catch (trymicrosoft) {
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (othermicrosoft) {
        try {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (failed) {
            request = false;
        }
    }
}

if (!request) {
    layer.alert("Error initializing XMLHttpRequest!");
}
function ajax_getRootPath1() {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    return (postPath);
}

//checkbox全选
function checkbox_xuan(g1)
{	
   
    var boxes = document.getElementsByName(g1);

	 for (var i = 0; i < boxes.length; i++)   
		{
	     boxes[i].checked = true;
	 
		}
	
	 }
	
//购物车删除
function del_cart()
{
    var boxes = document.getElementsByName("cart_ch"); 
    var t2=0;
    var t1="";
    for (var i = 0; i < boxes.length; i++)   
    {
     if (boxes[i].checked)   
     {
        t2=t2+1;
        if(t2==1)
        {
        t1=t1+boxes[i].value;
        }
        else
        {
        t1=t1+","+boxes[i].value;
        }
     }
    }
	if(t1=="")
	{
		layer.alert("请先选择后删除");
	}
	else
	{
		var tiao_url = "/pay/cart.aspx?type=del&id="+t1;
        window.location.href = tiao_url;
        window.event.returnValue = false;	
	}
}
//收藏删除
function del_history() {
    var boxes = document.getElementsByName("cart_ch");
    var t2 = 0;
    var t1 = "";
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            t2 = t2 + 1;
            if (t2 == 1) {
                t1 = t1 + boxes[i].value;
            }
            else {
                t1 = t1 + "," + boxes[i].value;
            }
        }
    }
    if (t1 == "") {
        layer.alert("请先选择后删除");
    }
    else {
        var tiao_url = "/Execution.aspx?t=history&type=del&tip_string=收藏记录删除成功！&id=" + t1 + "";
        window.location.href = tiao_url;
        window.event.returnValue = false;
    }
}
//购物车位置改变数量
function get_shuliang(id) {
        var tiao_url = "cart.aspx?type=shuliang&shuliang=" + document.getElementById("shuliang").value + "&id=" + id;
        window.location.href = tiao_url;
        window.event.returnValue = false;
    }

//跳转
function login_tiao() {
    window.location.href = "/default.aspx?login&tipurl=" + window.location.href.replace("&", "fzw123");
    window.event.returnValue = false;
}
function reg_tiao() {
    window.location.href = "/default.aspx?reg&tipurl=" + window.location.href.replace("&", "fzw123");
    window.event.returnValue = false;
}
//end

//导航
function on_page(g1) {

    for (i = 1; i <= 8; i++) {

        if (g1 == i) {
            document.getElementById("pic_d" + i).className = "on";
        }
        else {
            document.getElementById("pic_d" + i).className = "";
        }

    }


}
//加资料
function jihuo_on() {

    if (document.getElementById("jihuoma").value == "") {
        layer.alert("商品激活码不可以为空");
        document.getElementById("jihuoma").focus();
        return false;
    }
    if (document.getElementById("yzm").value == "") {
        layer.alert("验证码不可以为空");
        document.getElementById("yzm").focus();
        return false;
    }

}


//加资料
function user_article() {

    if (document.getElementById("biaoti").value == "") {
        layer.alert("文章标题不可以为空");
        document.getElementById("biaoti").focus();
        return false;
    }
    //if (document.getElementById("neirong").value == "") {
    //    layer.alert("内容不可以为空");
    //    document.getElementById("neirong").focus();
    //    return false;
    //}
   
}
//加资料
function user_product() {
   
    if (document.getElementById("biaoti").value == "") {
        layer.alert("作品名称不可以为空");
        document.getElementById("biaoti").focus();
        return false;
    }
    if (document.getElementById("yuantu").value == "") {
        layer.alert("原图不可以为空");
        document.getElementById("yuantu").focus();
        return false;
    }

    if (document.getElementById("jiage").value == "") {
        layer.alert("价格不可以为空");
        document.getElementById("jiage").focus();
        return false;
    }
    if (document.getElementById("laiyuanbianhao").value == "") {
        layer.alert("请选择关联产品");
        document.getElementById("laiyuanbianhao").focus();
        return false;
    }

}
//加文章
function user_article() {
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("评论产品需要先登陆会员");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("biaoti").value == "") {
        layer.alert("标题不可以为空");
        document.getElementById("biaoti").focus();
        return false;
    }


}
//评论
function pinglun() {
//	alert(document.getElementById("neirong1").value);
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("评论产品需要先登陆会员");
        document.getElementById("yonghuming").focus();
        return false;
    }
    //if (document.getElementById("neirong1").value == "") {
    //    layer.alert("评论内容不可以为空");
    //    document.getElementById("neirong1").focus();
    //    return false;
    //}


}

//登录
function login() {
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("用户名不可以为空");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("mima").value == "") {
        layer.alert("密码不可以为空");
        document.getElementById("mima").focus();
        return false;
    }
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (myreg.test(document.getElementById("yonghuming").value)) {

        $("#yonghuming").attr("name", "youxiang");
    }

}
function login1() {
    if (document.getElementById("yonghuming1").value == "") {
        layer.alert("用户名不可以为空");
        document.getElementById("yonghuming1").focus();
        return false;
    }
    if (document.getElementById("mima1").value == "") {
        layer.alert("密码不可以为空");
        document.getElementById("mima1").focus();
        return false;
    }
}
//获取js radio
function get_radio(id) {
    var temp = document.getElementsByName(id);
    var radiovalue = "";
    for (i = 0; i < temp.length; i++) {

        //遍历Radio

        if (temp[i].checked) {
            radiovalue = temp[i].value;
        }
    }
   
    return radiovalue;
}
//收货地址
function set_add() {
    if (document.getElementById("TextBox1").value == "") {
        layer.alert("收货人姓名不可以为空");
        document.getElementById("TextBox1").focus();
        return false;
    }
    if (document.getElementById("TextBox2").value == "") {
        layer.alert("街道地址不可以为空");
        document.getElementById("TextBox2").focus();
        return false;
    }
    if (document.getElementById("TextBox4").value == "" && document.getElementById("TextBox6").value == "") {
        layer.alert("手机号码或固定电话请填一项");
        document.getElementById("TextBox4").focus();
        return false;
    }
    if (document.getElementById("TextBox4").value != "") {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("TextBox4").value)) {
            document.getElementById("tip4").innerHTML = "请输入有效的手机号";
            document.getElementById("TextBox4").focus();
            return false;
        }
        else {
            document.getElementById("tip4").innerHTML = "";
        }

    }

    var t1 = "";
    var list = document.getElementById("DropDownList1");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t1 = list.options[i].value;
        }
    }

    if (t1 == "省份") {

        document.getElementById("tip").innerHTML = "省份不可以为空";

        document.getElementById("DropDownList1").focus();
        return false;
    }
    else {
        document.getElementById("tip").innerHTML = "";
    }

    var t2 = "";
    var list = document.getElementById("DropDownList2");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t2 = list.options[i].value;
        }
    }
    if (t2 == "地级市") {
        document.getElementById("tip").innerHTML = "地级市不可以为空";
        document.getElementById("DropDownList2").focus();
        return false;
    }
    else {
        document.getElementById("tip").innerHTML = "";
    }

    var t3 = "";
    var list = document.getElementById("DropDownList3");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t3 = list.options[i].value;
        }
    }
    if (t3 == "市、县级市") {
        document.getElementById("tip").innerHTML = "市、县级市不可以为空";
        document.getElementById("DropDownList3").focus();
        return false;
    }
    else {
        document.getElementById("tip").innerHTML = "";
    }

    document.getElementById("TextBox8").value = t1 + "-" + t2 + "-" + t3;

}
//购物车
function order() {

    if (document.getElementById("news_add").innerHTML.trim() == "")
    {
        layer.alert("请选择收货地址！");
        return false;
    }

    if (document.getElementById("shoujianrenxingming").value == "") {
        layer.alert("收件人姓名不可以为空");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("详细地址不可以为空");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("手机号码不可以为空");
        document.getElementById("shoujihaoma").focus();
        return false;
    }


    var t1 = "";
    var list = document.getElementById("DropDownList1");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t1 = list.options[i].value;
        }
    }
    if (t1 == "省份") {
        layer.alert("省份不可以为空");
        document.getElementById("DropDownList1").focus();
        return false;
    }

    var t2 = "";
    var list = document.getElementById("DropDownList2");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t2 = list.options[i].value;
        }
    }
    if (t2 == "地级市") {
        layer.alert("地级市不可以为空");
        document.getElementById("DropDownList2").focus();
        return false;
    }

    var t3 = "";
    var list = document.getElementById("DropDownList3");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t3 = list.options[i].value;
        }
    }
    if (t3 == "市、县级市") {
        layer.alert("市、县级市不可以为空");
        document.getElementById("DropDownList3").focus();
        return false;
    }

    document.getElementById("suozaidiqu").value = t1 + "-" + t2 + "-" + t3;
    clearTimeout(timer);
    document.getElementById("tjOrder").style.display = "none";
    document.getElementById("tjOrder_").style.display = "";
   
  

}
function setadd() {

    if (document.getElementById("shoujianrenxingming").value == "") {
        layer.alert("收件人姓名不可以为空");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("详细地址不可以为空");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("手机号码不可以为空");
        document.getElementById("shoujihaoma").focus();
        return false;
    }


    var t1 = "";
    var list = document.getElementById("DropDownList1");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t1 = list.options[i].value;
        }
    }
    if (t1 == "省份") {
        layer.alert("省份不可以为空");
        document.getElementById("DropDownList1").focus();
        return false;
    }

    var t2 = "";
    var list = document.getElementById("DropDownList2");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t2 = list.options[i].value;
        }
    }
    if (t2 == "地级市") {
        layer.alert("地级市不可以为空");
        document.getElementById("DropDownList2").focus();
        return false;
    }

    var t3 = "";
    var list = document.getElementById("DropDownList3");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t3 = list.options[i].value;
        }
    }
    if (t3 == "市、县级市") {
        layer.alert("市、县级市不可以为空");
        document.getElementById("DropDownList3").focus();
        return false;
    }

    document.getElementById("suozaidiqu").value = t1 + "-" + t2 + "-" + t3;





}
//会员地址
function user_address() {
    if (document.getElementById("shoujianrenxingming").value == "") {
        layer.alert("收件人姓名不可以为空");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("详细地址不可以为空");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("手机号码不可以为空");
        document.getElementById("shoujihaoma").focus();
        return false;
    }
   

    var t1 = "";
    var list = document.getElementById("DropDownList1");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t1 = list.options[i].value;
        }
    }
    if (t1 == "省份") {
        layer.alert("省份不可以为空");
        document.getElementById("DropDownList1").focus();
        return false;
    }

	var t2 = "";
    var list = document.getElementById("DropDownList2");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t2 = list.options[i].value;
        }
    }
    if (t2 == "地级市") {
        layer.alert("地级市不可以为空");
        document.getElementById("DropDownList2").focus();
        return false;
    }

    var t3 = "";
    var list = document.getElementById("DropDownList3");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t3 = list.options[i].value;
        }
    }
    if (t3 == "市、县级市") {
        layer.alert("市、县级市不可以为空");
        document.getElementById("DropDownList3").focus();
        return false;
    }

    document.getElementById("suozaidiqu").value = t1 + "-" + t2 + "-" + t3;
	
}
//云工厂
function yungongchang() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("手机号不可以为空");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("请输入有效的手机号");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("验证码是6位数字");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    if (document.getElementById("youxiang").value == "") {
        layer.alert("邮箱不可以为空");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("请输入有效的E_mail！");
            document.getElementById("youxiang").focus();
            return false;
        }

    }
   
	if (document.getElementById("neirong").value == "") {
        layer.alert("内容不可以为空");
        document.getElementById("neirong").focus();
        return false;
    }
}
//注册
function reg() {
   // document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    
    if (document.getElementById("ver-mid").checked == false) {
        alert('您还没有同意魅拓网站的注册协议');
        return false;
    }

    if (document.getElementById("shouji").value == "") {
        layer.alert("手机号不可以为空");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("请输入有效的手机号");
            document.getElementById("shouji").focus();
            return false;
        }
    }
    
    //if (document.getElementById("yaoqingma").value == "")
	//{
    //    layer.alert("请输入您的邀请码");
    //    document.getElementById("yaoqingma").focus();
	//	return false;
    //}
    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("验证码是6位数字");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    if (document.getElementById("youxiang").value == "") {
        layer.alert("邮箱不可以为空");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("请输入有效的E_mail！");
            document.getElementById("youxiang").focus();
            return false;
        }

    }
    if (document.getElementById("mima").value.length <= 5) {
        alert("密码不可以为空");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        alert("确认密码跟密码不一致");
        document.getElementById("mima_").focus();
        return false;
    }

}
//注册
function password() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("手机号不可以为空");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("请输入有效的手机号");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("验证码是6位数字");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    
    if (document.getElementById("mima").value.length <= 5) {
        alert("密码不可以为空");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        alert("确认密码跟密码不一致");
        document.getElementById("mima_").focus();
        return false;
    }

}
//修改会员资料
function reg_jingxiaoshang() {

    if (document.getElementById("yonghuming").value == "") {
        layer.alert("操作有问题");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("xiangxidizhi").value == "") {
        layer.alert("地址不可以为空");
        document.getElementById("xiangxidizhi").focus();
        return false;
    }
    if (document.getElementById("xingming").value == "") {
        layer.alert("姓名不可以为空");
        document.getElementById("xingming").focus();
        return false;
    }

}
function reg_sheji() {

    if (document.getElementById("yonghuming").value == "") {
        layer.alert("操作有问题");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("shenfenzhenghao").value == "") {
        layer.alert("身份证号不可以为空");
        document.getElementById("shenfenzhenghao").focus();
        return false;
    }
    if (document.getElementById("xingming").value == "") {
        layer.alert("姓名不可以为空");
        document.getElementById("xingming").focus();
        return false;
    }
    document.getElementById("zuopinzhanshi").value = document.getElementById("piclist").innerHTML;
}
//修改会员资料
function user_edit() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("手机号不可以为空");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("请输入有效的手机号");
            document.getElementById("shouji").focus();
            return false;
        }
    }
	
    if (document.getElementById("youxiang").value == "") {
        layer.alert("邮箱不可以为空");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("请输入有效的E_mail！");
            document.getElementById("youxiang").focus();
            return false;
        }
       
    }

    if (document.getElementById("xingming").value == "") {
        layer.alert("姓名不可以为空");
        document.getElementById("xingming").focus();
        return false;
    }

  

	}
//会员资料
function user_user() {
    var length = document.getElementById("yonghuming").value.replace(/[^\x00-\xff]/g, "**").length
    if (length < 5) {
        layer.alert("用户名：请输入5-25个字符，一个汉字为两个字符，推荐使用中文");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (length > 25) {
        layer.alert("用户名：请输入5-25个字符，一个汉字为两个字符，推荐使用中文");
        document.getElementById("yonghuming").focus();
        return false;
    }

    if (document.getElementById("shouji").value == "") {
        layer.alert("手机号不可以为空");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("请输入有效的手机号");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("youxiang").value == "") {
        layer.alert("邮箱不可以为空");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("请输入有效的E_mail！");
            document.getElementById("youxiang").focus();
            return false;
        }

    }

    if (document.getElementById("xingming").value == "") {
        layer.alert("姓名不可以为空");
        document.getElementById("xingming").focus();
        return false;
    }

    if (document.getElementById("shenfenzhenghao").value == "") {
        layer.alert("身份证号不可以为空");
        document.getElementById("shenfenzhenghao").focus();
        return false;
    }




}

//修改密码
function pwd() {

    if (document.getElementById("OldPassword").value.length <= 5) {
        layer.alert("旧密码不可以为空");
        document.getElementById("OldPassword").focus();
        return false;
    }


    if (document.getElementById("mima").value.length <= 5) {
        layer.alert("新密码不可以为空");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        layer.alert("确认新密码跟新密码不一致");
        document.getElementById("mima_").focus();
        return false;
    }


}



//加入收藏

function AddFavorite(sURL, sTitle) {

    sURL = encodeURI(sURL);
    try {

        window.external.addFavorite(sURL, sTitle);

    } catch (e) {

        try {

            window.sidebar.addPanel(sTitle, sURL, "");

        } catch (e) {

            layer.alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");

        }

    }

}

//设为首页

function SetHome(url) {

    if (document.all) {

        document.body.style.behavior = 'url(#default#homepage)';

        document.body.setHomePage(url);

    } else {

        layer.alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");

    }

}

//设置颜色和尺码
//设置颜色和尺码
function get_beizhu(type, g1, chanpinbianhao) {
    document.getElementById("chicun").value = g1;
    if (document.getElementById("chicun").value == "") {
        //layer.alert("请选择尺寸");
    }
    else {
        document.getElementById("beizhu").value = document.getElementById("chicun").value;

        var url = "/Single.aspx?m=beizhu&chicun=" + escape(document.getElementById("chicun").value) + "&chanpinbianhao=" + chanpinbianhao + "&sid=" + Math.random();
        // document.write(url);
        request.open("GET", url, true);
        request.onreadystatechange = beizhu_loadPage;
        request.send(null);

    }

    function beizhu_loadPage() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                if (request.responseText != "") {
                    var response = request.responseText.split("|");

                    document.getElementById("jiage_view").innerHTML = response[0];
                    // document.getElementById("kucun").innerHTML = response[1];
                    document.getElementById("jiage").value = response[0];
                }

            }


        }
    }


}



function get_add(id) {

    var url = "/inc/get_add.aspx?id=" + id + "&sid=" + Math.random();

    request.open("GET", url, true);
    request.onreadystatechange = get_add_loadPage;
    request.send(null);

}

function get_add_loadPage() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText != "") {
                var response = request.responseText.split("|");

                document.getElementById("shoujianrenxingming").value = response[0];
                document.getElementById("shoujihaoma").value = response[1];
                document.getElementById("suozaidiqu").value = response[2];
                document.getElementById("jiedaodizhi").value = response[3];
                _init_area(response[2], "-");


            }

        }


    }
}

