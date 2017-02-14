/**
 * Created by Administrator on 2017/2/14.
 */
function PhotoList(){

}
/**
 * ���в���
 * @returns {PhotoList}
 */
PhotoList.prototype.layout = function(){
    var imgs,box,boxW,boxH,pList,frameW,gap;
    pList = $('#pList');
    box = pList.find('a').eq(0);
    boxH = box.height();
    boxW = box.width();
    //���߿�Ŀ��,������css��border��Ӧ
    frameW = 5;
    //���������֮��ļ�϶
    gap = {
        x:10,
        y:20
    };
    imgs = pList.find('img');
    imgs.each(function(index,img){
        var $img, W, H,frame;
        $img= $(img);
        W = $img.width();
        H = $img.height();
        frame = $img.siblings('.frame');
        if(W/H > boxW/boxH){
            frame
                .width(boxW-frameW*2)
                .height((boxW-frameW*2)/(W/H))
                .css({
                    bottom:0,
                    left:0 + 'px'
                })
        }else{
            frame
                .width((boxH-frameW*2) * (W/H))
                .height(boxH-frameW*2)
                .css({
                    bottom:0,
                    left:(boxW-boxH * (W/H))/2 + 'px'
                })
        }
        //�������ȫ����仭��
        if($img.attr('data-fill') === 'yes'){
            $img
                .height(frame.height())
                .width(frame.width())
                .css({
                    left:parseFloat(frame.css('left')) + frameW + 'px',
                    bottom:frameW+'px'
                })
        }
        //�������뻭��֮���м�϶
        else{
            $img
                .height(frame.height()-gap.y * 2)
                .width(frame.width() - gap.x * 2)
                .css({
                    left:parseFloat(frame.css('left')) + frameW+ gap.x + 'px',
                    bottom:frameW+gap.y + 'px'
                })
        }

    });
    return this;
};
var photoList = new PhotoList();

$(window).load(function(){
    photoList
        .layout();
});



