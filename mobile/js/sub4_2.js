var swiper_tab = new Swiper('.swiper_tab', {
    autoHeight: true,
    speed : 500
});

$(".tabs a").click(function(e) {
    e.preventDefault();
});

$.ajax({
    url:'./data/member.json',
    dataType:'json',
    success:function(data){
        let member = data.memship;

        $('.swiper-slide:eq(0) .topbenefit p').html(member[0].text);
        $('.swiper-slide:eq(0) .benefit li:eq(0) dt').html(member[0].benefit1);
        $('.swiper-slide:eq(0) .benefit li:eq(0) dd:eq(0)').html(member[0].benefit1_1);
        $('.swiper-slide:eq(0) .benefit li:eq(0) dd:eq(1)').html(member[0].benefit1_2);

        function lodedPop() {
            let popcon = '';
            popcon += '<p>' + member[0].type + '</p>';
            popcon += '<p>' + member[0].text + '</p>';
            for (let a = 1; a <= 4; a++) {
                popcon += '<div>';
                popcon += '<ul>';
                popcon += '<li>' + member[0]['benefit' + a] + '</li>';
                popcon += '<li>';
                popcon += '<ul>';
                for (let b = 1; b <= 5; b++) {
                    if(member[0]['benefit' + a + '_' + b] !== undefined){
                        popcon += '<li>' + member[0]['benefit' + a + '_' + b] + '</li>';
                    }
                }
                popcon += '</ul>';
                popcon += '</li>';
                popcon += '</ul>';
                popcon += '</div>';
            }
            $('.popbenefitList').html(popcon).show();
        }
        lodedPop();

        swiper_tab.on('slideChange', function () {
            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(swiper_tab.activeIndex).addClass('active');

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .topbenefit p').html(member[swiper_tab.activeIndex].text);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dt').html(member[swiper_tab.activeIndex].benefit1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit1_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit1_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dt').html(member[swiper_tab.activeIndex].benefit2);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit2_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit2_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dt').html(member[swiper_tab.activeIndex].benefit3);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit3_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit3_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dt').html(member[swiper_tab.activeIndex].benefit4);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit4_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit4_2);

            function printPop() {
                let popcon = '';
                popcon += '<p>' + member[swiper_tab.activeIndex].type + '</p>';
                popcon += '<p>' + member[swiper_tab.activeIndex].text + '</p>';
                for (let a = 1; a <= 4; a++) {
                    popcon += '<div>';
                    popcon += '<ul>';
                    popcon += '<li>' + member[swiper_tab.activeIndex]['benefit' + a] + '</li>';
                    popcon += '<li>';
                    popcon += '<ul>';
                    for (let b = 1; b <= 5; b++) {
                        if(member[swiper_tab.activeIndex]['benefit' + a + '_' + b] !== undefined){
                            popcon += '<li>' + member[swiper_tab.activeIndex]['benefit' + a + '_' + b] + '</li>';
                        }
                    }
                    popcon += '</ul>';
                    popcon += '</li>';
                    popcon += '</ul>';
                    popcon += '</div>';
                }
                $('.popbenefitList').html(popcon).show();
            }
            printPop();
        });
        
        $(".tabs a").on('touchstart mousedown', function(e) {
            e.preventDefault();
            $(".tabs .active").removeClass('active');
            $(this).addClass('active');
        
            //swiper.swipeTo($(this).index());					
            swiper_tab.slideTo($(this).index());
            //console.log(swiper_tab.activeIndex);
            
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .topbenefit p').html(member[swiper_tab.activeIndex].text);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dt').html(member[swiper_tab.activeIndex].benefit1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit1_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(0) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit1_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dt').html(member[swiper_tab.activeIndex].benefit2);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit2_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(1) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit2_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dt').html(member[swiper_tab.activeIndex].benefit3);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit3_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(2) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit3_2);

            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dt').html(member[swiper_tab.activeIndex].benefit4);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dd:eq(0)').html(member[swiper_tab.activeIndex].benefit4_1);
            $('.swiper-slide:eq('+swiper_tab.activeIndex+') .benefit li:eq(3) dd:eq(1)').html(member[swiper_tab.activeIndex].benefit4_2);

            function printPop() {
                let popcon = '';
                popcon += '<p>' + member[swiper_tab.activeIndex].type + '</p>';
                popcon += '<p>' + member[swiper_tab.activeIndex].text + '</p>';
                for (let a = 1; a <= 4; a++) {
                    popcon += '<div>';
                    popcon += '<ul>';
                    popcon += '<li>' + member[swiper_tab.activeIndex]['benefit' + a] + '</li>';
                    popcon += '<li>';
                    popcon += '<ul>';
                    for (let b = 1; b <= 5; b++) {
                        if(member[swiper_tab.activeIndex]['benefit' + a + '_' + b] !== undefined){
                            popcon += '<li>' + member[swiper_tab.activeIndex]['benefit' + a + '_' + b] + '</li>';
                        }
                    }
                    popcon += '</ul>';
                    popcon += '</li>';
                    popcon += '</ul>';
                    popcon += '</div>';
                }
                $('.popbenefitList').html(popcon).show();
            }
            printPop();
        });
        


        
        
    }
});
//ajax end

// poppup click event
$('.content-slide > div > a').click(function(e){
    e.preventDefault();

    $('.back').fadeIn('fast');
    $('.popup').fadeIn('fast');
});

$('.back, .popup a').click(function(e){
    e.preventDefault();

    $('.back').fadeOut();
    $('.popup').fadeOut();
});


//coupon
$('.couponInfo a').toggle(function(){
    $(this).next().slideDown('fast');
    $(this).find('i').attr('class','fa-solid fa-angle-up');
},function(){
    $(this).next().slideUp('fast');
    $(this).find('i').attr('class','fa-solid fa-angle-down');
});