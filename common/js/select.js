$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.family .arrow').toggle(function(){
         
 	
		$('.family .aList').fadeIn('slow');	
		$(this).addClass('itrun');
	},function(){
        $('.family .aList').fadeOut('fast');	
		$(this).removeClass('itrun');
        // $(this).addClass('itrun_down');
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
       });

        //move_top
        $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        
        
        //$('.text').text(scroll);

        if(scroll>300){ //300이상의 거리가 발생되면
            $('.move_top').fadeIn('slow');  //top보여라~~~~
        }else{
            $('.move_top').fadeOut('fast');//top안보여라~~~~
        }
    });

    $('.move_top').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},500); 
        //해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드
    });
 
});


// 탭메뉴
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