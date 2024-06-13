$(document).ready(function(){
    $('.b_box').addClass('hide');
    $('.b_box').find('.d').slideUp(100);
    $('.b_box').find('a').html('<i class="fa-solid fa-sort-down"></i>');
    $('.b_box:eq(0)').removeClass('hide').addClass('show');
    $('.b_box:eq(0)').find('.d').slideDown(300);
    $('.b_box:eq(0)').find('a').html('<i class="fa-solid fa-sort-up"></i>');

    $('.b_box .benefit a').click(function(e){
        e.preventDefault();

        let box = $(this).parents('.b_box');

        if (box.hasClass('show')) {
            box.removeClass('show').addClass('hide');
            box.find('.d').slideUp(300);
            $(this).html('<i class="fa-solid fa-sort-down"></i>');
        } else {
            $('.b_box').removeClass('show').addClass('hide');
            $('.b_box').find('.d').slideUp(300);
            $('.b_box').find('a').html('<i class="fa-solid fa-sort-down"></i>');

            box.removeClass('hide').addClass('show');
            box.find('.d').slideDown(300);
            $(this).html('<i class="fa-solid fa-sort-up"></i>');
        }

    });

    $('.all').toggle(function(e){
        e.preventDefault(); 
        $('.b_box').find('.d').slideDown(300);
        $('.b_box').removeClass('hide').addClass('show');
        $('.b_box').find('a').html('<i class="fas fa-chevron-up"></i>');
        $(this).find('span').text('모두닫기 ');
        $(this).find('i').attr('class', 'fas fa-chevron-down');
    },function(e){
        e.preventDefault(); 
        $('.b_box').find('.d').slideUp(300);
        $('.b_box').removeClass('show').addClass('hide');
        $('.b_box').find('a').html('<i class="fas fa-chevron-down"></i>');
        $(this).find('span').text('모두열기 ');
        $(this).find('i').attr('class', 'fas fa-chevron-up');
    });

    // all btn
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        //console.log(scroll);

        if(scroll>810 && scroll<2000){
            $('.all').animate({'right':'-90px'},'fast').clearQueue();
        }else{
            $('.all').animate({'right':'-400px'},'fast').clearQueue();
        }

        if(scroll>600){
            $('.b_box:eq(0)').animate({'opacity':'1','top':'0px'},'slow').clearQueue;
        }
        if(scroll > 1120){
            $('.b_box:eq(1)').animate({'opacity': '1', 'top': '0px'}, 'slow').clearQueue();
        }
        if(scroll > 1345){
            $('.b_box:eq(2)').animate({'opacity': '1', 'top': '0px'}, 'slow').clearQueue();
        }


        if(scroll > 2000){
            $('.getcp span:eq(0)').animate({'width':'135px'},'slow');
            $('.getcp span:eq(1)').delay(200).animate({'width':'295px'},'slow');
            $('.getcp span:eq(2)').delay(400).animate({'width':'325px'},'slow');
            $('.getcp span:eq(3)').delay(600).animate({'width':'160px'},'slow');

            $('.getcp ul li ul li').animate({'opacity':'1','top':'0px'},'fast').clearQueue();
            // $('.getcp ul li ul li:eq(1)').animate({'opacity':1,'top':0},'fast').clearQueue();
        }
    });

    







});
//랩퍼 끝