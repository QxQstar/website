
// 轮播的函数开始
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
    untilEvent.addEvent(warp,"touchmove",touchObj.moveEvent);
    untilEvent.addEvent(warp,"touchend",touchObj.endEvent);
    untilEvent.addEvent(warp,"touchstart",stop);
    untilEvent.addEvent(warp,"touchend",play);
}
//为了完成touch事件的对象
var touchObj = {
    warp:document.getElementById("warp"),
    startPos:{},
    endPos:{},
    direction:null,
    startEvent:function(event){
        var self = touchObj;
        var event = untilEvent.getEvent(event);
        var touch = event.targetTouches[0];
        self.startPos = {
            x:touch.clientX,
            y:touch.clientY
        };
    },
    moveEvent:function(event){
        var event = untilEvent.getEvent(event);
        var touch = event.targetTouches;
        var self = touchObj;
        if(touch.length = 1){
            self.endPos = {
                x:touch[0].clientX,
                y:touch[0].clientY
            };
        }
    },
    endEvent:function(event){
        var event = untilEvent.getEvent(event);
        var self = touchObj;
        var offX = Number(self.endPos.x - self.startPos.x);
        var offY = Number(self.endPos.y - self.startPos.y);
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
    }
};
//函数节流
function scrollEvent(){
	untilEvent.addEvent(window,"resize",function(){
//		throttle(setListHeight);
	});
}
function throttle(method,context){
	clearTimeout(method.Tid);
	method.Tid = setTimeout(method,70);
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
                span.removeClass('cur').next().addClass('hide');
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
// 轮播的函数结束
untilEvent.addEvent(window,'load',scrollEvent);
//untilEvent.addEvent(window,'load',setListHeight);
untilEvent.addEvent(window,'load',setLiIndex);
untilEvent.addEvent(window,'load',btnClick);
untilEvent.addEvent(window,'load',play);
untilEvent.addEvent(window,'load',getWarp);
untilEvent.addEvent(window,'load',smallScreenList);