

$('.mapicon li').hover(function(){
    let i = $(this).index('.mapicon li');
    //console.log(i);

    $('.poolmap ul li').removeClass('focusmap focusother');
    $(this).addClass('focusmap');
    $(this).siblings().addClass('focusother');
    $(this).parent().next().find('li').addClass('focusother');
    $('.pin_info .icon1 li:eq('+i+')').addClass('focusmap');
    $('.pin_info .icon1 li:eq('+i+') p').css('font-weight',500).css('color','#B0744D');

},function(){
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon1 li').removeClass('focusmap');
    $('.pin_info .icon1 li p').css('font-weight',400).css('color','#333');
    $(this).parent().next().find('li').removeClass('focusother');
});

$('.mapicon2 li').hover(function(){
    let i = $(this).index('.mapicon2 li');
    //console.log(i);

    $('.poolmap ul li').removeClass('focusmap focusother');
    $(this).siblings().addClass('focusother');
    $(this).addClass('focusmap');
    $(this).parent().prev().find('li').addClass('focusother');
    $('.pin_info .icon2 li:eq('+i+')').addClass('focusmap');
    $('.pin_info .icon2 li:eq('+i+') p').css('font-weight',500).css('color','#B0744D');

},function(){
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon2 li').removeClass('focusmap');
    $('.pin_info .icon2 li p').css('font-weight',400).css('color','#333');
    $(this).parent().prev().find('li').removeClass('focusother');
});

// info 효과
$('.pin_info .icon1 li').hover(function(){
    let i = $(this).index('.pin_info .icon1 li');
    //console.log(i);
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon1 li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('p', this).css('font-weight',500).css('color','#B0744D');
    $('.mapicon li:eq('+i+')').addClass('focusmap');
    $('.mapicon li:eq('+i+')').siblings().addClass('focusother');
    $('.mapicon li:eq('+i+')').parent().next().find('li').addClass('focusother');

},function(){
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon1 li').removeClass('focusmap');
    $('.pin_info .icon1 li p').css('font-weight',400).css('color','#333');
    $('.mapicon li').removeClass('focusmap');
    $('.mapicon li:eq('+i+')').parent().next().find('li').removeClass('focusother');
});

$('.pin_info .icon2 li').hover(function(){
    let i = $(this).index('.pin_info .icon2 li');
    //console.log(i);
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon2 li').removeClass('focusmap');
    $(this).addClass('focusmap');
    $('p', this).css('font-weight',500).css('color','#B0744D');
    $('.mapicon li').addClass('focusother');
    $('.mapicon2 li:eq('+i+')').addClass('focusmap');
    $('.mapicon2 li:eq('+i+')').siblings().addClass('focusother');
    $('.mapicon2 li:eq('+i+')').parent().next().find('li').addClass('focusother');

},function(){
    $('.mapicon li').removeClass('focusother');
    $('.poolmap ul li').removeClass('focusmap focusother');
    $('.pin_info .icon2 li').removeClass('focusmap');
    $('.pin_info .icon2 li p').css('font-weight',400).css('color','#333');
    $('.mapicon2 li').removeClass('focusmap');
    $('.mapicon2 li').removeClass('focusmap');
    $('.mapicon2 li:eq('+i+')').parent().next().find('li').removeClass('focusother');
});


