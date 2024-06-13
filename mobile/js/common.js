$(document).ready(function(){
    //탑버튼
    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
        //console.log(scroll);

        if(scroll>300){ 
            $('.move_top').fadeIn('slow');
            $('#headerArea').css('background','rgb(126, 105, 86)');
        }else{
            $('.move_top').fadeOut('fast');
            $('#headerArea').css('background','none');
        }

        // if(scroll>700){
        //     $('#headerArea').css('background','rgb(126, 105, 86)');
        // }else{
        //     $('#headerArea').css('background','none');
        // }
    });

    let move_top = document.getElementById('move_top');

    move_top.onclick = function(e){
        e.preventDefault();

        window.scroll({
            top:0,
            behavior:'smooth'
        });
    }

    // sub menu
    $('.sub_menu > a').toggle(function(){
        $('.sub_menu .aList').slideDown('fast');
        $('i',this).attr('class','fa-solid fa-chevron-up');
    },function(){
        $('.sub_menu .aList').slideUp('fast');
        $('i',this).attr('class','fa-solid fa-chevron-down');
    });





});