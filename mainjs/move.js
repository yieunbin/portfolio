// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.mbutton').css('width','20px'); 
    $('.btn1').css('background','rgba(255, 255, 255, 0.613)'); //첫번째 불켜
    $('.btn1').css('width','180px');  // 버튼의 너비 증가
    $('.btn1').find('span').css({'width':'100%'});
    
    $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
    $('.gallery .link1 span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow');
    $('.gallery .link1 span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

    function moveg(){
        if(cnt==imageCount+1)cnt=1;
        if(cnt==imageCount)cnt=0;  //카운트 초기화

        cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
      
      //  for(var i=1;i<=imageCount;i++){
      //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
      //  }
      
      $('.gallery li').fadeOut(200); //모든 이미지 안보인다.
      $('.gallery .link'+cnt).fadeIn(400); //자신만 이미지가 보인다..
                            
      //  for(var i=1;i<=imageCount;i++){
      //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
      //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
      //   }
        
       
        $('.mbutton').css('width','20px'); // 버튼 원래의 너비
        $('.mbutton span').css({'width':'0', 'transition':'none'});
        // $('.mbutton').css('animation','none'); 
        //$('.btn'+cnt).css('background','rgba(255, 255, 255, 0.613)');//자신만 불켜
        $('.btn'+cnt).css('width','180px');    
        $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});

        $('.gallery li span').css('top',570).css('opacity',0); //모든 텍스트 숨기기
        $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow'); //선택된 내용만 노출
        $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');



        if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       //원래 있던 변수명이나 메소드명을 변수명으로 또 쓰고싶으면 $쓸 수 있음. (제이쿼리에서만)
       clearInterval(timeonoff); //클릭했을 때 타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut(200); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭?? this가 btn1클래스를 가지고있다면
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }//else 생략가능. 짜투리가 없음!

		  $('.gallery .link'+cnt).fadeIn(400);  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
    
      $('.mbutton').css('width','20px');
      $('.mbutton span').css({'width':'0', 'transition':'none'});
      //$('.btn'+cnt).css('background','rgba(255, 255, 255, 0.613)');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','180px');
      $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});
      
      $('.gallery li span').css('top',570).css('opacity',0);
      $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow');
      $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화. 타이머를 다시 생성하기위해 초기화함.
      //맨위에 있어서 또 안써도됨
     
      timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.dock .ps').removeClass('active');
      };
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.dock .ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //stop버튼 클릭시
		     $(this).addClass('active'); 
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
       $(this).removeClass('active');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').hover(function(){
      $('i',this).css('color','#3B1D0C')
    },function(){
      $('i',this).css('color','#fff')
    });


    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //클릭했을 때 타이머 중지

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount; //위에서 초기화할때 0으로 초기화했기 때문에 해당 상황값 추가
          cnt--; //카운트 감소
      }
    

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').fadeOut(200); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn(400); //자신만 이미지가 보인다..
                        
   
    $('.mbutton').css('width','20px');
    $('.mbutton span').css({'width':'0', 'transition':'none'});
    //$('.btn'+cnt).css('background','rgba(255, 255, 255, 0.613)');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','180px');
    $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});

    $('.gallery li span').css('top',570).css('opacity',0);
    $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow'); 
    $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

    if($(this).is('.btnRight')){
      if(cnt==imageCount)cnt=0;
    }else if($(this).is('.btnLeft')){
      if(cnt==1)cnt=imageCount+1;
    }

    timeonoff= setInterval( moveg , 5000); //부활

    if(onoff==false){ //정지되어있을때 버튼을 누르면 이미지 변경
      onoff=true;
      $('.dock .ps').removeClass('active');
    }
  });


});




