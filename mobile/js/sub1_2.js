$(document).ready(function(){
    let on1=false , on2=false; 
    let y2024 = $('.y2024').offset().top-70;
    let y2019 = $('.y2019').offset().top-70;

    $(window).on('scroll',function(){
       
        let scroll = $(window).scrollTop();
        //console.log(scroll);
       
        if(scroll<470){
            $('.side_btn').hide();
        }else{
            $('.side_btn').fadeIn();
        }
    
        
        if(scroll>=y2024 && scroll<y2019){
            if(on1==false){
              $('.side_btn span').stop().animate({'right':'-15px'}).css({'background':'#e4e4e4'});
              $('.side_btn span a').css('color','#333');
              $('.side_btn span:eq(0)').stop().animate({'right':'-5px'}).css({'background':'rgb(126, 105, 86)'});
              $('.side_btn span:eq(0) a').css('color','#fff');
              on1=true;
              on2=false;
            }
        }else if(scroll>=y2019){
            if(on2==false){
                $('.side_btn span').stop().animate({'right':'-15px'}).css({'background':'#e4e4e4'});
                $('.side_btn span a').css('color','#333');
                $('.side_btn span:eq(1)').stop().animate({'right':'-5px'}).css({'background':'rgb(126, 105, 86)'});
                $('.side_btn span:eq(1) a').css('color','#fff');
                on1=false;
                on2=true;
            }
        }
    });
        $('.awardsnav ul li a').css('color','#333');
        $('.awardsnav ul li:eq(0) a').css('color','#B0744D');

        $('.awardsnav ul li a').click(function(e){
            e.preventDefault();
            if($(this).hasClass('year1')){
                scr = y2024;
                $('.awardsnav ul li a').css('color','#333');
                $(this).css('color','#B0744D');
            }else if($(this).hasClass('year2')){
                scr = y2019;
                $('.awardsnav ul li a').css('color','#333');
                $(this).css('color','#B0744D');
            }
            $('html, body').stop().animate({'scrollTop':scr},1000);
        });
    
     
        $('.side_btn span').click(function(e){
            e.preventDefault();
    
            if($(this).hasClass('year1')){
                scr = y2024;
            }else if($(this).hasClass('year2')){
                scr = y2019;
            }
            $('html, body').stop().animate({'scrollTop':scr},1000);
        });
  
    
    });
    //랩퍼 끝