$(document).ready(function(){
    $('.tabmenu li').removeClass('tabnow');
    $('.tabmenu li:eq(0)').addClass('tabnow');

    $('.tabcontent').hide();
    $('.tabcontent:eq(0)').show();

    $('.tabmenu li').click(function(e){
        e.preventDefault();

        let i = $(this).index();
        //console.log(i);
        $('.tabmenu li').removeClass('tabnow');
        $(this).addClass('tabnow');

        $('.tabcontent').hide();
        $('.tabcontent:eq('+i+')').show();

    });




});
//랩퍼 끝