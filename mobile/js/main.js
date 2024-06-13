$(document).ready(function(){

    //비주얼 예약창
    // $('.date_search').css({'bottom':'-300px','opacity':'0px'});
    $('.r_btn').toggle(function(){
        $('.date_search').animate({'bottom':'0px','opacity':'1'},500);
        $(this).html('닫기');
    },function(){
        $('.date_search').animate({'bottom':'-300px','opacity':'0'},500);
        $(this).html('예약하기');
    });
    

    // 스페셜오퍼
    let offertxt = [
        {
            name: '네스트웨딩',
            txt: '평생 잊을 수 없는 당신만의 웨딩 프로모션',
            date: '2024년 계약 고객',
            package1: '객실 숙박권 + 식대할인 + 셔틀버스',
            package2: '식대 10% 할인',
            package3: '하객 셔틀버스 운행 등',
        },
        {
            name: '브런치 플래터',
            txt: '다채로운 향으로 리뉴얼된 브런치 한 상',
            date: '2024. 07. 15 - 2024. 11. 30',
            package1: '에그 인 헬 + 조식 + 음료2잔',
            package2: '아메리칸 블랙퍼스트',
            package3: '음료 2잔'
        },
        {
            name: '오롯이, 오늘',
            txt: '향의 본질을 통해 오롯이 나에게 집중하는 시간',
            date: '2024. 01. 30 - 2024. 08. 31',
            package1: '객실 1박 + 2인 브런치 + 바디케어세트',
            package2: 'KUNST 브런치 플래터 (2인)',
            package3: '로우바이브 바디케어 세트'
        },
        {
            name: '프리미엄 케이크 예약',
            txt: '네스트의 케이크를 사전예약으로 만나보세요',
            date: '2023. 12. 29 - 2024. 11. 30',
            package1: '오레오 치즈 / 생크림 / 계절과일 케이크',
            package2: '신선한 초코 생크림 케이크',
            package3: '계절과일 케이크 등'
        },
        {
            name: '에프터 눈 티 세트',
            txt: '달콤한 디저트로 가득 채워진 에프터 눈 티',
            date: '2024. 08. 01 - 2024. 10. 31',
            package1: '디저트 9종 + 음료 2잔 + 머랭빙수',
            package2: '음료 2잔',
            package3: '* 머랭빙수 추가 가능'
        }
    ]

    let i = 2;
    var startX, endX;
    
    $('.offertxt dl dt').html(offertxt[2].name);
    $('.offertxt dl dd:eq(0)').html(offertxt[2].package1);
    $('.offertxt dl dd:eq(1)').html(offertxt[2].date);
    
    $('.swiper2').on('touchstart mousedown',function(e){
    
        e.preventDefault();
        startX=e.pageX || e.originalEvent.touches[0].pageX;
    });
        
        
    $('.swiper2').on('touchend mouseup',function(e){
        
        e.preventDefault();
        endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
                
        if(startX<endX) {  
            i--;
            if(i==-1){
                i=4;
            }
            $('.offertxt dl dt').html(offertxt[i].name);
            $('.offertxt dl dd:eq(0)').html(offertxt[i].package1);
            $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
            
        }else{      
            i++;
        if(i==5){
            i=0;
        }
        $('.offertxt dl dt').html(offertxt[i].name);
        $('.offertxt dl dd:eq(0)').html(offertxt[i].package1);
        $('.offertxt dl dd:eq(1)').html(offertxt[i].date);
        }
    });

    // 객실
    let roomtxt = [
        '유리창을 통해 서해의 풍광이 시원하게 펼쳐지고 객실 깊숙이까지 쏟아지는햇살과 작은 테라스는 마치 정원이 있는 집에 온 듯한 느낌을 주며 좀 더 가까이에서 자연과 함께 하실 수 있습니다.',
        '전면 유리창을 통해 고즈넉한 바깥 풍광과 더불어 서해의 노을을 감상하실 수 있으며 비스듬한 사선 창호로 객실 깊숙이까지 햇살이 쏟아집니다.',
        '디럭스 트윈 마운틴 뷰 룸은 네스트의 컨셉을 극대화하는 독특한 구조로 디자인되었습니다. 전면 유리창과 마주 보게 침대를 배치하여 분리된 공간에서 자연을 더 가깝게 느낄 수 있습니다.',
        '스튜디오 스위트는 아름다운 전망을 자랑합니다. 콘크리트와 우드로 마감된 인테리어가 독특하고, 넓은 거실과 욕실은 집처럼 편안합니다. '
    ]
    $('.room_typeList li').css({'border-bottom':'none'});
    $('.room_typeList li a').css({'color':'#333','font-weight':'400'});
    $('.room_typeList li:eq(0)').css({'border-bottom':'1px solid #B0744D'});
    $('.room_typeList li:eq(0) a').css({'color':'#B0744D','font-weight':'500'});

    $('.room_typeList li').click(function(e){
        e.preventDefault();

        let i = $(this).index('.room_typeList li');
        $('.con_room img').fadeOut('fast');
        //console.log(i);

        $('.room_typeList li').css({'border-bottom':'none'});
        $('.room_typeList li a').css({'color':'#333','font-weight':'400'});
        $(this).css({'border-bottom':'1px solid #B0744D'});
        $('a',this).css({'color':'#B0744D','font-weight':'500'});
        $('.con_room img').attr('src','./images/room'+(i+1)+'.jpg');
        $('.con_room img').fadeIn('slow');
        $('.con_room div div p').html(roomtxt[i]);

    });

    //편의시설
    let facinfo = [
        {
            name:'FLATZ',
            txt: '엄선된 다양한 메뉴의 올데이 다이닝',
            link: './sub3_1.html',
            src:'./images/fac1.jpg'
        },
        {
            name:'NEST DELI',
            txt: '매일 아침 구워낸 신선한 빵',
            link: './sub3_2.html',
            src:'./images/fac2.jpg'
        },
        {
            name:'INFINITY FOOL',
            txt: '사계절 스파 수영장',
            link: './sub3_3.html',
            src:'./images/fac3.jpg'
        },
        {
            name:'WEDDING',
            txt: '여유가 흐르는 당신만의 웨딩',
            link: './sub3_4.html',
            src: './images/fac4.jpg'
        },
    ]

    $('.con_fac ul li').css({'border':'none'});
    $('.con_fac ul li a').css({'color':'#333','font-weight':'400'});
    $('.con_fac ul li:eq(0)').css('border','1px solid #B0744D');
    $('.con_fac ul li:eq(0) a').css({'color':'#B0744D','font-weight':'500'});

    $('.con_fac ul li').click(function(e){
        e.preventDefault();

        let ind = $(this).index();
        //console. log(ind);

        $('.con_fac ul li').css({'border':'none'});
        $('.con_fac ul li a').css({'color':'#333','font-weight':'400'});

        $(this).css({'border':'1px solid #B0744D'});
        $('a',this).css({'color':'#B0744D','font-weight':'500'});
        $('.fac_imgbox img').attr('src', facinfo[ind].src);
        $('.fac_imgbox div p:eq(0)').html(facinfo[ind].name);
        $('.fac_imgbox div p:eq(1)').html(facinfo[ind].txt);
        $('.fac_imgbox div a').attr('href', facinfo[ind].link);
        //console.log(facinfo[ind].link)
    });

//     let fa_startX, fa_endX;
// let a = 0;

// $('.fac_imgbox').on('touchstart mousedown', function(e) {
//     e.preventDefault();
//     fa_startX = e.pageX || e.originalEvent.touches[0].pageX;
// });


// $('.fac_imgbox').on('touchend mouseup', function(e) {
//     e.preventDefault();
//     fa_endX = e.pageX || e.originalEvent.changedTouches[0].pageX;

//     if (fa_startX < fa_endX) {
//         a--;
//         if (a == -1) {
//             a = 3;
//         }
//     } else {
//         a++;
//         if (a == 4) {
//             a = 0;
//         }
//     }

//     $('.con_fac ul li').css({ 'border': 'none' });
//     $('.con_fac ul li a').css({ 'color': '#333', 'font-weight': '400' });

//     $('.con_fac ul li:eq(' + a + ')').css({ 'border': '1px solid #B0744D' });
//     $('.con_fac ul li:eq(' + a + ') a').css({ 'color': '#B0744D', 'font-weight': '500' });
//     $('img',this).attr('src', facinfo[a].src);
//     $('p:eq(0)',this).html(facinfo[a].name);
//     $('p:eq(1)',this).html(facinfo[a].txt);
//     $(this).find('a').attr('href', facinfo[a].link);

// });


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
        //alert('왜안됨');
        let member = data.memship;

        $('.swiper_tab .swiper-slide:eq(0) .topbenefit p').html(member[0].text);
        $('.swiper_tab .swiper-slide:eq(0) .benefit li:eq(0) dt').html(member[0].benefit1);
        $('.swiper_tab .swiper-slide:eq(0) .benefit li:eq(0) dd:eq(0)').html(member[0].benefit1_1);
        $('.swiper-slide:eq(0) .benefit li:eq(0) dd:eq(1)').html(member[0].benefit1_2);

        swiper_tab.on('slideChange', function () {
            let active = swiper_tab.activeIndex;

            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(active).addClass('active');

            $('.swiper_tab .swiper-slide:eq('+active+') .topbenefit p').html(member[active].text);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(0) dt').html(member[active].benefit1);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(0) dd:eq(0)').html(member[active].benefit1_1);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(0) dd:eq(1)').html(member[active].benefit1_2);

            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(1) dt').html(member[active].benefit2);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(1) dd:eq(0)').html(member[active].benefit2_1);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(1) dd:eq(1)').html(member[active].benefit2_2);

            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(2) dt').html(member[active].benefit3);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(2) dd:eq(0)').html(member[active].benefit3_1);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(2) dd:eq(1)').html(member[active].benefit3_2);

            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(3) dt').html(member[active].benefit4);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(3) dd:eq(0)').html(member[active].benefit4_1);
            $('.swiper_tab .swiper-slide:eq('+active+') .benefit li:eq(3) dd:eq(1)').html(member[active].benefit4_2);

        
        });
        
        $(".tabs a").on('touchstart mousedown', function(e) {
            e.preventDefault();
            $(".tabs .active").removeClass('active');
            $(this).addClass('active');
        
            //swiper.swipeTo($(this).index());					
            swiper_tab.slideTo($(this).index());
            console.log(swiper_tab.activeIndex);
            
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
        });
        
        
    }
});
//ajax end














});
// 랩퍼끝