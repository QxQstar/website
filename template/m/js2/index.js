var untilEvent = {
    addEvent:function(element,type,hander){
        if(element.addEventListener){
            element.addEventListener(type,hander,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,hander);
        }else{
            element['on'+type] = hander;
        }
    },
    removeEvent:function(element,type,hander){
        if(element.removeEventListener){
            element.removeEventListener(type,hander,false);
        }else if(element.detachEvent){
            element.detachEvent("on" + type,hander);
        }else{
            element['on'+type] = null;
        }
    },
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    getRelated:function(event){
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    }

};
// 轮播的函数开始
//设置class为list的高度,因为图片的position为absolute所以.list元素的高度为零
//如果一个元素的父元素高度为0，那么设置这个元素的margin: auto 0; 不起作用
function setListHeight(){
	var list = document.getElementById('list');
	var myRow2 = document.getElementById('myRow2');
	var myRow3 = document.getElementById('myRow3');
	var imgItem = list.getElementsByTagName('img')[0];
	var height = imgItem.offsetHeight;
	var list = document.getElementById('list');
	list.style.height = height + 'px';
}
function setLiIndex(){
	var list = document.getElementById('list');
	var li = list.getElementsByTagName('li');
	var liLen = li.length;
	for(var i = 0;i<liLen;i++){
		li[i].style.zIndex = liLen-i;
	}
}
var index = 1;//index表示当前显示的页面,index是一个全局变量
var timer;
function btnClick(){
    var warp = document.getElementById('warp');
    untilEvent.addEvent(warp,'click',function(event){
        var event = untilEvent.getEvent(event);
        var target = untilEvent.getTarget(event);
        var targetName = target.nodeName.toLowerCase();
        if(targetName == 'div' || targetName == "p"){
            switch(target.className){
                case 'pre': if(index == 1){
                    index = 3;
                }else{
                    --index;
                }
                    anmitate();
                    break;
                case 'next':if(index == 3){
                    index = 1;
                }else{
                    ++index;
                }
                    anmitate();
                    break;
            }
        }else if(targetName == 'span'){
            index = target.getAttribute('data-index');
            anmitate();
        }
    });
}

function removeClass(curIndex){
	var controll = document.getElementById('controll');
	var spans = controll.getElementsByTagName('span');
	for(var i = 0,len = spans.length; i<len;i++){
		if(i == curIndex-1){
			spans[i].className = "curIndex";
		}else{
			spans[i].className = "";
		}
	}
}
//切换图片的函数
function anmitate() {
    removeClass(index);
    var list = $("#list");
    var imgList = list.find("img");
    imgList.each(function(cur,ele){
        if(cur + 1 == index){
            $(ele).animate({"opacity":"1"},700);
        }else{
            $(ele).animate({"opacity":"0"},700);
        }
    });
}
//自动切换函数
function play() {
	timer = setTimeout(function () {
	if(index == 3){
			index = 1;
		}else{
			++index;
		}
		anmitate();
		play();
 }, 4000);
}
//停止切换函数,当鼠标点击了左箭头或者右箭头时会取消自动切换，当鼠标从箭头上移开，又开始自动切换
function stop() {
	clearTimeout(timer);
}
function getWarp(){
    var warp = document.getElementById('warp');
    untilEvent.addEvent(warp,"mouseout",play);
    untilEvent.addEvent(warp,"mouseover",stop);
    untilEvent.addEvent(warp,"touchstart",touchObj.startEvent);
}
//为了完成touch事件的对象
var touchObj = {
    warp:document.getElementById("warp"),
    startTime:null,
    endTime:null,
    startPos:null,
    endPos:null,
    direction:null,
    startEvent:function(event){
//        this.startTime = new Date();
        var event = untilEvent.getEvent(event);
        var touch = event.targetTouches[0];
        this.startPos = {
            x:touch.clientX,
            y:touch.clientY
        };
        untilEvent.addEvent(this.warp,"touchmove",this.moveEvent);
        untilEvent.addEvent(this.warp,"touchend",this.endEvent);
    },
    moveEvent:function(event){
       var event = untilEvent.getEvent(event);
        var touch = event.targetTouches;
        if(touch.length = 1){
            this.endPos = {
                x:touch.clientX,
                y:touch.clientY
            };
        }
    },
    endEvent:function(event){
        var event = untilEvent.getEvent(event);
        var offX = Number(this.endPos.x - this.startPos.x);
        var offY = Number(this.endPos.y - this.startPos.y);
        this.direction = Math.abs(offX) > Math.abs(offY) ? 1:0;
        if(this.direction === 1){
            if(offX >= 10){
                if(index === 1){
                    index = 3;
                }else{
                    --index;
                }
                anmitate();
            }else if(offX <= -10){
                if(index === 3){
                    index = 1;
                }else{
                    ++index;
                }
                anmitate();
            }else{
                untilEvent.preventDefault(event);
            }
        }
        untilEvent.removeEvent(this.warp,"touchmove",this.moveEvent);
        untilEvent.removeEvent(this.warp,"touchend",this.endEvent);
    }
};
//函数节流
function scrollEvent(){
	untilEvent.addEvent(window,"resize",function(){
//		throttle(setListHeight);
		throttle(collapse);
	});
}
function throttle(method,context){
	clearTimeout(method.Tid);
	method.Tid = setTimeout(method,70);
}
// 轮播的函数结束
function addMask(){
    $(".customer .word").hover(function(){
        $(this).fadeTo(300,1);
    },function(){
        $(this).fadeTo(300,0);
    });
    $(".company").hover(function(){
        $(".company").find(".mask").fadeTo(150,0.6);
    },function(){
        $(".company").find(".mask").fadeTo(150,0.3);
    });
}
function addClass(){
    var activeList = $("#activeBar").find(".list li");
    var moreList = $("<li class='activeItem moreActiveItem'><a href='http://www.xiaoyu4.com/single.aspx?m=moreActiveList'><img src='/template/default/img/3213.jpg'></a></li>");
    activeList.eq(3).before(moreList);
    activeList.eq(3).addClass("otherActive").nextAll("li").addClass("otherActive");
    $('#customer').find('li').last().addClass("lastItem");
}


