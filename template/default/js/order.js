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
    if (t1 == "省份") {
        t1 = "";
    }


    var dizhi = t1;
    //通过地址查运费

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

                    document.getElementById("jine1").innerHTML = "￥" + jine;
                    document.getElementById("tips1").innerHTML = "<span class=\"ft_16\">运费：</span><span class=\"ft_24 txt_red\">￥" + data.split('|')[1] + "</span>&nbsp;&nbsp;&nbsp;&nbsp;";

                }
                else {
              

                    document.getElementById("tips1").innerHTML = "<span class=\"ft_16\">订单金额满" + data.split('|')[0] + "元，免运费</span>&nbsp;&nbsp;&nbsp;&nbsp;";
                }

            }

        }
    });
    //end
}
$('.txt_blue').click(function () {

    $(".news_add").toggle();
    if ($(this).data('type') == "edit") {
        //编辑
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
        //删除
        $.ajax({
            type: "GET",
            url: "/Execution.aspx?type=del&t=add&tipurl=/Single.aspx?m=order&tip_string=删除成功&id=" + $(this).data('id') + "",
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
