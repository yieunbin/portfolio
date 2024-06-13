

$('.mapicon li').hover(function(){
    let i = $(this).index('.mapicon li');
    //console.log(i);

    $('.poolmap ul li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('.pin_info .icon1 li:eq('+i+')').addClass('focusmap');
    $('.pin_info .icon1 li:eq('+i+') p').css('font-weight',500).css('color','#B0744D');

},function(){
    $('.poolmap ul li').removeClass('focusmap');
    $('.pin_info .icon1 li').removeClass('focusmap');
    $('.pin_info .icon1 li p').css('font-weight',400).css('color','#333');
});

$('.mapicon2 li').hover(function(){
    let i = $(this).index('.mapicon2 li');
    //console.log(i);

    $('.poolmap ul li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('.pin_info .icon2 li:eq('+i+')').addClass('focusmap');
    $('.pin_info .icon2 li:eq('+i+') p').css('font-weight',500).css('color','#B0744D');

},function(){
    $('.poolmap ul li').removeClass('focusmap');
    $('.pin_info .icon2 li').removeClass('focusmap');
    $('.pin_info .icon2 li p').css('font-weight',400).css('color','#333');
});

// info 효과
$('.pin_info .icon1 li').hover(function(){
    let i = $(this).index('.pin_info .icon1 li');
    //console.log(i);

    $('.pin_info .icon1 li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('p', this).css('font-weight',500).css('color','#B0744D');
    $('.mapicon li:eq('+i+')').addClass('focusmap');

},function(){
    $('.pin_info .icon1 li').removeClass('focusmap');
    $('.pin_info .icon1 li p').css('font-weight',400).css('color','#333');
    $('.mapicon li').removeClass('focusmap');
});

$('.pin_info .icon2 li').hover(function(){
    let i = $(this).index('.pin_info .icon2 li');
    //console.log(i);

    $('.pin_info .icon2 li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('p', this).css('font-weight',500).css('color','#B0744D');
    $('.mapicon2 li:eq('+i+')').addClass('focusmap');

},function(){
    $('.pin_info .icon2 li').removeClass('focusmap');
    $('.pin_info .icon2 li p').css('font-weight',400).css('color','#333');
    $('.mapicon2 li').removeClass('focusmap');
});


