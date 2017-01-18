/**
 * Created by Administrator on 2017/1/16.
 */
/** 红包从0开始排序
 * 滑动画心出现第0个红包
 * 点放大镜找第1个红包,放大镜的id为tool1
 *  点切割找第2个红包,切割的id为tool2
 */
canvasImg = null;
/**
 * 进行对话的内
 * @constructor
 */
function Dialogue(){
    this.warp = $('#dialogue');
    this.word = ['你好','快去领取红包吧','啦啦啦拉阿拉啦啦'];
    this.index = 0
}
/**
 * 点击事件
 * @returns {Dialogue}
 */
Dialogue.prototype.init = function(){
    var wordElem,content,me;
    me = this;
    wordElem = me.warp.find('#word');
    content = me.word;
    wordElem.html(content[me.index]);
    wordElem
        .unbind('click')
        .on('click',function(){
            me.sayWord(me);
        });
    return this;
};
/**
 * 逐条显示信息
 * @param me Dialogue对象
 * @returns {Dialogue}
 */
Dialogue.prototype.sayWord = function(me){
    if( ++me.index <= me.word.length - 1 ){
        me.warp.find('#word').html( me.word[ me.index ] );
    }else{
        //对话结束
        me.warp
            .parent()
            .removeClass('f-black');
        me.warp
            .remove();
        FrameObj.init();

    }
    return this;
};
/**
 * 相框类
 * @constructor
 */
function Frame(){
    this.warp = $('#main');
    //当前切换到的画心的下标
    this.curIndex = null;
    //画心的总数
    this.totalIndex = null;
    //相框的宽度
    this.frameWidth = null;
    //相框的原始尺寸
    this.frameOriginWidth = null;
    //相框的原始尺寸与显示尺寸的比例
    this.ratio = null;
}
/**
 * 设置相框的显示尺寸，并为画心绑定事件
 * @returns {Frame}
 */
Frame.prototype.init = function(){
    var content,frameSize,maxSize,picsLength,me,canvas;
    me = this;
    content= me.warp.find('#frame');
    //相框能够显示的最大尺寸
    maxSize = [$(window).width(),$(window).height() - 80];
    //相框的原始尺寸
    frameSize = [227,280];
    me.frameOriginWidth = frameSize[0];
    //画心的个数
    picsLength = content.find('li').length;
    this.totalIndex = picsLength;

    if(frameSize[0] / frameSize[1] > maxSize[0] / maxSize[1]){
        content
            .width(maxSize[0] * 0.9)
            .height(content.width()*frameSize[1] / frameSize[0]);
    }else{
        content
            .height(maxSize[1]*0.9)
            .width(content.height() * frameSize[0] / frameSize[1])
    }

    me.curIndex = 0;
    me.frameWidth = content.width();
    me.ratio = me.frameOriginWidth / me.frameWidth;
    content.parent()
        .height(content.height())
        .width(content.width());
    content
        .find('li').each(function(index,elem){
        $(elem).width(content.width())
    });
    content
        .find('#pics')
        .width(picsLength *content.width() )
        .find('img')
        .unbind('touchstart')
        .on('touchstart',drag.touchStart);
    //给工具绑定事件
    me.warp
        .find('#tools')
        .find('button')
        .unbind('click')
        .on('click',function(event){
            event.stopPropagation();
            me.toolHandle($(event.target));

        });
    //返回
    me.warp
        .find('#back')
        .unbind('click')
        .on('click',function(event){
            me.warp.find('#detailShow').hide();
            $(event.target).hide();
            me.warp.find('#frame').show();
            me.warp.find('.tool.on').removeClass('on');
            canvas = $('#detailCvs');

            if(canvas.length >= 0){
                canvas.remove();
            }
        });
    me.warp.show();

    return this;
};
/**
 * 切换画心
 * @returns {Frame}
 */
Frame.prototype.changePic = function(){
    var pics,me;
    me = this;
    pics = me.warp.find('#pics');
    pics.animate({
        'margin-left':-1 * me.curIndex * me.frameWidth + 'px'
    });
    if(me.curIndex === 1 && ( !CouponsObj.couponsId[0].status || document.cookie.indexOf('www_xiaoyu4_comuser_name') < 0)){
        setTimeout(CouponsObj.showCoupons.call(CouponsObj,CouponsObj.couponsId[0].id,0),500);
    }
    if(me.curIndex === 2){
        me.showTool(1);
    }
    return me;
};
/**
 * 显示工具
 * @param index 要显示的工具的序号
 */
