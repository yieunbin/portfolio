$(document).ready(function(){
    $('.busbtn').click(function(e){
        e.preventDefault();

        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');
    });
    $('.modal_box, .popup img').click(function(e){
        e.preventDefault();

        $('.modal_box').fadeOut('fast');
        $('.popup').fadeOut('fast');
    });













});
//스크립트 끝