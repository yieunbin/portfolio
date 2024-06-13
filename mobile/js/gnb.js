$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

      if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했냐??
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{  //메뉴가 열려있는 상태에서 클릭했냐??
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false]; //가정법 false(서브닫힘) , true(열림)
    var arrcount=onoff.length;  // 배열의 개수 6
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3').click(function(e){  //1depth메뉴를 클릭하면
      e.preventDefault();
        
      var ind=$(this).parents('.depth1').index();  // 0~5
      //var ind=$(this).index('#gnb .depth1 h3 a');
        
      //console.log(ind);
        
       if(onoff[ind]==false){  //각각의 1depth메뉴의 서브가 닫혀있냐??
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 배열값을 false
         onoff[ind]=true;  //자신의 대한 배열만 true로 변경
           
         $('.depth1 i').attr('class','fa-solid fa-chevron-down').css('color','#333');
         $('#gnb .depth1 h3 a').css('color','#333');
         $(this).find('i').attr('class','fa-solid fa-chevron-up').css('color','#B0744D');
         $('a',this).css('color','#B0744D')
            
       }else{ //각각의 1depth메뉴의 서브가 열려있냐??
         $(this).parents('.depth1').find('ul').slideUp('fast'); //지 서브를 닫아라~~
         onoff[ind]=false;  // true->false 
           
         $('.depth1 i').attr('class','fa-solid fa-chevron-down').css('color','#333');
         $('#gnb .depth1 h3 a').css('color','#333');
       }
    });    
  
  });

  // 패밀리
  $('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');
    $('i',this).attr('class','fa-solid fa-chevron-down');
	},function(){
    $('.family .aList').fadeOut('fast');	
    $('i',this).attr('class','fa-solid fa-chevron-up');
	});


