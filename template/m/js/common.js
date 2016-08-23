

$(function() {
	if(!placeholderSupport()){
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			//input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
	
	}
	function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
	}
})



$(function(){
	var goods = {
		menu : function(){
			$(".goods_menu_ul .nLi").eq(0).addClass("first");
			$(".goods_menu_ul .nLi").hover(function(){
				$(this).addClass("on");
			},function(){
				$(this).removeClass("on");
			})
		},
		show : function(){
			$(".cp_slideimg").hover(function(){
				$(this).find(".prev").show();
				$(this).find(".next").show();
			},function(){
				$(this).find(".prev").fadeOut();
				$(this).find(".next").fadeOut();
			})
			$(".cp_list_li").hover(function(){
				$(this).addClass("on");
			},function(){
				$(this).removeClass("on");
			})
		},
		px : function(){
			$(".px").click(function(){
				$(".px_list").fadeOut();
				$(this).siblings(".px_list").css("display","block");
			})
			$(".px_box").mouseleave(function(){
				$(this).find(".px_list").fadeOut();
			})
		},
		Init:function(){
			this.menu();
			this.show();
			this.px();
		}
	}
	var home = {
		whhd : function(){
			var hei = $(".whhd_main_inner").height();
			var boxhei = $(".whhd_main").height();
			var perHei = 200;
			//alert();
			if(boxhei>=hei){
				$(".whhd_up,.whhd_down").hide();
			}
			if(parseInt($(".whhd_main_inner").css("top"))==0){
				$(".whhd_up").hide();
			}
			
			function down(){
				var top = parseInt($(".whhd_main_inner").css("top"));
				//alert(top);
				if(top+hei>boxhei){
					top =top - perHei;
					$(".whhd_main_inner").animate({"top":top+'px'},300);
					$(".whhd_up").show();
					if(top + hei <=boxhei){
						$(".whhd_down").hide();
					}
				}
			};
			function up(){
				var top = parseInt($(".whhd_main_inner").css("top"));
				if(top < 0){
					top = top+perHei;
					$(".whhd_main_inner").animate({"top":top+'px'},300);
					$(".whhd_down").show();
					if(top >=0){
						$(".whhd_up").hide();
					}
				}
			};
			var lastClickTime = new Date().getTime();
			var delay = 300; // transitionµÄÑÓ³Ù
			$(".whhd_up").bind("click",function(){
				 if (new Date().getTime() - lastClickTime < delay) {
   					 return;
  					}
  				lastClickTime = new Date().getTime();
			    up();
			})
			$(".whhd_down").bind("click",function(){
				if (new Date().getTime() - lastClickTime < delay) {
   					 return;
  					}
  				lastClickTime = new Date().getTime();
			    down();
			})
			
		},
		sjs : function(){
			$(".sjs_ul").each(function(){
				var ul = $(this);
				ul.find("li .no").each(function(i){
					$(this).html(i+1);
					if(i<3){
						$(this).addClass("hot");
					}
				})
			})
		},
		Init : function(){
			this.whhd();
			this.sjs();
		}
	}
	
	
	var _numbox = $(".num_div");
	var num = {
		Init : function(){
			_numbox.each(function(){
				var _this = $(this);
				var numval =parseInt(_this.find("input").val());
				_this.find(".add").click(function(){
					numval++;
					_this.find("input").val(numval);
				})
				_this.find(".sub").click(function(){
					if(numval>0) numval--;
					_this.find("input").val(numval);
				})
			})
		}
	}
	goods.Init();
	
	num.Init();
	$(window).load(function(){
		home.Init();
	})
})



function changjing_pos(){
	$(".changjing .options").each(function(){
		var _this = $(this);
		var posX = _this.data("x");
		var posY = _this.data("y");
		_this.css({"top":posY+"px","left":posX+"px"});
	})
}
function changjing_hover(){
	$(".changjing .options").each(function(){
		var _this = $(this);
		var img = _this.find("img");
		var Wid = img.width();
		_this.hover(function(){
			var name = _this.data("name");
			var price = _this.data("price");
			img.width(Wid+3);
			layer.tips(name+','+price, _this, {
    		tips: [1,'#434342']
			});
			
		},function(){
			img.width(Wid);
		})
	})
}


$(function(){
	$('body').on("mouseenter",".tk_img",function(){
		$(this).addClass("on");
		$(this).find(".btn_list").show();
	})
	$('body').on("mouseleave",".tk_img",function(){
		$(this).find(".btn_list").fadeOut();
		$(this).removeClass("on");
	})
	
	
	$(".dianzan").click(function(){
		$(this).find(".heart").toggleClass("on");
	})
})

//ÆÙ²¼Á÷
function waterfall(){
	var h=[];
	var n = document.getElementById("grid_container").offsetWidth/li_W|0; 
	var container_h=0;
	for(var i = 0;i < li.length;i++) {
		li_H = li[i].offsetHeight;
		if(i < n) {
			h[i]=li_H;
			li.eq(i).css("top",0);
			li.eq(i).css("left",i * li_W);
			container_h = (container_h>h[i])?container_h:h[i];
			}
		else{
			min_H =Math.min.apply(null,h) ;
			minKey = getarraykey(h, min_H);
			h[minKey] += li_H+margin ;
			container_h = h[minKey];
			li.eq(i).css("top",min_H+margin);
			li.eq(i).css("left",minKey * li_W);
		}
	}
	$("#grid_container").css("height",container_h);
}
function getarraykey(s, v) {for(k in s) {if(s[k] == v) {return k;}}}


$(window).load(function(){
	changjing_pos();
	changjing_hover();
})

$(function () {
    var _on = $(".home_menu td.on");
    $(".home_menu tr").hover(function () {
        $(".home_menu td").removeClass("on");
    }, function () {
        _on.addClass("on");
    })
})
function toTop(){
	 $('html,body').animate({ scrollTop: '0px' }, 800);
}


function changeNum(div){
	var num
	var value;
	$(div).find(".add").click(function(){
		num=$(this).siblings(".num");
		value=parseInt(num.val())+1;
		num.val(value);
	})
	$(div).find(".sub").click(function(){
		num=$(this).siblings(".num");
		value=parseInt(num.val());
		if(value>1){
			num.val(value-1);
		}
	})
}

$(function(){
	changeNum(".numBox")
})