Frame.prototype.showTool = function(index){
    var curTool,me;
    me = this;
    curTool = me.warp.find('#tool'+index);
    if(curTool.length >= 1){
        curTool
            .animate({
                top:0
            },200)
            .show()
    }

};
/**
 * 工具对应的功能
 * @param $target
 */
Frame.prototype.toolHandle = function($target){
    var id,detailShow,frame,back,tools,canvas,tombola;
    id = $target.attr('id');
    detailShow = this.warp.find('#detailShow');
    frame = this.warp.find('#frame');
    back = this.warp.find('#back');
    tools = this.warp.find('#tools');
    canvas = $('#detailCvs');
    if(canvas.length >= 1){
        canvas.hide()
    }else{
        canvas = $('<canvas class="canvas" id="detailCvs" width="100" height="100"></canvas>').hide();
    }
    tombola = $('#scratch');
    if(tombola.length >= 1){
        tombola.hide();
    }else{
        tombola = $('<div class="tombola" id="scratch"><div class="card" id="card"></div></div>')
    }

    this.warp.append(canvas);
    //刮奖
    detailShow.after(tombola);
    canvasImg = new Image();
    //给当前工具添加一个为on的类
    $target.parent()
        .addClass('on')
        .siblings()
        .removeClass('on');
    if(id === 'tool1'){
        tombola.remove();
        detailShow.attr({
            'src':'/template/m/img/10cun-yuan.jpg',
            'target-id':id
        });
        //该红包还没有领取
        if(!CouponsObj.couponsId[ id.slice(- 1) ].status){
            canvasImg.src='/template/m/img/10cun-hong.jpg';
        }else{
            canvasImg.src='/template/m/img/10cun-hong-1.jpg';
        }


    }else if(id === 'tool2'){
        tombola.remove();
        detailShow.attr({
            'src':'/template/m/img/10cun-yuan.jpg',
            'target-id':id
        });
        //该红包还没有领取
        if(!CouponsObj.couponsId[ id.slice(- 1) ].status){
            canvasImg.src='/template/m/img/10cun-hong.jpg';
        }else{
            canvasImg.src='/template/m/img/10cun-hong-1.jpg';
        }
    }else if(id === 'tool3'){
        tombola.show();
        LuckyCard.case({
            ratio:.6
        },function(){
            this.clearCover();
            //当前红包还没有领取
            if(!CouponsObj.couponsId[id.slice(-1)].status){
                //?示下一?可以使用的工具
                FrameObj.showTool( (id.slice(-1) | 0 ) + 1);
                CouponsObj.showCoupons(CouponsObj.couponsId[id.slice(-1)].id,id.slice(-1));
            }
        });
        canvas.remove();

    }

    detailShow
        .unbind('load')
        .on('load',function(){
            frame.hide();
            back.show();
            detailShow
                .unbind('touchstart')
                .on('touchstart',drag.touchStart);
            detailShow.show();
        });

};
//触摸对象
var drag = {
    startTouch:null,
    endTouch:null,
    touchStart:function(event){
        var $target,canvas;
        $target= $(event.target);

        event.stopPropagation();
        event.preventDefault();
        //记录触点
        drag.startTouch = {
            X:event.targetTouches[0].clientX,
            Y:event.targetTouches[0].clientY
        };
        drag.endTouch = {
            X:event.targetTouches[0].clientX,
            Y:event.targetTouches[0].clientY
        };
        canvas = $('#detailCvs');
        if($target.attr('id') === 'detailShow' && canvas.length >= 1){
            canvas
                .show();
            _changeCanvas($target);

        }
        //绑定事件
        $target
            .unbind('touchmove')
            .on('touchmove',drag.touchMove);
        $target
            .unbind('touchend')
            .on('touchend',drag.touchEnd);

    },
    touchMove:function(event){
        var $target;
        $target = $(event.target);
        event.stopPropagation();
        event.preventDefault();
        //修改结束触点
        drag.endTouch = {
            X:event.targetTouches[0].clientX,
            Y:event.targetTouches[0].clientY
        };
        if($target.attr('id') === 'detailShow' && $('#detailCvs').length >= 1){
            _changeCanvas($target);
        }

    },
    touchEnd:function(event){
        var $target;
        $target = $(event.target);
        event.stopPropagation();
        event.preventDefault();
        //切换画心
        if($target.parent().attr('class').indexOf('pic') >= 0){
            if(drag.endTouch.X - drag.startTouch.X > 10){//pre
                if(FrameObj.curIndex > 0){
                    FrameObj.curIndex --;
                    FrameObj.changePic();
                }

            }else if(drag.endTouch.X - drag.startTouch.X < -10){//next
                if(FrameObj.curIndex < FrameObj.totalIndex-1){
                    FrameObj.curIndex ++;
                    FrameObj.changePic();
                }

            }
        }
        var canvas = $('#detailCvs');
        //放大
        if($target.attr('id') === 'detailShow' && canvas.length >= 1){
            canvas.hide();
        }


    }
};
/**
 * 优惠券类
 * @constructor
 */
