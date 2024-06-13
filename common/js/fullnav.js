
$(document).ready(function() {
  
  let smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다 
  let on_off=false;  //false(안오버)  true(오버)
  let up_down = 'up';  //비주얼위에 있으면 'up',아래에 있으면'down'
  let gnb_kname = ['회사소개','객 실','레스토랑','연 회','편의시설','스페셜오퍼'];
  let gnb_ename = ['ABOUT US','ROOM','DINING','BANQUET','FACILITY','SPECIAL OFFER'];
  
      $('#headerArea').mouseenter(function(){
        // var scroll = $(window).scrollTop();
          $(this).css('background','#7E6956');
          $('#headerArea').css('box-shadow','1px 1px 5px 1px rgba(0,0,0,.3)');
          on_off=true;
      });
   
      $('#headerArea').mouseleave(function(){
          var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-200 ){
                $(this).css('background','none');
                $('#headerArea').css('box-shadow','none');
            }else{
                $(this).css('background','#7E6956');
                $('#headerArea').css('box-shadow','1px 1px 5px 1px rgba(0,0,0,.3)');
            }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
          var scroll = $(window).scrollTop();  
          //스크롤의 거리를 리턴하는 함수
          //console.log(scroll);

            if(scroll>smh-200){//스크롤이 비주얼의 높이-header높이 까지 내리면
                $('#headerArea').css('background','#7E6956');
                $('#headerArea .header_top').addClass('ch');
                $('#gnb .dropdownmenu').addClass('ch');
                $('#headerArea').css('height','120px');
                $('#headerArea').css('box-shadow','1px 1px 5px 1px rgba(0,0,0,.3)');
                up_down = 'down';
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){
                    $('#headerArea').css('background','none');
                    $('#headerArea .header_top').removeClass('ch');
                    $('#gnb .dropdownmenu').removeClass('ch');
                    $('#headerArea').css('height','199px');
                    $('#headerArea').css('box-shadow','none')
                }
                up_down = 'up';
            }; 
            
      });

  
    //2depth 열기/닫기
    $('.dropdownmenu').hover(function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();}); //모든 서브를 다 열어라
          if(up_down == 'up'){
            $('#headerArea').animate({height:400},'normal').clearQueue();
          }else{
            $('#headerArea').animate({height:320},'normal').clearQueue();
          }
        },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          if(up_down == 'up'){
            $('#headerArea').animate({height:199},'normal').clearQueue();
          }else{
            $('#headerArea').animate({height:120},'normal').clearQueue();
          }
          
    });
    
     //1depth 효과
    $('ul.dropdownmenu .menu').hover(function() { 
          $('.depth1',this).css('color','#3B1D0C');
          //  $(this).find('span').fadeIn('fast').animate({'bottom':0},500);
        },function() {
          $('.depth1',this).css('color','#fff');
    });

    $('ul.dropdownmenu .menu .depth1').hover(function() { 
        let i = $(this).index('ul.dropdownmenu .menu .depth1');
        //console.log(i);
        $(this).text(gnb_kname[i]);
      },function() {
        let i = $(this).index('ul.dropdownmenu .menu .depth1');
        $(this).text(gnb_ename[i]);
    });

     //2depth 효과
    $('.dropdownmenu .menu ul li').hover(function() { 
          $('a',this).css('color','#3B1D0C').css('font-weight',500);
      },function() {
        $('a',this).css('color','#fff');
    });


     //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:420},'fast').clearQueue();
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:120},'normal').clearQueue();
    });
});
