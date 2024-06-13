$(document).ready(function(){
    $('.content_area .roomcontent').hide();
    $('.content_area .roomcontent:eq(0)').show();
    $('.tapmenu .tab1').addClass('tapnow');

    $('.tapmenu li').click(function(e){
        e.preventDefault();

        var i = $(this).index('.tapmenu li');
        console.log(i);

        $('.content_area .roomcontent').hide();
        $('.content_area .roomcontent:eq(' + i + ')').show();
        $('.tapmenu li').removeClass('tapnow');
        $(this).addClass('tapnow');
    });

});