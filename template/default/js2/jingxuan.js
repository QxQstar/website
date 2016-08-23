var curPic = 0;
$(document).ready(function(){
      var mySwiper = new Swiper('.swiper-container',{
      centeredSlides: true,
      mousewheelControl : true,
      watchActiveIndex: true,
      onSlideNext:function(){
        curPic ++;
        checkIndex(mySwiper);
          sale();
      },
      onSlidePrev:function(){
          curPic --;
        checkIndex(mySwiper);
          sale();
      }
    });
      $("#list").on("click",sale);
      mySwiper.enableKeyboardControl();
    $('.arrow-left').on('click', function(e){
      e.preventDefault();
      mySwiper.swipePrev();
      checkIndex(mySwiper);
        sale();
    });
    $('.arrow-right').on('click', function(e){
      e.preventDefault();
      mySwiper.swipeNext();
      checkIndex(mySwiper);
        sale();
    });
    setPage(mySwiper);
     $(window).scroll(function(){
         jieLiu(checkScroll);
     });
  });
function jieLiu(method){
    clearTimeout(method.id);
   method.id =  setTimeout(method,50);
}
//改变右下角客服和到顶部的显示
function checkScroll(){
    var tiShi = $("#tiShi");
    var activeDesc = $("#activeDesc");
    var doc = $(document);
    if(doc.width() >= 992){
        if(doc.scrollTop() >= activeDesc.offset().top - 100){
            tiShi.css("display","block");
        }else{
            tiShi.css("display","none");
        }
    }
}
//改变印图的大小
  function changeImgSize(){
      var img = $("#list").find("img");
      var width,height;
      img.each(function(index,elem){
        width = $(elem).width();
        height = $(elem).height();
        $(elem).width(width/3).height(height/3).css({
          "marginTop": -($(elem).height()/2) +"px",
          "marginLeft": -($(elem).width()/2) + "px"
        });
      });
    }
//提示当前位于第几张图片
function setPage(mySwiper){
    var length = $('.swiper-container .item').length;
    var warpInfo = $(".warp").find('.info');
    warpInfo.find('.total').text(length);
    warpInfo.find('.cur').text(mySwiper.activeIndex + 1);
    return length;
}
//控制箭头的显示或者隐藏
  function checkIndex(mySwiper){
    var length = setPage(mySwiper);
    var top,docEle;
      if(curPic >= length){
          owenrScroll();
      }else{
          top = $("#change").offset().top;
          docEle = document.documentElement;
          if(docEle && docEle.scrollTop){
              docEle = docEle;
          }else{
              docEle = document.body;
          }
          $(docEle).animate({scrollTop:top-100},400);
      }
       curPic = mySwiper.activeIndex;
    if(mySwiper.activeIndex === 0){
      $(".arrow-left").hide();
      $(".arrow-right").show();
    }else if(mySwiper.activeIndex == length-1){
      $(".arrow-left").show();
      $(".arrow-right").hide();
    }else{
      $(".arrow-left").show();
      $(".arrow-right").show();
    }
  }
function owenrScroll(){
    var doc = document;
    var top;
    var docEle = doc.documentElement;
    if(docEle && docEle.scrollTop){
        top = docEle.scrollTop;
    }else{
        docEle = doc.body;
        top = docEle.scrollTop;
    }
    $(docEle).stop(true,true).animate({scrollTop:top+120},300);
}

    function spreadOrFlod(){
        $('.mask').width($(".goodsDesc img").width());
        $(".All").on("click", function (event) {
            var target = event.target;
            if($(target).attr("class").indexOf("fold") > -1){
                $(this).find(".fold").css("display","none");
                $(this).find(".spread").css("display","inline");
                $(".goodsDesc .content").removeClass("isFold").addClass("isSpread");

            }
            if($(target).attr("class").indexOf("spread") > -1){
                $(this).find('.fold').css("display","inline");
                $(this).find('.spread').css("display","none");
                $(".goodsDesc .content").removeClass("isSpread").addClass("isFold");
            }
        })
    }
//购买
function sale(event){
    var cupWidth = 199;
    var cupHeight = 343;
    var curItem = $("#list").find(".swiper-slide-active");
    var img = curItem.find("img");
    var imgWidth = img.width();
    var imgHeight = img.height();
    var X = (cupWidth - imgWidth)/2;
    var Y = (cupHeight - imgHeight)/2;
    var coord = $(".coord");
    coord.attr("value",X + "_" + Y);
}
untilEvent.addEvent(window,'load',spreadOrFlod);
untilEvent.addEvent(window,'load',changeImgSize);
untilEvent.addEvent(window,'load',sale);
