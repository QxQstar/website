var record = {
    num: ""
}
var checkDecimal = function (n) {
    var decimalReg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;//var decimalReg=/^[-\+]?\d{0,8}\.{0,1}(\d{1,2})?$/;
    if (n.value != "" && decimalReg.test(n.value)) {
        record.num = n.value;

        if (parseInt(n.value) <=5)
        {
            layer.alert("�۸��ܵ���5Ԫ");
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
                layer.alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            layer.alert("�����������֧�֣��밴�����沽�������1.����������á�2.���������ҳ��3.���룺" + vrl + "���ȷ����");
        }
    }
}
// �����ղ� ����360��IE6 
function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            layer.alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
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

//checkboxȫѡ
function checkbox_xuan(g1)
{	
   
    var boxes = document.getElementsByName(g1);

	 for (var i = 0; i < boxes.length; i++)   
		{
	     boxes[i].checked = true;
	 
		}
	
	 }
	
//���ﳵɾ��
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
		layer.alert("����ѡ���ɾ��");
	}
	else
	{
		var tiao_url = "/pay/cart.aspx?type=del&id="+t1;
        window.location.href = tiao_url;
        window.event.returnValue = false;	
	}
}
//�ղ�ɾ��
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
        layer.alert("����ѡ���ɾ��");
    }
    else {
        var tiao_url = "/Execution.aspx?t=history&type=del&tip_string=�ղؼ�¼ɾ���ɹ���&id=" + t1 + "";
        window.location.href = tiao_url;
        window.event.returnValue = false;
    }
}
//���ﳵλ�øı�����
function get_shuliang(id) {
        var tiao_url = "cart.aspx?type=shuliang&shuliang=" + document.getElementById("shuliang").value + "&id=" + id;
        window.location.href = tiao_url;
        window.event.returnValue = false;
    }

//��ת
function login_tiao() {
    window.location.href = "/default.aspx?login&tipurl=" + window.location.href.replace("&", "fzw123");
    window.event.returnValue = false;
}
function reg_tiao() {
    window.location.href = "/default.aspx?reg&tipurl=" + window.location.href.replace("&", "fzw123");
    window.event.returnValue = false;
}
//end

//����
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
//������
function jihuo_on() {

    if (document.getElementById("jihuoma").value == "") {
        layer.alert("��Ʒ�����벻����Ϊ��");
        document.getElementById("jihuoma").focus();
        return false;
    }
    if (document.getElementById("yzm").value == "") {
        layer.alert("��֤�벻����Ϊ��");
        document.getElementById("yzm").focus();
        return false;
    }

}


//������
function user_article() {

    if (document.getElementById("biaoti").value == "") {
        layer.alert("���±��ⲻ����Ϊ��");
        document.getElementById("biaoti").focus();
        return false;
    }
    //if (document.getElementById("neirong").value == "") {
    //    layer.alert("���ݲ�����Ϊ��");
    //    document.getElementById("neirong").focus();
    //    return false;
    //}
   
}
//������
function user_product() {
   
    if (document.getElementById("biaoti").value == "") {
        layer.alert("��Ʒ���Ʋ�����Ϊ��");
        document.getElementById("biaoti").focus();
        return false;
    }
    if (document.getElementById("yuantu").value == "") {
        layer.alert("ԭͼ������Ϊ��");
        document.getElementById("yuantu").focus();
        return false;
    }

    if (document.getElementById("jiage").value == "") {
        layer.alert("�۸񲻿���Ϊ��");
        document.getElementById("jiage").focus();
        return false;
    }
    if (document.getElementById("laiyuanbianhao").value == "") {
        layer.alert("��ѡ�������Ʒ");
        document.getElementById("laiyuanbianhao").focus();
        return false;
    }

}
//������
function user_article() {
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("���۲�Ʒ��Ҫ�ȵ�½��Ա");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("biaoti").value == "") {
        layer.alert("���ⲻ����Ϊ��");
        document.getElementById("biaoti").focus();
        return false;
    }


}
//����
function pinglun() {
//	alert(document.getElementById("neirong1").value);
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("���۲�Ʒ��Ҫ�ȵ�½��Ա");
        document.getElementById("yonghuming").focus();
        return false;
    }
    //if (document.getElementById("neirong1").value == "") {
    //    layer.alert("�������ݲ�����Ϊ��");
    //    document.getElementById("neirong1").focus();
    //    return false;
    //}


}

