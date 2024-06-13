$(document).ready(function(){


// 1-3 js
$('.bus_btn').click(function(){
    $('.modal_box').fadeIn('fast');
    $('.popup').animate({'bottom':'0px'}).clearQueue();
});

$('.modal_box, .close_btn').click(function(){
    $('.modal_box').fadeOut('fast');
    $('.popup').animate({'bottom':'-100%'}).clearQueue();
});













});
//랩퍼 끝