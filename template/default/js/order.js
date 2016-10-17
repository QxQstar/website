$('#add_address').click(function () {
    $(".news_add").toggle();
    $.ajax({
        type: "GET",
        url: "/single.aspx?m=add_address",
        success: function (data) {
            $('#news_add').html(data);
        }
    });
});



$('.outline').click(function () {

    $(".news_add").hide();

    $.ajax({
        type: "GET",
        url: "/single.aspx?m=add_address&id=" + $(this).data('id') + "",
        success: function (data) {
            $('#news_add').html(data);
            yunfei();
        }
    });
});
function yunfei() {
    
    var t1 = "";
    var list = document.getElementById("DropDownList1");
    for (var i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            t1 = list.options[i].value;
        }
    }
    if (t1 == "ʡ��") {
        t1 = "";
    }


    var dizhi = t1;
    //ͨ����ַ���˷�

    $.ajax({
        type: "GET",
        url: "/single.aspx?m=address_yunfei&diqu=" + dizhi + "",
        success: function (data) {
            if (data == "") {
                document.getElementById("tips1").innerHTML = "";
            }
            else {
              
                if (parseFloat(document.getElementById("jine").value) < parseFloat(data.split('|')[0])) {

                    var jine = parseFloat(document.getElementById("jine").value) + parseFloat(data.split('|')[1]);

                    document.getElementById("jine1").innerHTML = "��" + jine;
                    document.getElementById("tips1").innerHTML = "<span class=\"ft_16\">�˷ѣ�</span><span class=\"ft_24 txt_red\">��" + data.split('|')[1] + "</span>&nbsp;&nbsp;&nbsp;&nbsp;";

                }
                else {
              

                    document.getElementById("tips1").innerHTML = "<span class=\"ft_16\">���������" + data.split('|')[0] + "Ԫ�����˷�</span>&nbsp;&nbsp;&nbsp;&nbsp;";
                }

            }

        }
    });
    //end
}
$('.txt_blue').click(function () {

    $(".news_add").toggle();
    if ($(this).data('type') == "edit") {
        //�༭
        $.ajax({
            type: "GET",
            url: "/single.aspx?m=add_address_edit&id=" + $(this).data('id') + "",
            success: function (data) {

                $('#news_add').html(data);
            }
        });
        //end
    }
    else {
        //ɾ��
        $.ajax({
            type: "GET",
            url: "/Execution.aspx?type=del&t=add&tipurl=/Single.aspx?m=order&tip_string=ɾ���ɹ�&id=" + $(this).data('id') + "",
            success: function (data) {
                window.location.href = "/Single.aspx?m=order";
                window.event.returnValue = false;
            }
        });
        //end
    }

});

$('.ADD_ul li').click(function () {
    $(this).find('.gou').show();
    $(this).siblings().find('.gou').hide();
});