function Coupons(){
    this.coupons = $('#coupons');
    //红包相对原图（原始尺寸）的位置，和红包的尺寸
    this.couponsSit = [{//放大镜找的那个红包
        x:48,
        y:21,
        w:21,
        h:21
    },
    {//切割机找的那个红包
        x:48,
        y:21,
        w:21,
        h:21
    }
    ];
    //id为优惠券id，status为是否被领取
    this.couponsId = [
        //滑动画心的红包
        {
            id:'1509549',
            status:false
        },
        //放大镜红包
        {
            id:'1509551',
            status:false
        },
        //切割机红包
        {
            id:'1509559',
            status:false
        },
        //擦拭
        {
            id:'1509561',
            status:false
        }
    ];
}
/**
 * 绑定领取优惠券的事件
 * @returns {Coupons}
 */
Coupons.prototype.init = function(){
    var coupons,me,data,code;
    me = this;
    coupons = me.coupons;
    coupons.find('#getCou')
        .unbind('click')
        .on('click',function(event){
            var $target,parents;
            $target= $(event.target);
            parents = $target.parents('.c-item');
            me.getCoupons({
                code:parents.attr('data-code'),
                index:parents.attr('data-index')
            });
        });
    code = [];
    for(var i = 0,len = me.couponsId.length;i<len;i++){
        code.push(me.couponsId[i].id);
    }
    data = {
        code:code.join()
    };
    me.checkCoupons(data);
    return this;
};
/**
 * 检查优惠券是否被领取了
 */
Coupons.prototype.checkCoupons = function(data){
    $.ajax({
        type:'post',
        url:'/pw/index.php/api/coupons/checkcoupons',
        data:{code:data.code},
        dataType:'json',
        success:function(result){
            if(result.status){
                $.each(result.data,function(index,item){
                    var cur;
                    for(var i = 0,len = CouponsObj.couponsId.length;i<len;i++){
                        cur = CouponsObj.couponsId[i];
                        if(cur.id == item.youhuiquanbianhao){
                            cur.status = true;
                            break;
                        }
                    }
                });
            }
        }
    });
};
/**
 * 显示红包
 * @param id 红包的id
 * @param index 红包的序号,从0开始排序
 */
Coupons.prototype.showCoupons = function(id,index){
    var coupons;
    coupons = this.coupons;
    coupons.find('.c-item').attr({
        'data-code':id,
        'data-index':index
    });
    coupons.parent().show();
    coupons
        .animate({
            top:'150px'
        },200);
};
/**
 * 获取优惠券
 */
Coupons.prototype.getCoupons = function(data){
    var me = this,imgSplit;
    $.ajax({
        type:'post',
        url:'/pw/index.php/api/coupons/getcoupons',
        data:{code:data.code},
        dataType:'json',
        success:function(result){
            me.coupons
                .css({
                    top:'30px'
                })
                .parent()
                .hide();
            if(result.status){
                FrameObj.warp.find('#link').addClass('on').html('使用优惠券');
                 //将该红包修改成已经领取
                if(canvasImg && canvasImg.src){
                    imgSplit = canvasImg.src.split('.jpg');
                    canvasImg.src = imgSplit[0] + '-1.jpg';

                }
                me.couponsId[data.index].status = true;
                _showInfo(result.msg);

            }else{
                if(result.msg.indexOf('未登录，请先登录') >= 0){
                    _showInfo(result.msg,function(){
                        location.href = 'http://www.xiaoyu4.com/?login.html&tipurl=http://www.xiaoyu4.com/single.aspx?m=redEnvelope';
                    });
                }else{
                    _showInfo(result.msg);
                }

            }
        }
    });
};
/**
 * 改变canvas的位置
 * @private
 */
