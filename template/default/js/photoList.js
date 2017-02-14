/**
 * Created by Administrator on 2017/2/14.
 */
function PhotoList(){

}
/**
 * 进行布局
 * @returns {PhotoList}
 */
PhotoList.prototype.layout = function(){
    var imgs,box,boxW,boxH,pList,me;
    me = this;
    pList = $('#pList');
    box = pList.find('a').eq(0);
    boxH = box.height();
    boxW = box.width();
    imgs = pList.find('img');
    imgs.each(function(index,img){
        var $img, W,H;
        $img= $(img);
        W = $img.width();
        H = $img.height();
        $img
            .css({
                left:(boxW-W)/2 + 'px',
                top:(boxH-H)/2 + 'px'
            })
            .data({
                originW:W,
                originH:H
            })
            .hover(me.hoverInHandle,me.hoverOutHandle);

    });
    return this;
};
/**
 * hover进入的事件处理程序
 */
PhotoList.prototype.hoverInHandle = function(event){
    var $target, W, H,boxW,boxH,box,frame,borderW,gap;
    box = $('#pList').find('a').eq(0);
    boxH = box.height();
    boxW = box.width();
    //画框边框的宽度
    borderW = 10;
    //画心与画框之间的缝隙
    gap = {
        x:10,
        y:20
    };
    $target= $(event.target);
    W = $target.data('originW');
    H = $target.data('originH');
    frame = $target.siblings('.frame');
    if(W/H > boxW/boxH){
        $target
            .width(boxW*0.8)
            .height(H/W*(boxW* 0.8))
            .css({
                left:(boxW-boxW*0.8)/2 + 'px',
                top:(boxH-H/W*(boxW* 0.8))/2 + 'px'
            });
        //画心将相框填充满
        if($target.attr('data-fill') === 'yes'){
            frame
                .height(H/W*(boxW* 0.8))
                .width(boxW*0.8)
                .css({
                    left:(boxW-boxW*0.8)/2 - borderW + 'px',
                    top:(boxH-H/W*(boxW* 0.8))/2 - borderW + 'px',
                    opacity:1
                })
        }
        //画心与画框之间有缝隙
        else{
            frame
                .height(H/W*(boxW* 0.8) + gap.y*2)
                .width(boxW*0.8 + gap.x*2)
                .css({
                    left:(boxW-boxW*0.8)/2 - gap.x-borderW + 'px',
                    top:(boxH-H/W*(boxW* 0.8))/2 - gap.y-borderW + 'px',
                    opacity:1
                })
        }

    }else{
        $target
            .height(boxH*0.8)
            .width(W/H*(boxH*0.8))
            .css({
                left:(boxW-W/H*(boxH*0.8))/2 + 'px',
                top:(boxH-boxH*0.8)/2 + 'px'
            });
        //画心将相框填充满
        if($target.attr('data-fill') === 'yes'){
            frame
                .height(H/W*(boxW* 0.8))
                .width(boxW*0.8)
                .css({
                    left:(boxW-W/H*(boxH*0.8))/2 - borderW + 'px',
                    top:(boxH-boxH*0.8)/2 - borderW + 'px',
                    opacity:1
                })
        }//画心与画框之间有缝隙
        else{
            frame
                .height(boxH*0.8 + gap.y*2)
                .width(W/H*(boxH*0.8) + gap.x*2)
                .css({
                    left:(boxW-W/H*(boxH*0.8))/2 - gap.x-borderW + 'px',
                    top:(boxH-boxH*0.8)/2 - gap.y-borderW + 'px',
                    opacity:1
                })
        }
    }


};
/**
 * hover离开的事件处理程序
 */
PhotoList.prototype.hoverOutHandle = function(event){
    var $target, W, H,boxW,boxH,box;
    box = $('#pList').find('a').eq(0);
    boxH = box.height();
    boxW = box.width();
    $target= $(event.target);
    W = $target.data('originW');
    H = $target.data('originH');
    $target
        .height(H)
        .width(W)
        .css({
            left:(boxW-W)/2 + 'px',
            top:(boxH-H)/2 + 'px'
        })
        .siblings('.frame')
        .css({
            opacity:0,
            left:0,
            right:0
        });
};
var photoList = new PhotoList();

$(window).load(function(){
    photoList
        .layout();
});


