/**
 * Created by Administrator on 2017/2/14.
 */
function PhotoDetail(){

}
/**
 * ���в���
 * @returns {PhotoList}
 */
PhotoDetail.prototype.layout = function(){
    var img,box,boxW,boxH,photo, W, H,frame,frameW,gap;
    photo = $('#handle');
    box = photo.find('.img');
    boxH = box.height();
    boxW = box.width();
    //���߿�Ŀ��,������css��border��Ӧ
    frameW = 10;
    //���������֮��ļ�϶
    gap = {
        x:10,
        y:20
    };
    img = box.find('img');
    frame = img.siblings('.frame');

    W = img.width();
    H = img.height();
    if(W/H > boxW/boxH){
        frame
            .width(boxW-frameW*2)
            .height((boxW-frameW*2)/(W/H))
            .css({
                top:0,
                left:0
            })
    }else{
        frame
            .width((boxH-frameW*2) * (W/H))
            .height(boxH-frameW*2)
            .css({
                top:0,
                left:(boxW-boxH * (W/H))/2 + 'px'
            })
    }
    //�������ȫ����仭��
    if(img.attr('data-fill') === 'yes'){
        img
            .height(frame.outerHeight()-frameW*2)
            .width(frame.outerWidth()-frameW*2)
            .css({
                left:parseFloat(frame.css('left')) + frameW + 'px',
                top:frameW+'px'
            })
    }
    //�������뻭��֮���м�϶
    else{
        img
            .height(frame.outerHeight()-gap.y * 2-frameW*2)
            .width(frame.outerWidth() - gap.x * 2-frameW*2)
            .css({
                left:parseFloat(frame.css('left')) + frameW+ gap.x + 'px',
                top:frameW+gap.y + 'px'
            })
    }
    return this;
};
/**
 * ѡ�����
 * @returns {PhotoDetail}
 */
PhotoDetail.prototype.choiceFrame = function(){
    var choice,frame,bgs;
    frame = $('#handle').find('.frame');
    choice = $('#choice');
    bgs = choice.find('.bg');
    //�����
    bgs.each(function(index,bg){
        var $bg;
        $bg= $(bg);
        $bg.addClass('bg'+(index+1));
        if(!index){
            $bg.siblings('span').addClass('cur');
        }

    });
    //����Ĭ����ʽ
    frame.css({
        'border-color':choice.find('.bg1').attr('data-bg')
    });

    choice
        .on('click',function(event){
            var $target;
            $target = $(event.target);
            if($target.attr('class').indexOf('bg') >= 0){

                choice.find('*')
                    .removeClass('cur');
                //�ı������ʽ
                frame
                    .css({
                        'border-color':$target.attr('data-bg')
                    });
                $target
                    .siblings('span')
                    .addClass('cur');

            }
        });
    return this;
};
/**
 * ����
 * @returns {PhotoDetail}
 */
PhotoDetail.prototype.buy = function(){
    var buy;
    buy= $('buy');
    buy.on('click',function(event){

    });
    return this;
};
var photoDetail = new PhotoDetail();

$(window).load(function(){
    photoDetail
        .layout()
        .choiceFrame()
        .buy()
});




