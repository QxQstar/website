
// �ֲ��ĺ�����ʼ
//����classΪlist�ĸ߶�,��ΪͼƬ��positionΪabsolute����.listԪ�صĸ߶�Ϊ��
//���һ��Ԫ�صĸ�Ԫ�ظ߶�Ϊ0����ô�������Ԫ�ص�margin: auto 0; ��������
function setListHeight(){
	var list = document.getElementById('list');
	var myRow2 = document.getElementById('myRow2');
	var myRow3 = document.getElementById('myRow3');
	var imgItem = list.getElementsByTagName('img')[0];
	var height = imgItem.offsetHeight;
	var list = document.getElementById('list');
	list.style.height = height + 'px';
}
//��һ���ֲ�ͼ��ת
function liClick(){
    var warpOne = document.getElementById('one');
    $(warpOne).on('click',function(){
        if($(this).find('img').css('opacity') === '1') {
            window.location.href = "http://www.xiaoyu4.com/page.aspx?id=27&classid=1";
        }
    });
}
function setLiIndex(){
	var list = document.getElementById('list');
	var li = list.getElementsByTagName('li');
	var liLen = li.length;
	for(var i = 0;i<liLen;i++){
		li[i].style.zIndex = liLen-i;
	}
}
var index = 1;//index��ʾ��ǰ��ʾ��ҳ��,index��һ��ȫ�ֱ���
var timer;
function btnClick(){
    var warp = document.getElementById('warp');
    untilEvent.addEvent(warp,'click',function(event){
        var event = untilEvent.getEvent(event);
        var target = untilEvent.getTarget(event);
        var targetName = target.nodeName.toLowerCase();
        if(targetName == 'div' || targetName == "p" || targetName == 'em'){
            switch(target.className){
                case 'preIcon':
                case 'pre': if(index == 1){
                    index = 3;
                }else{
                    --index;
                }
                    anmitate();
                    break;
                case 'nextIcon':
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
//�л�ͼƬ�ĺ���
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
//�Զ��л�����
function play() {
    clearTimeout(timer);
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
//ֹͣ�л�����,������������ͷ�����Ҽ�ͷʱ��ȡ���Զ��л��������Ӽ�ͷ���ƿ����ֿ�ʼ�Զ��л�
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
//Ϊ�����touch�¼��Ķ���
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
        touchObj.startPos = {
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
            touchObj.endPos = {
                x:touch.clientX,
                y:touch.clientY
            };
        }
    },
    endEvent:function(event){
        var event = untilEvent.getEvent(event);
        var offX = Number(touchObj.endPos.x - touchObj.startPos.x);
        var offY = Number(touchObj.endPos.y - touchObj.startPos.y);
        touchObj.direction = Math.abs(offX) > Math.abs(offY) ? 1:0;
        if(touchObj.direction === 1){
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
//��������
function scrollEvent(){
	untilEvent.addEvent(window,"resize",function(){
		throttle(collapse);
	});
}
function throttle(method,context){
	clearTimeout(method.Tid);
	method.Tid = setTimeout(method,70);
}
// �ֲ��ĺ�������
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
    var moreActiveLink = moreList.find('a');
    addText(moreActiveLink[0]);
    activeList.eq(3).before(moreList);
    activeList.eq(3).addClass("otherActive").nextAll("li").addClass("otherActive");
    //�����ӽ�������
    var link = activeList.find('a');
    link.each(function(index,ele) {
        addText(ele);
    });
    $('#customer').find('li').last().addClass("lastItem");
}
function addText(ele){
    var text = $("<div class='text'></div>")
        .css({
            "position":"absolute",
            "top":"0",
            "left":"0",
            "right":"0",
            "bottom":"0",
            "text-align":"center",
            "height":"50%",
            "margin-top":"auto",
            "margin-bottom":"auto"
        });
    var h1 = $("<p class='h1'></p>")
        .css({
            "font-size":"14px",
            "color":"#ffffff",
            "font-weight":"blod"
        });
    var dataH1 = $(ele).attr('data-h1');
    var dataH2 = $(ele).attr('data-h2');
    if(dataH1){
        h1.text($(ele).attr('data-h1'))
            .css({
                "font-size":"16px"
            });
    }
    var h2 = $("<p class='h2'></p>")
        .text($(ele).attr('data-h2'))
        .css({
            "color":"#ffffff",
            "font-size":"12px"
        });
    if(dataH2){
        h2.text($(ele).attr('data-h2'));
    }
    text.append(h1).append(h2);
    $(ele).append($("<div class='mask' style='position: absolute ; left: 0;" +
        " top:0;width: 100%;height: 100%;background-color:rgba(0,0,0,0.5) ;'></div>"))
        .append(text);
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
//js�����ֲ�ͼ
function loadBannerImg() {
    var banner3Img = $("#three");
    var banner2Img = $("#two");
    banner3Img.on('load', function () {
        getWarp();
        play();
        btnClick();
    });
    banner2Img.attr('src', '/template/default/img/banner2.jpg');
    banner3Img.attr('src', '/template/default/img/banner3-2.gif');
}
untilEvent.addEvent(window,'load',loadBannerImg);
untilEvent.addEvent(window,'load',scrollEvent);
untilEvent.addEvent(window,'load',setLiIndex);
untilEvent.addEvent(window,'load',addClass);
untilEvent.addEvent(window,'load',addMask);
untilEvent.addEvent(window,'load',collapse);
untilEvent.addEvent(window,'load',smallScreenList);
untilEvent.addEvent(window,'load',liClick);