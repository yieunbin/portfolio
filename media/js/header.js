$(document).ready(function(){
    let vsh = $('.vidoeBox').height();
    let on_off=false;  
    let up_down = 'up';  

    $('#headerArea').mouseenter(function(){
        // var scroll = $(window).scrollTop();
        $(this).css({'background':'rgba(0,0,0,.6)','backdrop-filter':'blur(20px)','box-shadow':'1px 1px 5px 1px rgba(0,0,0,.3)'});
        on_off=true;
    });

    $('#headerArea').mouseleave(function(){
        let scroll = $(window).scrollTop();
            
        if(scroll<600 ){
            $(this).css({'background':'none','backdrop-filter':'none','box-shadow':'none'});
        }else{
            $(this).css({'background':'rgba(0,0,0,.6)','backdrop-filter':'blur(20px)','box-shadow':'1px 1px 5px 1px rgba(0,0,0,.3)'});
        }
        on_off=false;    
    });

    //  햄버거메뉴
    var onoff = false; 
    let bodyH = $(window).height();
    $(".menuOpen").click(function(e){
        e.preventDefault();
        if(onoff == false){
        $("#gnb").slideDown('slow');
        $('#headerArea').addClass('mn_open');
        $('.hamback').fadeIn('slow');
        $('hamback').fadeIn('slow');
        onoff = true;
        }else{
        $("#gnb").slideUp('fast');
        $('#headerArea').removeClass('mn_open');
        $('.hamback').fadeOut('fast');
        onoff = false;
        }
    });

    var screenSize = $(window).width();
    var winh =  $(document).height();

    if( screenSize > 768){
        $("#gnb").height('auto');
    }
    // else{
    //     $("#gnb").height(winh);
    // }
    
    var current=0; 

    $(window).resize(function(){ 
        var screenSize = $(window).width();  
        if( screenSize > 768){ 
            $("#gnb").show();
            $("#gnb").height('auto');
                current=1; 
        }
        if(current==1 && screenSize <= 768){
            $("#gnb").hide();
            $("#gnb").height('auto');
            onoff = false;
            current=0;
        }
    }); 
    

    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();  
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        //console.log(scrollBottom);
            

            if(scroll>600){
                $('#headerArea').css({'background':'rgba(0,0,0,.6)','backdrop-filter':'blur(20px)','box-shadow':'1px 1px 5px 1px rgba(0,0,0,.3)'});
                $('.moveTop').fadeIn('slow');
                $('.darkM').fadeIn('slow');
                up_down = 'down';
            }else{
                if(on_off==false){
                    $('#headerArea').css({'background':'none','backdrop-filter':'none','box-shadow':'none'});
                    $('.moveTop').fadeOut('fast');
                    $('.darkM').fadeOut('fast');
                }
                up_down = 'up';
            }; 

            // if(scroll>8400){
            //     $('.castleback').fadeIn().delay(1500).addClass('castlepop');
            // }
            if(scrollBottom == 0){
                $('.castle').animate({'bottom':'210px'},500);
                $('.castleback').fadeIn().delay(3000).addClass('castlepop');
            }
            // else{
            //     $('.castle').animate({'bottom':'-200px'},300);
            //     $('.castleback').fadeOut().removeClass('castlepop');
            // }
            
    });

    $('.moveTop').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},500); 
    });
    
    $('.moveTop').mouseenter(function(){
        $(this).find('i').css('color','#005bea');
        $(this).find('div').css({'opacity':'1','color':'#005bea'});
    });
    $('.moveTop').mouseleave(function(){
        $(this).find('i').css('color','#333');
        $(this).find('div').css({'opacity':'0','color':'#333'});
    });

    


});