$(document).ready(function(){
    $('body,html').stop().animate({'scrollTop':0},1000);

    let wh = $(window).height();
    //console.log(wh);
    $('section').height(wh);

    $(window).on('resize',function(){
		wh = $(window).height();	
		$('section').height(wh);
	});	

    $('section').on('mousemove',function(e){		
		let posX= e.pageX;
		let posY= e.pageY;
		
		$('.b1').css({'left':5-(posX/30) , 'top':-45-(posY/30) });
		$('.b2').css({'left':80+(posX/20) , 'top':-45+(posY/20) });
		$('.b3').css({'left':-100-(posX/30) , 'bottom':-50-(posY/30) });		
		$('.b4').css({'left':180+(posX/20) , 'bottom':160+(posY/20) });
        $('.b5').css({'left':0+(posX/100) , 'top':0+(posY/100) });		
	});

    $('.link a').hover(function(){
        $(this).siblings().css({'filter': 'brightness(25%)'});
        $(this).css({'filter': 'brightness(100%)'});
    }, function() {
        $(this).siblings().css({'filter': 'brightness(100%)'});
    });

    // typing
    const content = "welcome to my".split("");
    //let typingBool = false;
    let typingIdx = 0;


    function typing() {
        if (typingIdx < content.length) {
            $('.homeTitle').append(content[typingIdx]);
            typingIdx++;
        } else {
            clearInterval(clear1);
            $('.portfolioTxt').css('opacity', '1'); 
        }
    }
    let clear1 =  setInterval(typing, 110);


    // scroll
    const header = $('#header');
    const rightNav = $('.rightNav');
    const sections = $('section');
    const profileSection = $('.profile');
    const pcSection = $('.pcver');
    const mobSection = $('.mobilever');
    const rpSection = $('.rpweb');
    const thanksSection = $('.thanks');
    let rpAnimated = false;

    header.hide();
    rightNav.hide();
    $(window).on('scroll', function() {
        wh = $(window).height();	
        const scroll = $(window).scrollTop();
        const profileOffset = profileSection.offset().top;
        const pcOffset = pcSection.offset().top;
        const mobileOffset = mobSection.offset().top;
        const rpOffset = rpSection.offset().top;
        const thanksOffset = thanksSection.offset().top;
        
        if (scroll >= profileOffset) {
            header.fadeIn();
            rightNav.fadeIn();
            $('.link a:eq(0)').animate({'top':'0','opacity':'1'},500);
            $('.link a:eq(1)').delay(200).animate({'top':'0','opacity':'1'},500);
            $('.link a:eq(2)').delay(400).animate({'top':'0','opacity':'1'},500);
        }else {
            header.fadeOut();
            rightNav.fadeOut();
        }

        if (scroll >= rpOffset && !rpAnimated) {
            $('.ipad').animate({'left':'-2%'},700);
            $('.iphone').animate({'left':'23%'},900);
            rpAnimated = true;
        } else if (scroll < rpOffset && rpAnimated) {
            $('.ipad').animate({'left':'-100%'},700);
            $('.iphone').animate({'left':'-100%'},700);
            rpAnimated = false;
        }

        if (scroll >= pcOffset && scroll < mobileOffset) {
            console.log('Adding changeYellow1');
            $('.b1').addClass('changeYellow3').removeClass('changeBlue1');
            $('.b2').addClass('changeYellow2').removeClass('changeBlue2');
            $('.imgbox1').addClass('slideUp');
            //$('.b5').addClass('changeYellow3').removeClass('changeBlue3');
        }else if(scroll >= mobileOffset && scroll < rpOffset){
            $('.imgbox2').addClass('slideUp');
        } else if (scroll >= rpOffset && scroll < thanksOffset) {
            console.log('Adding changeBlue');
            $('.b1').addClass('changeBlue1').removeClass('changeYellow3');
            $('.b2').addClass('changeBlue2').removeClass('changeYellow2');
            //$('.b5').addClass('changeBlue3').removeClass('changeYellow3');
            $('.imgbox3').addClass('slideUp');
        } else if(scroll >= thanksOffset){
            $('.b1').removeClass('changeYellow3 changeBlue1');
            $('.b2').removeClass('changeYellow2 changeBlue2');
        } else {
            console.log('Removing all classes');
            $('.b1').removeClass('changeYellow3 changeBlue1');
            $('.b2').removeClass('changeYellow2 changeBlue2');
            //$('.b5').removeClass('changeYellow3 changeBlue3');
        }
    
        for(var i=0; i<5;i++){
			if(scroll>=wh*i && scroll< wh*(i+1)){
				$('#menu li').removeClass();
                $('.rightNav ul li').removeClass();
				$('#menu li').eq(i).addClass('active');
                $('.rightNav ul li').eq(i).addClass('on');
                //break;
			};
		}
    });

    $('section').on('mousewheel', function(event, delta) {
        if (delta > 0) { 
            const prevSection = $(this).prev('section');
            if (prevSection.length) { 
                const prev = prevSection.offset().top;
                $('html, body').stop().animate({'scrollTop': prev}, 500);
            }
        } else if (delta < 0) { 
            const nextSection = $(this).next('section');
            if (nextSection.length) { 
                const next = nextSection.offset().top;
                $('html, body').stop().animate({'scrollTop': next}, 500);
            } else { 
                const top = $('body').offset().top;
                $('html, body').stop().animate({'scrollTop': top}, 1000);
            }
        }
        return false;
    });
    
    // menu
    $('#menu li').on('click',function(e){
		e.preventDefault();
        const i = $(this).index();
        const nowTop = sections.eq(i).offset().top; 

        $('html,body').stop().animate({'scrollTop': nowTop}, 1000);
	});

    $('.rightNav ul li').on('click',function(e){
        e.preventDefault();
        const i = $(this).index();
        const nowTop = sections.eq(i).offset().top; 

        $('html,body').stop().animate({'scrollTop': nowTop}, 1000);
    });









});