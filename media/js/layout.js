$(document).ready(function(){

    $('.themeImgbox').hover(function(){
        if(scSize > 1024){
            $('.poptxt').hide();
            
            $('.theme').css({'background':'rgba(0,0,0,.8)'});
            $('.theme .themeImgbox').css('filter','brightness(20%)');
            $(this).css('filter','brightness(100%)');
            $(this).next('p').css('color','#fff');
            $(this).parent().find('.poptxt').fadeIn('fast');
        }else{
            $('.theme').css({'background':'rgba(0,0,0,.8)'});
            $('.theme .themeImgbox').css('filter','brightness(20%)');
            $(this).css('filter','brightness(100%)');
            $(this).next('p').css('color','#fff');
            $('.poptxt').find('p').css({'text-shadow':'none','color':'#333'});
            $(this).parent().find('.poptxt').find('p').css({'text-shadow':'none','color':'#fff'});
        }
    }, function(){
        if(scSize > 1024){
            $('.theme').css({'background':'rgba(255,255,255,.8)'});
            $('.theme .themeImgbox').css('filter','brightness(100%)');
            $(this).next('p').css('color','#333');
            $(this).parent().find('.poptxt').fadeOut('fast');
        }else{
            $('.theme').css({'background':'rgba(255,255,255,.8)'});
            $('.theme .themeImgbox').css('filter','brightness(100%)');
            $(this).next('p').css('color','#333');
            $(this).parent().find('.poptxt').find('p').css({'color':'#333'});
        }
    });
    

    // show
    var swiper1 = new Swiper('.swiper1', {
        autoHeight: true,
        slidesPerView: 1,
        loop: false,
        pagination: {  
            el: '.pagination1',
            //dynamicBullets: true,
            clickable: true,
        }
    });

    // trailer
    var swiper2 = new Swiper('.swiper2', {
        //autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 20,  
        loop: true,
        centeredSlides: true,
        initialSlide : 1,

        navigation: {    
            nextEl: '.next2',
            prevEl: '.prev2',
        },
        pagination: { 
            el: '.pagination2',
            //dynamicBullets: true,
            clickable: true,
        },
        breakpoints:{
            641:{
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });

    // scroll events
    const aboutSection = document.querySelector("section.about");
    const ulElement = aboutSection.querySelector("ul");

    function calculateScrollValue() {
        const ulRect = ulElement.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const ulBottom = ulRect.bottom + scrollTop;

        return ulBottom;
    }

    $(window).on('scroll',function(){
        let scr = $(window).scrollTop();
        const scrollValue = calculateScrollValue();
        console.log(scr);
        console.log(scrollValue);

        // 미니언즈
        if(scr > scrollValue-700){
            //1838
            $('.minions img:nth-of-type(1)').animate({'left':'0','opacity':'1'},500);
            $('.minions img:nth-of-type(2)').delay(300).animate({'left':'59%'},500);
            $('.minions img:nth-of-type(3)').delay(700).animate({'left':'62%'},700);
        }
        // 스파이더맨
        if(scr > 2300){
            $('.spiderman img:nth-of-type(1)').animate({'opacity':'1','top':'-4%'},500).clearQueue();
            $('.spiderman img:nth-of-type(2)').delay(700).addClass('wrapBig');
        }

        // trailer mario
        if(scr > 5900){
            $('.marios').addClass('mariomove');
        }

        // footer
        // if(scr > 8400){
        //     $('.castleback').fadeIn().delay(1500).addClass('castlepop');
        // }
    });

    // 해상도별 이미지교체
    let scSize = $(window).width();

    function screenW(){
        if(scSize > 1024){
            $('.img1 img').attr('src','./images/about1.jpg');
        }
        if(scSize <= 1024){
            $('.img1 img').attr('src','./images/about1s.jpg');
        }
        if(scSize <= 768){
            $('.img3 img').attr('src','./images/about3s.jpg');
        }
        
    }

    // dark mode
    $('.darkM').on('click', function() {
        $('body').toggleClass('dark-mode');
        $(this).toggleClass('dark');
        $('section').toggleClass('dark-mode');
        $('.rotated_one_conic_box, .rotated_one_conic_box_demo').toggleClass('dark');
        $('.morebtn').toggleClass('dark');
        $('.about').toggleClass('dark');
        $('.swiper1').toggleClass('dark');
        $('.show').toggleClass('dark');
        $('#footerArea').toggleClass('dark');
        
        if ($('body').hasClass('dark-mode')) {
            $('.img1 img').attr('src', './images/about1_d.jpg');
            $('.show').css({'background':'url(./images/show_back_dark.png) bottom center no-repeat','background-size':'cover'});
        } else {
            $('.img1 img').attr('src', './images/about1.jpg');
            $('.show').css({'background':'url(./images/show_back_group.png) bottom center no-repeat','background-size':'cover'});
        }
    });

    screenW();

    $(window).resize(function(){ 
        scSize = $(window).width(); 
        screenW();//함수호출
        calculateScrollValue();
    });  







});
// 랩퍼 끝