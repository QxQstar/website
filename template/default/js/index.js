$(document).ready(function(){
	var sUserAgent = navigator.userAgent.toLowerCase();

	    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

	    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

	    var bIsMidp = sUserAgent.match(/midp/i) == "midp";

	    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

	    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

	    var bIsAndroid = sUserAgent.match(/android/i) == "android";

	    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

	    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

	    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
	        var imgsrc = '/template/default/img/page3.png';
	    }
	    else{
	        var imgsrc = '/template/default/img/page2.png';
	    }
	$("#fullPage").fullpage({
		anchors:['Page0','Page1', 'Page2','Page3','Page4','Page5'],
		navigation: true,
		navigationPosition: 'right',
		fixedElements: '#nav,#fixedImg,#page4Img,#page3Img,#page5Img',
		scrollingSpeed:700,
		onLeave:function(index,nextindex){
			hiddenImg(nextindex);
			switch(index){
				case 1:
					hiddendescription(index,nextindex);
					break;
				case 2: 
					hiddendescription(index,nextindex);
					break;
				case 3: 
					hiddendescription(index,nextindex);
					break;
				case 4: 
					hiddendescription(index,nextindex);
					break;
				case 5: 
					hiddendescription(index,nextindex);
					break;
				case 6: 
					hiddendescription(index,nextindex);
					break;
			}
		},
		afterLoad:function(link,index){
			
			switch(index){
				case 1:
					occurSpan();
					break;
				case 2:
					occurdescription(index);
					break;
				case 3:
					occurdescription(index);
					break;
				case 4:
					occurdescription(index);
					break;
				case 5:
					occurdescription(index);
					break;
				case 6:
					occurdescription(index);
					break;
			}
		},
	});
	//改动开始
	    $('#warp').hover(function(){
	    	var $nav = $('.nav');
	    	var $inter = $nav.find('#inter');
	    	// $inter.outerWidth($('body').outerWidth());
			$inter.stop(true,false).slideDown(400);
	    	$nav.stop(false,true).animate({'backgroundColor':'rgba(0,0,0,0.3)'},50);
	    },function(){
	    	var $nav = $('.nav');
	    	var $inter = $nav.find('#inter');
	    	$inter.stop(true,false).slideUp(400,function(){
	    		$nav.stop(false,true).animate({'backgroundColor':'rgba(0,0,0,0)'},400);
	    	});
	    });
	    //改动结束
var frameCartoon1 = new FrameCartoon({
            el: '#section1',
            frameNum: 12,
            framerate: 4,
            url: imgsrc,
            direction: 'horizontal',
            iteration: 1,
            complete: function(count){
          	if (count == 1) {
          		setTimeout(function(){$('#img').animate({marginTop:'0',opacity:'1'},1000);},500);	
            	};
            }
        });
        frameCartoon1.start();
        var span = document.getElementsByTagName('span');
        var len = span.length;
        // for(var i = 0;i < len;i++){
        // 	span[i].onclick = function(){
        // 		var page = location.href.split('#');
        // 		var num = parseInt(page[1].split('')[4])+1;
        // 		location.href='#Page'+num;
        // 	}
        // }
         for(var i = 0;i < len;i++){

        	span[i].onclick = function(){

         		var page = location.href.split('#');

         		if(typeof page[1] == 'undefined'){

         			location.href = page[0]+ '#Page1';

         		}else{

         			var num = parseInt(page[1].split('')[4])+1;

        			location.href=page[0]+'#Page'+num;

        		}

        	};

        }
        browserRedirect();  
    });