//��¼
function login() {
    if (document.getElementById("yonghuming").value == "") {
        layer.alert("�û���������Ϊ��");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("mima").value == "") {
        layer.alert("���벻����Ϊ��");
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
        layer.alert("�û���������Ϊ��");
        document.getElementById("yonghuming1").focus();
        return false;
    }
    if (document.getElementById("mima1").value == "") {
        layer.alert("���벻����Ϊ��");
        document.getElementById("mima1").focus();
        return false;
    }
}
//��ȡjs radio
function get_radio(id) {
    var temp = document.getElementsByName(id);
    var radiovalue = "";
    for (i = 0; i < temp.length; i++) {

        //����Radio

        if (temp[i].checked) {
            radiovalue = temp[i].value;
        }
    }
   
    return radiovalue;
}
//�ջ���ַ
function set_add() {
    if (document.getElementById("TextBox1").value == "") {
        layer.alert("�ջ�������������Ϊ��");
        document.getElementById("TextBox1").focus();
        return false;
    }
    if (document.getElementById("TextBox2").value == "") {
        layer.alert("�ֵ���ַ������Ϊ��");
        document.getElementById("TextBox2").focus();
        return false;
    }
    if (document.getElementById("TextBox4").value == "" && document.getElementById("TextBox6").value == "") {
        layer.alert("�ֻ������̶��绰����һ��");
        document.getElementById("TextBox4").focus();
        return false;
    }
    if (document.getElementById("TextBox4").value != "") {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("TextBox4").value)) {
            document.getElementById("tip4").innerHTML = "��������Ч���ֻ���";
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

    if (t1 == "ʡ��") {

        document.getElementById("tip").innerHTML = "ʡ�ݲ�����Ϊ��";

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
    if (t2 == "�ؼ���") {
        document.getElementById("tip").innerHTML = "�ؼ��в�����Ϊ��";
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
    if (t3 == "�С��ؼ���") {
        document.getElementById("tip").innerHTML = "�С��ؼ��в�����Ϊ��";
        document.getElementById("DropDownList3").focus();
        return false;
    }
    else {
        document.getElementById("tip").innerHTML = "";
    }

    document.getElementById("TextBox8").value = t1 + "-" + t2 + "-" + t3;

}
//���ﳵ
function order() {

    if (document.getElementById("news_add").innerHTML.trim() == "")
    {
        layer.alert("��ѡ���ջ���ַ��");
        return false;
    }

    if (document.getElementById("shoujianrenxingming").value == "") {
        layer.alert("�ռ�������������Ϊ��");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("��ϸ��ַ������Ϊ��");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("�ֻ����벻����Ϊ��");
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
    if (t1 == "ʡ��") {
        layer.alert("ʡ�ݲ�����Ϊ��");
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
    if (t2 == "�ؼ���") {
        layer.alert("�ؼ��в�����Ϊ��");
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
    if (t3 == "�С��ؼ���") {
        layer.alert("�С��ؼ��в�����Ϊ��");
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
        layer.alert("�ռ�������������Ϊ��");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("��ϸ��ַ������Ϊ��");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("�ֻ����벻����Ϊ��");
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
    if (t1 == "ʡ��") {
        layer.alert("ʡ�ݲ�����Ϊ��");
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
    if (t2 == "�ؼ���") {
        layer.alert("�ؼ��в�����Ϊ��");
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
    if (t3 == "�С��ؼ���") {
        layer.alert("�С��ؼ��в�����Ϊ��");
        document.getElementById("DropDownList3").focus();
        return false;
    }

    document.getElementById("suozaidiqu").value = t1 + "-" + t2 + "-" + t3;





}
//��Ա��ַ
function user_address() {
    if (document.getElementById("shoujianrenxingming").value == "") {
        layer.alert("�ռ�������������Ϊ��");
        document.getElementById("shoujianrenxingming").focus();
        return false;
    }

    if (document.getElementById("jiedaodizhi").value == "") {
        layer.alert("��ϸ��ַ������Ϊ��");
        document.getElementById("jiedaodizhi").focus();
        return false;
    }


    if (document.getElementById("shoujihaoma").value == "") {
        layer.alert("�ֻ����벻����Ϊ��");
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
    if (t1 == "ʡ��") {
        layer.alert("ʡ�ݲ�����Ϊ��");
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
    if (t2 == "�ؼ���") {
        layer.alert("�ؼ��в�����Ϊ��");
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
    if (t3 == "�С��ؼ���") {
        layer.alert("�С��ؼ��в�����Ϊ��");
        document.getElementById("DropDownList3").focus();
        return false;
    }

    document.getElementById("suozaidiqu").value = t1 + "-" + t2 + "-" + t3;
	
}
//�ƹ���
function yungongchang() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("�ֻ��Ų�����Ϊ��");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("��������Ч���ֻ���");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("��֤����6λ����");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    if (document.getElementById("youxiang").value == "") {
        layer.alert("���䲻����Ϊ��");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("��������Ч��E_mail��");
            document.getElementById("youxiang").focus();
            return false;
        }

    }
   
	if (document.getElementById("neirong").value == "") {
        layer.alert("���ݲ�����Ϊ��");
        document.getElementById("neirong").focus();
        return false;
    }
}
//ע��
function reg() {
   // document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    
    if (document.getElementById("ver-mid").checked == false) {
        alert('����û��ͬ��������վ��ע��Э��');
        return false;
    }

    if (document.getElementById("shouji").value == "") {
        layer.alert("�ֻ��Ų�����Ϊ��");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("��������Ч���ֻ���");
            document.getElementById("shouji").focus();
            return false;
        }
    }
    
    //if (document.getElementById("yaoqingma").value == "")
	//{
    //    layer.alert("����������������");
    //    document.getElementById("yaoqingma").focus();
	//	return false;
    //}
    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("��֤����6λ����");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    document.getElementById("yonghuming").value = document.getElementById("shouji").value;
    if (document.getElementById("youxiang").value == "") {
        layer.alert("���䲻����Ϊ��");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("��������Ч��E_mail��");
            document.getElementById("youxiang").focus();
            return false;
        }

    }
    if (document.getElementById("mima").value.length <= 5) {
        alert("���벻����Ϊ��");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        alert("ȷ����������벻һ��");
        document.getElementById("mima_").focus();
        return false;
    }

}
//ע��
function password() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("�ֻ��Ų�����Ϊ��");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("��������Ч���ֻ���");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("shoujiyzm").value.length != 6) {
        layer.alert("��֤����6λ����");
        document.getElementById("shoujiyzm").focus();
        return false;
    }
    
    if (document.getElementById("mima").value.length <= 5) {
        alert("���벻����Ϊ��");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        alert("ȷ����������벻һ��");
        document.getElementById("mima_").focus();
        return false;
    }

}
//�޸Ļ�Ա����
function reg_jingxiaoshang() {

    if (document.getElementById("yonghuming").value == "") {
        layer.alert("����������");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("xiangxidizhi").value == "") {
        layer.alert("��ַ������Ϊ��");
        document.getElementById("xiangxidizhi").focus();
        return false;
    }
    if (document.getElementById("xingming").value == "") {
        layer.alert("����������Ϊ��");
        document.getElementById("xingming").focus();
        return false;
    }

}
function reg_sheji() {

    if (document.getElementById("yonghuming").value == "") {
        layer.alert("����������");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (document.getElementById("shenfenzhenghao").value == "") {
        layer.alert("���֤�Ų�����Ϊ��");
        document.getElementById("shenfenzhenghao").focus();
        return false;
    }
    if (document.getElementById("xingming").value == "") {
        layer.alert("����������Ϊ��");
        document.getElementById("xingming").focus();
        return false;
    }
    document.getElementById("zuopinzhanshi").value = document.getElementById("piclist").innerHTML;
}
//�޸Ļ�Ա����
function user_edit() {


    if (document.getElementById("shouji").value == "") {
        layer.alert("�ֻ��Ų�����Ϊ��");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("��������Ч���ֻ���");
            document.getElementById("shouji").focus();
            return false;
        }
    }
	
    if (document.getElementById("youxiang").value == "") {
        layer.alert("���䲻����Ϊ��");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("��������Ч��E_mail��");
            document.getElementById("youxiang").focus();
            return false;
        }
       
    }

    if (document.getElementById("xingming").value == "") {
        layer.alert("����������Ϊ��");
        document.getElementById("xingming").focus();
        return false;
    }

  

	}
//��Ա����
function user_user() {
    var length = document.getElementById("yonghuming").value.replace(/[^\x00-\xff]/g, "**").length
    if (length < 5) {
        layer.alert("�û�����������5-25���ַ���һ������Ϊ�����ַ����Ƽ�ʹ������");
        document.getElementById("yonghuming").focus();
        return false;
    }
    if (length > 25) {
        layer.alert("�û�����������5-25���ַ���һ������Ϊ�����ַ����Ƽ�ʹ������");
        document.getElementById("yonghuming").focus();
        return false;
    }

    if (document.getElementById("shouji").value == "") {
        layer.alert("�ֻ��Ų�����Ϊ��");
        document.getElementById("shouji").focus();
        return false;
    }
    else {
        var myreg = /^1+\d{10}$/;
        if (!myreg.test(document.getElementById("shouji").value)) {
            layer.alert("��������Ч���ֻ���");
            document.getElementById("shouji").focus();
            return false;
        }
    }

    if (document.getElementById("youxiang").value == "") {
        layer.alert("���䲻����Ϊ��");
        document.getElementById("youxiang").focus();
        return false;
    }
    else {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("youxiang").value)) {
            layer.alert("��������Ч��E_mail��");
            document.getElementById("youxiang").focus();
            return false;
        }

    }

    if (document.getElementById("xingming").value == "") {
        layer.alert("����������Ϊ��");
        document.getElementById("xingming").focus();
        return false;
    }

    if (document.getElementById("shenfenzhenghao").value == "") {
        layer.alert("���֤�Ų�����Ϊ��");
        document.getElementById("shenfenzhenghao").focus();
        return false;
    }




}

//�޸�����
function pwd() {

    if (document.getElementById("OldPassword").value.length <= 5) {
        layer.alert("�����벻����Ϊ��");
        document.getElementById("OldPassword").focus();
        return false;
    }


    if (document.getElementById("mima").value.length <= 5) {
        layer.alert("�����벻����Ϊ��");
        document.getElementById("mima").focus();
        return false;
    }


    if (document.getElementById("mima_").value != document.getElementById("mima").value) {
        layer.alert("ȷ��������������벻һ��");
        document.getElementById("mima_").focus();
        return false;
    }


}



//�����ղ�

function AddFavorite(sURL, sTitle) {

    sURL = encodeURI(sURL);
    try {

        window.external.addFavorite(sURL, sTitle);

    } catch (e) {

        try {

            window.sidebar.addPanel(sTitle, sURL, "");

        } catch (e) {

            layer.alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������,���ֶ�����������������.");

        }

    }

}

//��Ϊ��ҳ

function SetHome(url) {

    if (document.all) {

        document.body.style.behavior = 'url(#default#homepage)';

        document.body.setHomePage(url);

    } else {

        layer.alert("����,�����������֧���Զ�����ҳ��Ϊ��ҳ����,�����ֶ�������������ø�ҳ��Ϊ��ҳ!");

    }

}

//������ɫ�ͳ���
//������ɫ�ͳ���
function get_beizhu(type, g1, chanpinbianhao) {
    document.getElementById("chicun").value = g1;
    if (document.getElementById("chicun").value == "") {
        //layer.alert("��ѡ��ߴ�");
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