function collapse(){
	var p = $(".customer .word #p");
	var offsetWidth = p.width();
	var offsetHeight = p.height();
	var fontSize = parseInt(p.css('font-size'));
	var lettSpac = parseInt(p.css('letter-spacing'));
	var num = parseInt(offsetWidth/(fontSize + 2*lettSpac) * offsetHeight/(fontSize*1.5));
	$(".customer .word p").each(function(index,ele){
		var valueL = $(ele)[0].innerHTML.length;
		if(valueL > num){
			$(ele)[0].innerHTML = $(ele)[0].innerHTML.slice(0,num) + "...";
		}
	});
}
function smallScreenList(){
	var state = false;
	$(document).click(function(event){
		var state = false;
		var target = event.target;
		var targetName = target.nodeName.toLowerCase();
		var temp = null;
        var span = $('.smallScreen .list').find("span");
		if(targetName == 'span' && $(target).parent()[0].nodeName.toLowerCase() == 'li' || targetName == 'i'){
			if(targetName == 'span'){
				temp = $(target);
			}else{
				temp = $(target).parent('span');
			}
			if(temp.attr('class').indexOf('cur') >= 0){
				state = false;
				span.prev('div').removeClass('bar');
				span.find("span").removeClass('cur').next().addClass('hide');
			}else{
				state = true;
				span.prev('div').removeClass('bar');
				span.removeClass('cur').next().addClass('hide');
				temp.addClass("cur").next().removeClass("hide");
				temp.prev().addClass('bar');
                temp.parent('li').css("z-index","20").siblings('li').css("z-index","10");
			}
			spread(state);
		}else{
			state = false;
			span.prev('div').removeClass('bar');
			span.removeClass('cur').next().addClass('hide');
			spread(state);
		}
	});
}
function spread(state){
	if(state){
		$('.smallScreen').animate({height:'90px'},500);
	}else{
		$('.smallScreen').animate({height:'30px'},500);
	}
}
untilEvent.addEvent(window,'load',scrollEvent);
//untilEvent.addEvent(window,'load',setListHeight);
untilEvent.addEvent(window,'load',setLiIndex);
untilEvent.addEvent(window,'load',btnClick);
untilEvent.addEvent(window,'load',play);
untilEvent.addEvent(window,'load',getWarp);
untilEvent.addEvent(window,'load',addClass);
untilEvent.addEvent(window,'load',addMask);
untilEvent.addEvent(window,'load',collapse);
untilEvent.addEvent(window,'load',smallScreenList);