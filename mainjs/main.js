$(document).ready(function(){

// 스크롤이벤트
$(window).on('scroll', function(){
    let scroll = $(window).scrollTop();
    console.log(scroll);

    //스페셜오퍼
    if(scroll > 649){
        $('.sec_offer h3').animate({'opacity':1, 'top':'0px'},500);
        $('.sec_offer p').delay(200).animate({'opacity':1, 'top':'0px'},500);
        $('.offer_content').delay(300).animate({'opacity':1, 'top':'0px'},500);
    }
    // 객실
    if(scroll > 1579){
        $('.sec_room h3').animate({'opacity':1, 'left':'0px'},500);
        $('.room_container p').delay(200).css('opacity','1').animate({'left':0},500);
        $('.room_menu').delay(600).animate({'opacity':1, 'top':'390px'},1000);
        $('.room_bottom').delay(600).animate({'opacity':1, 'top':'0px'},1000);
    }
    //편의시설
    if(scroll > 2729){
        $('.fac_container h3').animate({'opacity':1, 'top':'0px'},500);
        $('.fac_container > p').delay(300).animate({'opacity':1, 'top':'0px'},500);
        $('.fac_container ul').delay(400).animate({'opacity':1, 'top':'0px'},1000);
    }
    //다이닝
    if(scroll > 3865){
        $('.dining_container h3').animate({'opacity':1, 'top':'0px'},500);
        $('.dining_container p').delay(200).animate({'opacity':1, 'top':'0px'},500);
    }
    if(scroll > 4198){
        $('.d_break img').animate({'opacity':1, 'left':'0px'},600);
        $('.d_res img').animate({'opacity':1, 'left':'0px'},600);
        $('.d_break div').animate({'opacity':1, 'top':'0px'},1000);
        $('.d_res div').animate({'opacity':1, 'top':'0px'},1000);
    }
    if(scroll > 4780){
        $('.d_bar img').css('opacity','1').animate({'left':0},600);
        $('.d_deli img').css('opacity','1').animate({'left':0},600);
        $('.d_bar div').animate({'opacity':1, 'top':'0px'},1000);
        $('.d_deli div').animate({'opacity':1, 'top':'0px'},1000);
    }
    //멤버십
    if(scroll > 5787){
        $('.mem_container h3').animate({'opacity':1, 'left':'0px'},1000);
        $('.mem_container p').delay(300).animate({'opacity':1, 'left':'0px'},1000);
        $('.card ul li:first-child').delay(200).animate({'opacity':1, 'top':'0px'},500);
        $('.card ul li:nth-of-type(2)').delay(400).animate({'opacity':1, 'top':'0px'},500);
        $('.card ul li:nth-of-type(3)').delay(600).animate({'opacity':1, 'top':'0px'},500);
        $('.card ul li:nth-of-type(4)').delay(800).animate({'opacity':1, 'top':'0px'},500);
    }

});

//예약하기 버튼
$('.reservation').css('left','150%').css('opacity','0px');
$('.reservation_btn').toggle(function(){
    $('.reservation').animate({'opacity':'1px','left':'50%'},700).clearQueue();
    $('.rbtn_back').animate({'width':'100%'},700).clearQueue();
},function(){
    $('.reservation').animate({'opacity':'0px','left':'150%'},700).clearQueue();
    $('.rbtn_back').animate({'width':'0'},700).clearQueue();
})

//1. 스페셜 오퍼
let offertxt = [
    {
        name: '네스트웨딩',
        txt: '평생 잊을 수 없는 당신만의 웨딩 프로모션',
        date: '2024년 계약 고객',
        package1: '웨딩 후 객실 숙박권 제공',
        package2: '식대 10% 할인',
        package3: '하객 셔틀버스 운행 등',
    },
    {
        name: '브런치 플래터',
        txt: '다채로운 향으로 리뉴얼된 브런치 한 상',
        date: '2024. 07. 15 - 2024. 11. 30',
        package1: '에그 인 헬 제공',
        package2: '아메리칸 블랙퍼스트',
        package3: '음료 2잔'
    },
    {
        name: '오롯이, 오늘',
        txt: '향의 본질을 통해 오롯이 나에게 집중하는 시간',
        date: '2024. 01. 30 - 2024. 08. 31',
        package1: '객실 1박',
        package2: 'KUNST 브런치 플래터 (2인)',
        package3: '로우바이브 바디케어 세트'
    },
    {
        name: '프리미엄 케이크 예약',
        txt: '네스트의 케이크를 사전예약으로 만나보세요',
        date: '2023. 12. 29 - 2024. 11. 30',
        package1: '오레오 치즈케이크',
        package2: '신선한 초코 생크림 케이크',
        package3: '계절과일 케이크 등'
    },
    {
        name: '에프터 눈 티 세트',
        txt: '달콤한 디저트로 가득 채워진 에프터 눈 티',
        date: '2024. 08. 01 - 2024. 10. 31',
        package1: '디저트 9종',
        package2: '음료 2잔',
        package3: '* 머랭빙수 추가 가능'
    }
]

let i = 2;

$('.offertxt ul').css('opacity',0);
$('.offer_content .backbox').hide();
$('.offertxt dl dt').html(offertxt[2].name);
$('.offertxt dl dd:eq(0)').html(offertxt[2].txt);
$('.offertxt dl dd:eq(1)').html(offertxt[2].date);
$('.offertxt ul .pack1').html(offertxt[2].package1);
$('.offertxt ul .pack2').html(offertxt[2].package2);
$('.offertxt ul .pack3').html(offertxt[2].package3);

$('.offertxt ul').css('opacity',1);
$('.offer_content .backbox').fadeIn(500);

$('.offer_content .offer_pre').click(function(){
    i--;
    if(i==-1){
        i=4;
    }
    $('.offertxt ul').css('opacity',0);
    $('.offer_content .backbox').hide();
    $('.offertxt dl dt').html(offertxt[i].name);
    $('.offertxt dl dd:eq(0)').html(offertxt[i].txt);
    $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
    $('.offertxt ul .pack1').html(offertxt[i].package1);
    $('.offertxt ul .pack2').html(offertxt[i].package2);
    $('.offertxt ul .pack3').html(offertxt[i].package3);
    $('.offertxt ul').css('opacity',1);
    $('.offer_content .backbox').fadeIn(1000);

});

$('.offer_content .offer_next').click(function(){
    i++;
    if(i==5){
        i=0;
    }
    $('.offertxt ul').css('opacity',0);
    $('.offer_content .backbox').hide();
    $('.offertxt dl dt').html(offertxt[i].name);
    $('.offertxt dl dd:eq(0)').html(offertxt[i].txt);
    $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
    $('.offertxt ul .pack1').html(offertxt[i].package1);
    $('.offertxt ul .pack2').html(offertxt[i].package2);
    $('.offertxt ul .pack3').html(offertxt[i].package3);
    $('.offertxt ul').css('opacity',1);
    $('.offer_content .backbox').fadeIn(1000);

});
var startX, endX;
    
$('.swiper-container').on('touchstart mousedown',function(e){

e.preventDefault();
    
startX=e.pageX || e.originalEvent.touches[0].pageX;
    
//$('body').append(startX + '<br>');
    
});
    
    
$('.swiper-container').on('touchend mouseup',function(e){
    
e.preventDefault();
    
endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
        
//$('body').append(endX + '<br>');
    
    
    
if(startX<endX) {  
    //$('body').append(' 오른쪽으로 터치드래그' + '<br>');
    i--;
    if(i==-1){
        i=4;
    }
    $('.offertxt ul').css('opacity',0);
    $('.offer_content .backbox').hide();
    $('.offertxt dl dt').html(offertxt[i].name);
    $('.offertxt dl dd:eq(0)').html(offertxt[i].txt);
    $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
    $('.offertxt ul .pack1').html(offertxt[i].package1);
    $('.offertxt ul .pack2').html(offertxt[i].package2);
    $('.offertxt ul .pack3').html(offertxt[i].package3);
    $('.offertxt ul').css('opacity',1);
    $('.offer_content .backbox').fadeIn(1000);
    
}else{      
    //$('body').append(' 왼쪽로 터치드래그' + '<br>');
    i++;
    if(i==5){
        i=0;
    }
    $('.offertxt ul').css('opacity',0);
    $('.offer_content .backbox').hide();
    $('.offertxt dl dt').html(offertxt[i].name);
    $('.offertxt dl dd:eq(0)').html(offertxt[i].txt);
    $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
    $('.offertxt ul .pack1').html(offertxt[i].package1);
    $('.offertxt ul .pack2').html(offertxt[i].package2);
    $('.offertxt ul .pack3').html(offertxt[i].package3);
    $('.offertxt ul').css('opacity',1);
    $('.offer_content .backbox').fadeIn(1000);
}
    

    
    
});


//섹션3. 편의시설
let origin = 70;
let max_height = 420;

$('.fac_container ul li:first').stop().animate({height: max_height}, 700);
//$('.fac_container ul li:first img').css('filter','grayscale(0)');
$('.fac_container ul li:first .rtxtbox').css('top', '130px').css('height','240px');
$('.fac_container ul li:first h4').css('font-size', '2.22rem');
$('.fac_container ul li:first p').css({'opacity': '1', 'transition': 'all 0.5s', 'transition-delay': '.3s'});
$('.fac_container ul li:first .view_box').css('opacity', '1');
$('.fac_container ul li:first .outline').css('opacity', '1');

$('.fac_container ul').hover(function(){
    
    $('.fac_container ul li').hover(function(){
        $('.fac_container ul li').stop().animate({height: origin},700,'easeInOutQuad')
        //$('.fac_container ul li:first img').css('filter','grayscale(0)');
        $('.fac_container ul li .rtxtbox').css('height','50px').css('top','20px');
        $('.fac_container ul li h4').css('font-size','1.39rem');
        $('.fac_container ul li p').css({'opacity':'0','transition':'none'});
        $('.fac_container ul li .view_box').css('opacity','0');
        $('.fac_container ul li .outline').css('opacity','0');
        
        $(this).stop().animate({height: max_height},700,'easeInOutQuad')
        $(this).find('.rtxtbox').css({'top':'130px','height':'240px'});
        //$(this).find('img').css('filter','grayscale(100%)');
        $(this).find('h4').css('font-size','2.22rem');
        $(this).find('p').css({'opacity':'1','transition':'all 0.5s','transition-delay':'.3s'});
        $(this).find('.view_box').css('opacity','1');
        $(this).find('.outline').css('opacity','1');
    },function(){
        $('.fac_container ul li').stop().animate({height: origin},700,'easeInOutQuad')
        $(this).find('img').css('filter','grayscale(0');
        $(this).find('.rtxtbox').css({'top':'20px','height':'50px'});
        $(this).find('h4').css('font-size','1.39rem');
        $(this).find('p').css({'opacity':'0','transition':'none'});
        $(this).find('.view_box').css('opacity','0');
        $(this).find('.outline').css('opacity','0');
    
    });

},function(){
    $('.fac_container ul li:first').stop().animate({height: max_height}, 700,'easeInOutQuad');
    $('.fac_container ul li:first .rtxtbox').css('top', '130px').css('height','240px');
    $('.fac_container ul li:first h4').css('font-size', '2.22rem');
    $('.fac_container ul li:first p').css({'opacity': '1', 'transition': 'all 0.5s', 'transition-delay': '.3s'});
    $('.fac_container ul li:first .view_box').css('opacity', '1');
    $('.fac_container ul li:first .outline').css('opacity', '1');

});










//섹션2. 객실
// let roominfo = [
//     {
//         roomtype:'스탠다드 트윈', 
//         roomp:'유리창을 통해 서해의 풍광이 시원하게 펼쳐지고 객실 깊숙이까지 쏟아지는햇살과  작은 테라스는 마치 정원이 있는 집에 온 듯한 느낌을 주며 좀 더 가까이에서 자연과 함께 하실 수 있습니다.',
//         link:'./sub2/sub2_1.html',
//         imgsrc:'sec_room1.jpg'
//     },
//     {
//         roomtype:'스탠다드 더블', 
//         roomp:'전면 유리창을 통해 서해의 풍광이 시원하게 펼쳐지고 비스듬한 사선 창호로 객실 깊숙이까지 햇살이 쏟아집니다.',
//         link:'./sub2/sub2_1.html',
//         imgsrc:'sec_room2.jpg'
//     },
//     {
//         roomtype:'디럭스', 
//         roomp:'네스트의 컨셉을 극대화하는 독특한 구조로 디자인되었습니다. 전면 유리창과 마주 보게 침대를 배치하여 분리된 공간에서 자연을 더 가깝게 느낄 수 있습니다.더블베드에서 편안하게 누워 서해의 노을을 조망할 수 있습니다.',
//         link:'./sub2/sub2_2.html',
//         imgsrc:'sec_room3.jpg'
//     },
//     {
//         roomtype:'스튜디오 스위트', 
//         roomp:'스튜디오 스위트는 아름다운 전망을 자랑합니다. 콘크리트와 우드로 마감된 인테리어가 독특하고, 넓은 거실과 욕실은 집처럼 편안합니다. 오리지널 디자인 가구와 직접 디자인한 베스로브 등 프리미엄 어메니티들로 당신의 만족감이 극대화될 것입니다.',
//         link:'./sub2/sub2_3.html',
//         imgsrc:'sec_room4.jpg'
//     }
//     ]
    
//     //객체배열 버전
//         $('.room_container .room_menu li').removeClass('now');
//         $('.room_container .room_menu li h4').css('color','#999')
//         $('.room_container .room_menu li span').css('width','0');
//         $('.room_container .room_menu li:first h4').css('color','#462b0e');
//         $('.room_container .room_menu li:first span').css('width','100%');
//         $('.room_container .room_menu li:first').addClass('now');

//         $('.room_bottom ul dl dt').html(roominfo[0].roomtype);
//         $('.room_bottom ul dl dd:first').html(roominfo[0].roomp);
//         $('.room_bottom ul li dl dt').css({'top':'0px','opacity':'1'});
//         $('.room_bottom ul li dl dd:first').css({'top':'0px','opacity':'1'});
//         $('.room_bottom ul dl dd a').attr('href',roominfo[0].link);
//         $('.room_bottom ul .room_img img').attr('src','./mainimages/'+roominfo[0].imgsrc);

//         $('.room_menu li').click(function(e){
//             e.preventDefault();

//             let i = $(this).index('.room_menu li');
//             //console.log(i);
//             let rbox = $('.room_bottom ul li');

//             $('.room_bottom ul li dt').css({'top':'10px','opacity':'0'});
//             $('.room_bottom ul li dd:first').css({'top':'10px','opacity':'0'});

//             $('.room_bottom ul li dl dt').animate({'top':'0px','opacity':'1'},500).clearQueue();
//             $('.room_bottom ul li dl dd:first').animate({'top':'0px','opacity':'1'},500).clearQueue();

//             $('.room_bottom ul li dl dt').html(roominfo[i].roomtype);
//             $('.room_bottom ul li dd:first').html(roominfo[i].roomp);
//             $('.room_bottom ul li dd a').attr('href',roominfo[i].link);
//             $('.room_bottom ul li .room_img img').attr('src','./mainimages/'+roominfo[i].imgsrc);

//             $('.room_bottom ul .room_img img').hide().fadeIn('slow');

//             $('.room_container .room_menu li h4').css('color','#999')
//             $('.room_container .room_menu li span').css('width','0');
//             $('.room_container .room_menu li').removeClass('now');

//             $('h4',this).css('color','#462b0e');
//             $('span',this).css('width','100%');

//             $(this).addClass('now');


//         });

//             $('.room_menu li').hover(function(){
//         if($(this).hasClass('now')){
//             $(this).find('h4').css('color','#462b0e');
//             $(this).find('span').css('width','100%');
//         }else{
//             $(this).find('h4').css('color','#999');
//             $(this).find('span').css('width','100%');
//         }
//     },function(){
//         if($(this).hasClass('now')){
//             $(this).find('h4').css('color','#462b0e');
//             $(this).find('span').css('width','100%');
//         }else{
//             $(this).find('h4').css('color','#999');
//             $(this).find('span').css('width','0');
//         }
//     });

    //-----------------------------
    //json 버전
    $.ajax({
        url : './data/roominfo.json',
        dataType : 'json',
        success : function(data){
    
            let rcontent = data.roominfo;
            let txt = '';

            $('.room_container .room_menu li').removeClass('now');
            $('.room_container .room_menu li h4').css('color','#999')
            $('.room_container .room_menu li span').css('width','0');
            $('.room_container .room_menu li:first h4').css('color','#462b0e');
            $('.room_container .room_menu li:first span').css('width','100%');
            $('.room_container .room_menu li:first').addClass('now');

            txt = '';
            txt += '<ul>';
            txt += '<li class="r_twin">';
            txt += '<dl>';
            txt += '<dt>'+rcontent[0].roomtype+'</dt>';
            txt += '<dd>'+rcontent[0].roomp+'</dd>';
            txt += '<dd class="view_par"><a class="view_m" href="'+rcontent[0].link+'">view more</a></dd>';
            txt += '</dl>';
            txt += '<div class="room_img">';
            txt += '<img src="./mainimages/'+rcontent[0].imgsrc+'" alt="">';
            txt += '</div>';
            txt += '</li>';
            txt += '</ul>';

            $('.room_bottom').html(txt);
            $('.room_bottom ul li dl dt').css({'top':'0px','opacity':'1'});
            $('.room_bottom ul li dl dd:first').css({'top':'0px','opacity':'1'});


            $('.room_menu li').click(function(e){
                e.preventDefault();

                let i = $(this).index('.room_menu li');
                console.log(i);

                txt = '';
                txt += '<ul>';
                txt += '<li class="r_twin">';
                txt += '<dl>';
                txt += '<dt>' + rcontent[i].roomtype + '</dt>';
                txt += '<dd>' + rcontent[i].roomp + '</dd>';
                txt += '<dd class="view_par"><a href="' + rcontent[i].link + '" class="view_m">view more</a></dd>';
                txt += '</dl>';
                txt += '<div class="room_img">';
                txt += '<img src="./mainimages/' + rcontent[i].imgsrc + '" alt="">';
                txt += '</div>';
                txt += '</li>';
                txt += '</ul>';

                $('.room_container .room_menu li h4').css('color','#999')
                $('.room_container .room_menu li span').css('width','0');
                $('.room_container .room_menu li').removeClass('now');

                $('h4',this).css('color','#462b0e');
                $('span',this).css('width','100%');

                $('.room_bottom ul .room_img img').hide().fadeIn('slow');
                $(this).addClass('now');

                $('.room_bottom').html(txt);
                $('.room_bottom ul li dt').css({'top':'10px','opacity':'0'});
                $('.room_bottom ul li dd:first').css({'top':'10px','opacity':'0'});
                $('.room_bottom ul li dl dt').animate({'top':'0px','opacity':'1'},500).clearQueue();
                $('.room_bottom ul li dl dd:first').animate({'top':'0px','opacity':'1'},500).clearQueue();
            });

            $('.room_menu li').hover(function(){
                if($(this).hasClass('now')){
                    $(this).find('h4').css('color','#462b0e');
                    $(this).find('span').css('width','100%');
                }else{
                    $(this).find('h4').css('color','#999');
                    $(this).find('span').css('width','100%');
                }
            },function(){
                if($(this).hasClass('now')){
                    $(this).find('h4').css('color','#462b0e');
                    $(this).find('span').css('width','100%');
                }else{
                    $(this).find('h4').css('color','#999');
                    $(this).find('span').css('width','0');
                }
            });
        }
    });
    // ajax 끝


        






















});
//jquery end








