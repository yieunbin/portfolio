$(document).ready(function(){
    
    let scnum = 0;
    let yearsec1 = $('.awards ul:eq(0)').offset().top-200;
    let yearsec2 = $('.awards ul:eq(5)').offset().top-200;

    let i = $('.awards ul').index('.awards ul');
    //console.log(i);
    let c1 = $('.awards ul:eq(0)').offset().top-400;
    let c2 = $('.awards ul:eq(1)').offset().top-400;
    //let c3 = $('.awards ul:eq(2)').offset().top-800;
    //let c4 = $('.awards ul:eq(3)').offset().top-800;
    let c5 = $('.awards ul:eq(4)').offset().top-400;
    let c6 = $('.awards ul:eq(5)').offset().top-400;
    //let c7 = $('.awards ul:eq(6)').offset().top-800;
    let c8 = $('.awards ul:eq(7)').offset().top-500;

    $('.awardsnav li').hover(function(){
        $('.back_col',this).css({
            'background-image': 'url(./images/content2/silde_bg02.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'left top',
            'background-clip': 'text',
            'color': 'transparent'
        });
    },function(){
        $('.awardsnav .back_col').css({
            'background-image': 'url(./images/content2/silde_bg02.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'right top',
            'background-clip': 'text',
            'color': 'transparent'
        });
    });


    $(window).scroll(function(){
        let scpoint = $(this).scrollTop();
        console.log(scpoint)
    });

    $('.awardsnav a').click(function(e){
        e.preventDefault();

        if($(this).hasClass('year1')){
            scnum = yearsec1;
            //$('.awardsnav li:eq(1) .back_col').css('color','transparent');
            //$('.back_col',this).css('color','#B0744D');
            $('.awardsnav li:eq(1) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
        }else if($(this).hasClass('year2')){
            scnum = yearsec2;
            $('.awardsnav li:eq(0) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
        }

        $('html, body').stop().animate({'scrollTop':scnum},1000);
    });

    $('.move_top').click(function(){
        $('.awardsnav .back_col').css('color','transparent');
    });

    //스티키메뉴
    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();

        if(scroll > 1214){
            $('.awardsnav').addClass('navOn');
            $('#headerArea').hide();
        }else{
            $('.awardsnav').removeClass('navOn');
            $('#headerArea').show();
        }

        $('.awardsnav li .back_col').css({
            'background-image': 'url(./images/content2/silde_bg02.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'right top',
            'background-clip': 'text',
            'color': 'transparent'
        });
        // $('.awards ul').removeClass('awardscon');
        $('.awardsnav li .back_col').css('color','transparent');

        //어워즈사진 스크롤 이벤트
        if(scroll>=c1 && scroll<c2){
            $('.awardsnav li:eq(0) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
            $('.awards ul:eq(0)').addClass('awardscon');
            
        }else if(scroll>=c2 && scroll<c5){
            $('.awardsnav li:eq(0) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
            $('.awards ul:eq(1)').addClass('awardscon');
            $('.awards ul:eq(2)').addClass('awardscon');
            $('.awards ul:eq(3)').addClass('awardscon');
            
        }else if(scroll >=c5 && scroll<c6){
            $('.awardsnav li:eq(0) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
            $('.awards ul:eq(4)').addClass('awardscon');
        }else if(scroll >=c6 && scroll<c8){
            $('.awardsnav li:eq(1) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
            $('.awards ul:eq(5)').addClass('awardscon');
            $('.awards ul:eq(6)').addClass('awardscon');
        }else if(scroll>=c8){
            $('.awardsnav li:eq(1) .back_col').css({
                'background-image': 'url(./images/content2/silde_bg02.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'left top',
                'background-clip': 'text',
                'color': 'transparent'
            });
            $('.awards ul:eq(7)').addClass('awardscon');
        };





    });





















});