function _changeCanvas($target){
    var context,canvas,offsetTop,offsetLeft,sx,sy,index,curCoupon,cvsShow;
    //触点相对触摸图片（即细节展示图）的位置
    offsetLeft = drag.endTouch.X - $target.offset().left;
    offsetTop = drag.endTouch.Y - $target.offset().top;
    canvas = $('#detailCvs');
    index = $target.attr('target-id');
    //能够找到的红包的下标，对应CouponsObj.couponsSit
    index = index.slice(- 1) - 1;
    //canvas的显示区域
    cvsShow = 50;

    if(offsetTop < canvas[0].height && offsetLeft < canvas[0].width){//第一个区域
            canvas
                .offset({
                    left:drag.endTouch.X,
                    right:'auto',
                    top:drag.endTouch.Y,
                    bottom:'auto'
                });
        if(offsetLeft <= 0){
            canvas
                .offset({
                    left:$target.offset().left
                });
            offsetLeft = 0
        }
        if(offsetTop <= 0){
            canvas
                .offset({
                    top:$target.offset().top
                });
            offsetTop = 0;
        }
            sx = offsetLeft*FrameObj.ratio;
            sy =  offsetTop * FrameObj.ratio;

    }else if(offsetTop < canvas[0].height && offsetLeft - $target.width() < canvas[0].width){//第二个区域
        canvas
            .offset({
                left:drag.endTouch.X-100,
                right:'auto',
                top:drag.endTouch.Y,
                bottom:'auto'
            });
        if(offsetLeft >= $target.width()){
            canvas
                .offset({
                    left:$target.offset().left + $target.width() - canvas[0].width
                });
            offsetLeft = $target.width();

        }
        if(offsetTop <= 0){
            canvas
                .offset({
                    top:$target.offset().top
                });
            offsetTop = 0;
        }
        sx = offsetLeft * FrameObj.ratio -cvsShow;
        sy = offsetTop * FrameObj.ratio;
    }else if(offsetLeft < canvas[0].width && offsetTop - $target.height() < canvas[0].height){//第三个区域
        canvas.offset({
            left:drag.endTouch.X,
            right:'auto',
            top:drag.endTouch.Y - 100,
            bottom:'auto'
        });
        if(offsetLeft <= 0){
            canvas
                .offset({
                    left:$target.offset().left
                });
            offsetLeft = 0
        }
        if(offsetTop >=  $target.height()){
            canvas
                .offset({
                    top:$target.offset().top + $target.height() - canvas[0].height
                });
            offsetTop = $target.height();
        }
        sx = offsetLeft * FrameObj.ratio;
        sy = offsetTop *FrameObj.ratio -cvsShow;
    }else if(offsetTop - $target.height() < canvas[0].height && offsetLeft - $target.width() < canvas[0].width){//第四个区域
        canvas.offset({
            left:drag.endTouch.X - 100,
            right:'auto',
            top:drag.endTouch.Y - 100,
            bottom:'auto'
        });
        if(offsetLeft >= $target.width()){
            canvas
                .offset({
                    left:$target.offset().left + $target.width() - canvas[0].width
                });
            offsetLeft = $target.width();

        }
        if(offsetTop >= $target.height()){
            canvas
                .offset({
                    top:$target.offset().top + $target.height() - canvas[0].height
                });
            offsetTop = $target.height();
        }
        sx = offsetLeft * FrameObj.ratio -cvsShow;
        sy = offsetTop *FrameObj.ratio -cvsShow;
    }
    context = canvas[0].getContext('2d');
    if(canvasImg.complete){
        draw();
    }else{
        canvasImg.onload = draw;
    }
    function draw(){
        //放大100/50倍,红包的大小不要大于50*50
        context.drawImage(canvasImg,sx,sy,cvsShow,cvsShow,0,0,canvas[0].width,canvas[0].height);
    }
    //当前红包
    curCoupon = CouponsObj.couponsSit[index];
    //找到红包
    if(sx < curCoupon.x &&   sx + cvsShow > curCoupon.x + curCoupon.w
        && sy < curCoupon.y &&  sy + cvsShow  > curCoupon.y + curCoupon.h)
    {
        //?示下一?可以使用的工具
        FrameObj.showTool( index + 2);

        //当前红包还没有领取
        if(!CouponsObj.couponsId[index + 1].status){

            CouponsObj.showCoupons(CouponsObj.couponsId[index + 1].id,index + 1);
        }

    }
}
/**
 * ?示?窗
 * @param msg 要?示的信息
 * @param callback ?行的回?函?
 * @private
 */
function _showInfo(msg,callback){
    var layer,content;
    layer =  $('#layer');
    content = layer.find('#contentBox');
    layer.show();
    content
        .animate({
            top:'200px'
        },300)
        .find('.body').html(msg);
    content
        .find('.sure')
        .unbind('click')
        .on('click',sure);
    content
        .find('.cancel')
        .unbind('click')
        .on('click',cancel);
    function sure(){
        layer.hide();
        content.css({
            'top':'100px'
        });
        if(callback){
            callback();
        }

    }
    function cancel(){
        layer.hide();
        content.css({
            'top':'100px'
        });
    }
}
var DialogueObj = new Dialogue();
var FrameObj = new Frame();
var CouponsObj = new Coupons();
CouponsObj
    .init();
DialogueObj
    .init();


