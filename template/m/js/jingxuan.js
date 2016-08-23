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
function getOuter(){
  var outer = document.getElementById('outer');
  untilEvent.addEvent(outer,'mouseover',callBackOver);
  untilEvent.addEvent(outer,'mouseout',callBackOut);
}
function callBackOut(event){
  var event = untilEvent.getEvent(event);
  var relatedTarget = untilEvent.getRelated(event);
  var outerList1 = document.getElementById('outerList1');
  var inter1 = document.getElementById('inter1');
  var outerList2 = document.getElementById('outerList2');
  var inter2 = document.getElementById('inter2');
  var flag1 = false,flag2 = false;
  if(relatedTarget !== null){
    var parented = relatedTarget.parentNode;
    do{
      if(parented === outerList1 || relatedTarget === outerList1){
        flag1 = true;
        break;
      }else if(parented === outerList2 || relatedTarget === outerList2){
        flag2 = true;
        break;
      }else{
        parented = parented.parentNode;
      }
    }while(parented !== null);
  }
  if(!flag1){
    $(inter1).animate({height:'0px'},10);
  }
  if(!flag2){
    $(inter2).animate({height:'0px'},10);
  }
}
function callBackOver(event){
  var totalHeight = 170;
  var event = untilEvent.getEvent(event);
  var target = untilEvent.getTarget(event);
  var inter1 = document.getElementById('inter1');
  var inter2 = document.getElementById('inter2');
  if(target.id == 'outerList1' || target.id == "link1"){
    $(inter1).animate({height:totalHeight + "px"},300);
  }
  if(target.id == 'outerList2' || target.id == 'link2'){
    $(inter2).animate({height:totalHeight + 'px'},300);
  }
}
  $(document).ready(function(){
      var mySwiper = new Swiper('.swiper-container',{
      centeredSlides: true,
      mousewheelControl : true,
      watchActiveIndex: true,
      onSlideNext:function(){
        checkIndex(mySwiper);
      },
      onSlidePrev:function(){
        checkIndex(mySwiper);
      }
    });
      mySwiper.enableKeyboardControl();
      checkIndex(mySwiper);
    $('.arrow-left').on('click', function(e){
      e.preventDefault();
      mySwiper.swipePrev();
      checkIndex(mySwiper);
    });
    $('.arrow-right').on('click', function(e){
      e.preventDefault();
      mySwiper.swipeNext();
      checkIndex(mySwiper);
    });
    changeImgSize();
  });
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
  function checkIndex(mySwiper){
    var length = $('.swiper-container .item').length;
    $(".warp .info .total").text(length);
    $('.warp .info .cur').text(mySwiper.activeIndex + 1);
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
  function spreadOrFlod(){
    $('.mask').width($(".goodsDesc img").width());
    $(".All").on('click',function(){
      var text = $(".goodsDesc").find(".more").text();
      if(text == '查看全部'){
        $(".goodsDesc .content").removeClass("isFold").addClass("isSpread");
        $(this).find(".more").html("<span class='spread'></span>收起");
      }else{
        $(".goodsDesc .content").removeClass("isSpread").addClass("isFold");
        $(this).find(".more").html("<span class='fold'></span>查看全部");
      }
    });
  }
untilEvent.addEvent(window,'load',getOuter);
untilEvent.addEvent(window,'load',spreadOrFlod);