function occurSpan(){
	$('#down1').animate({opacity:'1'},500);
}
function hiddenImg(nextindex){
	$('#fixedImg').stop(false,true).animate({opacity:'0'},500);
	$('#page3Img').stop(false,true).animate({opacity:'0'},500);
	$('#page4Img').stop(false,true).animate({opacity:'0'},700);
	$('#page5Img').stop(false,true).animate({opacity:'0'},500);	
}
function  hiddendescription(index,page){
	switch(index){
		case 1: $('#down1').animate({opacity:'0'},500);
			if(page == 2){
				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
				$('body').animate({backgroundColor:'#8DA8C0'},700);
				$('.pic11').animate({top:'-10%',opacity:'1'},1000);
				$('.pic12').animate({top:'15%',opacity:'1',},1000);
			}
			if(page == 3){
				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
				$('body').animate({backgroundColor:'#B8DB7C'},1000);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
			}
			if(page == 4){
				$('#page3Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#E8E04B'},1000);
				$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
				$('.pic32').animate({ top:'28%',opacity:'1'},1000);
			}
			if(page == 5){
				$('#page4Img').stop(false,true).animate({opacity:'1'},100)
				$('body').animate({backgroundColor:'#C8AF53'},1000);
				$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 		$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
			}
			if(page == 6){
				$('#page5Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#6CB2B8'},1000);
				$('.pic51').animate({top:'0%',opacity:'1'},1000);
			}
			break;
		case 2: 
			$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgOne').animate({opacity:'0'},1000);
			//将这三行代码移入if（page==3）
				// $('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				// $('.pic22').animate({top:'50%',opacity:'1'},1500);
				// $('.pic23').animate({top:'50%',opacity:'1'},1500);
 			if(page ==3){
 				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
 				$('body').animate({backgroundColor:'#B8DB7C'},1000);
 				$('.pic11').animate({top:'-40%',opacity:'0'},500);
 				$('.pic12').animate({top:'10%',opacity:'0'},500);
 				$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
 			}
 			if(page == 1){
 				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
 				$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
 			}
 			if(page == 4){
 				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
 				$('#page3Img').stop(false,true).animate({opacity:'1'},400);
 				$('body').animate({backgroundColor:'#E8E04B'},1000);
 				$('.pic11').animate({top:'-40%',opacity:'0'},500);
 				$('.pic12').animate({top:'10%',opacity:'0'},500);
 				$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
				$('.pic32').animate({ top:'28%',opacity:'1'},1000);
 			}
 			if(page == 5){
 				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
 				$('#page4Img').stop(false,true).animate({opacity:'1'},100)
 				$('body').animate({backgroundColor:'#C8AF53'},1000);
 				$('.pic11').animate({top:'-40%',opacity:'0'},500);
 				$('.pic12').animate({top:'10%',opacity:'0'},500);
 				$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 		$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
 			}
 			if(page == 6){
 				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
 				$('#page5Img').stop(false,true).animate({opacity:'1'},100)
 				$('body').animate({backgroundColor:'#6CB2B8'},1000);
 				$('.pic11').animate({top:'-40%',opacity:'0'},500);
 				$('.pic12').animate({top:'10%',opacity:'0'},500);
 				$('.pic51').animate({top:'0%',opacity:'1'},1000);
 			}
 			$('#down2').animate({opacity:'0'},500);
 			break;
	 	case 3: 
	 		$('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgTwo').animate({opacity:'0'},1000);
			//将这两行代码移入if（page == 4）
			// $('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
			// $('.pic32').animate({ top:'28%',opacity:'1'},1000);
			if(page == 1){
				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
				$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
				$('.pic21').animate({top:'40%',opacity:'0'},500);
				$('.pic22').animate({top:'80%',opacity:'0'},500);
				$('.pic23').animate({top:'80%',opacity:'0'},500);
			}
			if(page == 2){
				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
				$('body').animate({backgroundColor:'#8DA8C0'},700);
				$('.pic21').animate({top:'40%',opacity:'0'},500);
				$('.pic22').animate({top:'80%',opacity:'0'},500);
				$('.pic23').animate({top:'80%',opacity:'0'},500);

				$('.pic11').animate({top:'-10%',opacity:'1'},1000);
				$('.pic12').animate({top:'15%',opacity:'1',},1000);
			}
			if(page == 4){
				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
				$('#page3Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#E8E04B'},1000);
				$('.pic21').animate({top:'-10%',opacity:'0'},500);
				$('.pic22').animate({top:'20%',opacity:'0'},500);
				$('.pic23').animate({top:'20%',opacity:'0'},500);

				$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
				$('.pic32').animate({ top:'28%',opacity:'1'},1000);
			}
			if(page == 5){
				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
				$('#page4Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#C8AF53'},1000);
				$('.pic21').animate({top:'-10%',opacity:'0'},500);
				$('.pic22').animate({top:'20%',opacity:'0'},500);
				$('.pic23').animate({top:'20%',opacity:'0'},500);

				$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 		$('.pic42').animate({top:'0%',opacity:'0.6'},1000);				
			}
			if(page == 6){
				$('#fixedImg').stop(false,true).animate({opacity:'0'},200);
				$('#page5Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#6CB2B8'},1000);
				$('.pic21').animate({top:'-10%',opacity:'0'},500);
				$('.pic22').animate({top:'20%',opacity:'0'},500);
				$('.pic23').animate({top:'20%',opacity:'0'},500);

				$('.pic51').animate({top:'0%',opacity:'1'},1000);
			}
			$('#down3').animate({opacity:'0'},500);
   			break;
   		case 4: 
   			$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgThree').animate({opacity:'0'},1000);

		 	// $('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 	// $('.pic42').animate({top:'0%',opacity:'0.6'},1000);
		 	if(page == 1){
				$('#page3Img').stop(false,true).animate({opacity:'0'},400);
		 		$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
		 		$('.pic31').animate({top:'10%',opacity:'0'},500);
		 		$('.pic32').animate({top:'80%',opacity:'0'},500);
		 	}
		 	if(page == 2){
		 		$('#page3Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#8DA8C0'},700);
		 		$('.pic31').animate({top:'10%',opacity:'0'},500);
		 		$('.pic32').animate({top:'80%',opacity:'0'},500);

		 		$('.pic11').animate({top:'-10%',opacity:'1'},1000);
				$('.pic12').animate({top:'15%',opacity:'1',},1000);
		 	}
		 	
		 	if(page == 3){
		 		$('#page3Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#B8DB7C'},1000);
		 		$('.pic31').animate({top:'10%',opacity:'0'},500);
		 		$('.pic32').animate({top:'80%',opacity:'0'},500);

		 		$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
		 	}
		 	if(page ==5 ){
		 		$('#page3Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#page4Img').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#C8AF53'},1000);
		 		$('.pic31').animate({top:'0%',opacity:'0'},500);
		 		$('.pic32').animate({top:'40%',opacity:'0'},500);

		 		$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 		$('.pic42').animate({top:'0%',opacity:'0.6'},1000);	
		 	}
		 	if(page == 6){
		 		$('#page3Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#page5Img').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#6CB2B8'},1000);
		 		$('.pic31').animate({top:'0%',opacity:'0'},500);
		 		$('.pic32').animate({top:'40%',opacity:'0'},500);

		 		$('.pic51').animate({top:'0%',opacity:'1'},1000);
		 	}
		 	$('#down4').animate({opacity:'0'},500);
		 	break;
		case 5: 
			$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgFour').animate({opacity:'0'},1000);
			//$('.pic51').animate({top:'0%',opacity:'1'},1000);

			if(page == 1){
				$('#page4Img').stop(false,true).animate({opacity:'0'},400);
				$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
				$('.pic41').animate({top:'65%',opacity:'0'},500);
				$('.pic42').animate({top:'65%',opacity:'0'},500);
			}
			if(page == 2){
				$('#page4Img').stop(false,true).animate({opacity:'0'},400);
				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
				$('body').animate({backgroundColor:'#8DA8C0'},700);
				$('.pic41').animate({top:'65%',opacity:'0'},500);
				$('.pic42').animate({top:'65%',opacity:'0'},500);

				$('.pic11').animate({top:'-10%',opacity:'1'},1000);
				$('.pic12').animate({top:'15%',opacity:'1',},1000);
			}
			if(page == 3){
				$('#page4Img').stop(false,true).animate({opacity:'0'},400);
				$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
				$('body').animate({backgroundColor:'#B8DB7C'},1000);
				$('.pic41').animate({top:'65%',opacity:'0'},500);
				$('.pic42').animate({top:'65%',opacity:'0'},500);

				$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
			}
			if(page ==4 ){
				$('#page4Img').stop(false,true).animate({opacity:'0'},400);
				$('#page3Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#E8E04B'},1000);
				$('.pic41').animate({top:'65%',opacity:'0'},500);
				$('.pic42').animate({top:'65%',opacity:'0'},500);

				$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
				$('.pic32').animate({ top:'28%',opacity:'1'},1000);
			}
			if(page == 6){
				$('#page4Img').stop(false,true).animate({opacity:'0'},400);
				$('#page5Img').stop(false,true).animate({opacity:'1'},400);
				$('body').animate({backgroundColor:'#6CB2B8'},1000);
				$('.pic41').animate({top:'5%',opacity:'0'},500);
				$('.pic42').animate({top:'-20%',opacity:'0'},500);

				$('.pic51').animate({top:'0%',opacity:'1'},1000);
			}
			$('#down5').animate({opacity:'0'},500);
			break;
 		case 6: 
 			$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
		 	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
		 	$('#imgFive').animate({opacity:'0'},1000);
		 	$('#imgSix').animate({opacity:'0'},1000);
		 	if(page == 5 ){
		 		$('#page4Img').stop(false,true).animate({opacity:'1'},400);
		 		$('#page5Img').stop(false,true).animate({opacity:'0'},400);
		 		$('body').animate({backgroundColor:'#C8AF53'},1000);
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 		$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 		$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
		 		}
		 	if(page == 1){
		 		$('#page5Img').stop(false,true).animate({opacity:'0'},400);
		 		$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 	}
		 	if(page == 2){
		 		$('#page5Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#8DA8C0'},700);
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 		$('.pic11').animate({top:'-10%',opacity:'1'},1000);
				$('.pic12').animate({top:'15%',opacity:'1',},1000);
		 	}
		 	if(page == 3){
		 		$('#page5Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#fixedImg').stop(false,true).animate({opacity:'1'},200);
		 		$('body').animate({backgroundColor:'#B8DB7C'},1000);
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 		$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
		 	}
		 	if(page == 4){
		 		$('#page5Img').stop(false,true).animate({opacity:'0'},400);
		 		$('#page3Img').stop(false,true).animate({opacity:'1'},400);
		 		$('body').animate({backgroundColor:'#E8E04B'},1000);
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 		$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
				$('.pic32').animate({ top:'28%',opacity:'1'},1000);
		 	}
		 	break;
	}
}
function occurdescription(index){
	switch(index){
		case 2:
			$('#h1One').animate({marginTop:'0px',opacity:'1'},200);
			// $('body').animate({backgroundColor:'#8DA8C0'},700);
			// $('.pic11').animate({top:'-10%',opacity:'1'},1000);
			// $('.pic12').animate({top:'15%',opacity:'1',},1000);
			// $('.pic21').animate({top:'60%',opacity:'0'},500);
			// $('.pic22').animate({top:'100%',opacity:'0'},500);
			// $('.pic23').animate({top:'100%',opacity:'0'},500);
			$('#down2').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 3: 
			$('#h1Two').animate({marginTop:'0px',opacity:'1'},200);
			//$('body').animate({backgroundColor:'#B8DB7C'},1000);
			// $('.pic21').animate({top:'-5%',opacity:'0.8'},1000);
			// $('.pic22').animate({top:'50%',opacity:'1'},1000);
			// $('.pic23').animate({top:'50%',opacity:'1'},1500);
			// $('.pic11').animate({top:'60%',opacity:'0'},1000);
			// $('.pic12').animate({top:'18%',opacity:'0'},1000);
			// $('.pic31').animate({top:'50%',opacity:'0'},1000);
			// $('.pic32').animate({top:'100%',opacity:'0'},1000);
			// $('.pic33').animate({top:'100%',opacity:'0'},1000);
			$('#down3').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 4: 
			$('#h1Three').animate({marginTop:'0px',opacity:'1'},200);
			//$('body').animate({backgroundColor:'#E8E04B'},1000);
			// $('.pic21').animate({top:'60%',opacity:'0'},500);
			// $('.pic22').animate({top:'100%',opacity:'0'},500);
			// $('.pic23').animate({top:'100%',opacity:'0'},500);
			// $('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
			// $('.pic32').animate({ top:'28%',opacity:'1'},1000);
			// $('.pic33').animate({ top:'28%',opacity:'1'},1000);
			// $('.pic41').animate({top:'100%',opacity:'0'},500);
			// $('.pic42').animate({top:'50%',opacity:'0'},500);
			$('#down4').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 5:
			$('#h1Four').animate({marginTop:'0px',opacity:'1'},200);
			//$('body').animate({backgroundColor:'#C8AF53'},1000);
			// $('.pic31').animate({top:'50%',opacity:'0'},1000);
			// $('.pic32').animate({top:'100%',opacity:'0'},1000);
			// $('.pic33').animate({top:'100%',opacity:'0'},1000);
			// $('.pic41').animate({top:'35%',opacity:'0.6'},1000);
			// $('.pic42').animate({top:'0%',opacity:'0.6'},1000);
			$('#down5').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 6:
			$('#h1Five').animate({marginTop:'0px',opacity:'1'},200);
			//$('body').animate({backgroundColor:'#6CB2B8'},1000);
			// $('.pic41').animate({top:'100%',opacity:'0'},500);
			// $('.pic42').animate({top:'50%',opacity:'0'},500);
			setTimeout(pFadeIn(index),200);
			break;
	}
}
function pFadeIn(index){
	switch(index){
		case 2:
			$('#pOne').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgOne').animate({opacity:'1'},500);
			break;
		case 3:
			$('#pTwo').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgTwo').animate({opacity:'1'},500);
			break;
		case 4:
			$('#pThree').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgThree').animate({opacity:'1'},500);
			break;
		case 5:
		 	$('#pFour').animate({marginTop:'10px',opacity:'1'},200);
		 	$('#imgFour').animate({opacity:'1'},500);
		 	break;
		case 6:
			$('#pFive').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgFive').animate({opacity:'1'},500);
			$('#imgSix').animate({opacity:'1'},500);
			break;
	}
}
function browserRedirect() {

    var sUserAgent = navigator.userAgent.toLowerCase();

    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

    var bIsMidp = sUserAgent.match(/midp/i) == "midp";

    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

    var bIsAndroid = sUserAgent.match(/android/i) == "android";

    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        $("#five5").css({"display":"block"});
        $("#five5-1").css({"display":"none"});
        $("#nav").css({"display":"none"});
    }
}
