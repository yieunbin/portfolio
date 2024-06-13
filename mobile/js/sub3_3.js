$(document).ready(function(){

    let poolbox = '';
    let poollist1 = ['인피니티 풀','코지 풀','스파 풀','키즈&파티 풀','핀란드 사우나','루프트 더 바','락커 및 샤워 룸','화장실','실외 샤워 스톨'];
    let poollist2 = ['리셉션','커플,스위트 카바나 등','파이어 가든'];

    function pointlist(){
        poolbox = '';

        poolbox += '<ul><li><ul>';
        for (let charCode = 97; charCode <= 105; charCode++) {
            const letter1 = String.fromCharCode(charCode);
            //console.log(letter);
            
            poolbox += '<li>';
            poolbox += '<span>'
            poolbox += letter1;
            poolbox += '</span>';
            poolbox += '<p>';
            poolbox += poollist1[charCode - 97];
            poolbox += '</p>';
            poolbox += '</li>';
            
        }
        poolbox += '</ul></li>';
        poolbox += '<li><ul>';

        for (let charCode = 106; charCode <= 108; charCode++){
            const letter2 = String.fromCharCode(charCode);
            
            poolbox += '<li>';
            poolbox += '<span>'
            poolbox += letter2;
            poolbox += '</span>';
            poolbox += '<p>';
            poolbox += poollist2[charCode - 106];
            poolbox += '</p>';
            poolbox += '</li>';
        }
        poolbox += '</ul></li>';
        poolbox += '</ul>';
    };
    pointlist();
    $('.poolpoint').html(poolbox);


    // cabana
    let addfac = [
        {text:'사랑하는 사람과 편안하게 여유를 즐길 수 있는 독립형 휴식 공간입니다. 다양한 스타일의 네스트 카바나에서 프라이빗한 휴식을 만끽하세요.',
        time:'시즌 별 상이 (운영 및 요금 안내 참고)',
        tel:'032 - 743 - 9054',
        img:'./images/sub3/content3/addimg1.jpg'},
        {text:'핀란드 사우나는 따뜻하게 체온을 유지할 수 있는 공간으로 물놀이 중 잠시 편안하고 안락한 휴식을 누리실 수 있습니다.',
        time:'월 - 금 : 14:00 - 22:00<br>토 - 일 / 공휴일 : 09:00 - 22:00',
        tel:'032 - 743 - 9054',
        img:'./images/sub3/content3/addimg2.jpg'},
        {text:'유수지를 따라 펼쳐진 푸른 솔 숲을 조망하며 자연의 낭만과 함께 다양한 주류와 간편한 스낵을 즐길 수 있는 공간입니다.',
        time:'월 - 금 : 14:00 - 22:00<br>토 - 일 / 공휴일 : 09:00 - 22:00',
        tel:'032 - 743 - 9296',
        img:'./images/sub3/content3/addimg3.jpg'}
    ]

    $('.add_tabmenu li').css('border-bottom','none');
    $('.add_tabmenu li:eq(0)').css('border-bottom','2px solid #B0744D');

    $('.add_tabmenu li').click(function(e){
        e.preventDefault();
        let ind = $(this).index();
        //console.log(ind);

        $('.add_tabmenu li').css('border-bottom','none');
        $(this).css('border-bottom','2px solid #B0744D');

        $('.addcontent > p').html(addfac[ind].text);
        $('.addcontent ul li:eq(0) p:eq(1)').html(addfac[ind].time);
        $('.addcontent ul li:eq(1) p:eq(1)').html(addfac[ind].tel);
        $('.addcontent img').attr('src',addfac[ind].img);
    });



    // sub3_4 bqinfo
    let bqinfo = [
        {hall1:'750', hall2:'500', hall3:'250'},
        {hall1:'600', hall2:'420', hall3:'210'},
        {hall1:'120', hall2:'90', hall3:'75'},
        {hall1:'360', hall2:'240', hall3:'120'},
        {hall1:'600', hall2:'420', hall3:'210'},
        {hall1:'750', hall2:'500', hall3:'250'}
    ]

    $('.bqinfo ul li').css('border-bottom','none');
    $('.bqinfo ul li:eq(0)').css('border-bottom','2px solid #b0754d');

    $('.bqinfo ul li').click(function(){
        let a = $(this).index('.bqinfo ul li');
        //console.log(a);

        $('.bqinfo ul li').css('border-bottom','none');
        $(this).css('border-bottom','2px solid #b0754d');

        $('.hall1 td:eq(2)').html(bqinfo[a].hall1);
        $('.hall2 td:eq(2)').html(bqinfo[a].hall2);
        $('.hall3 td:eq(2)').html(bqinfo[a].hall3);
    });


    //sub3_4 popup
    let popmenu = [
        {
            name:'Western Set A',menu1:'수비스 해산물과 신선한 토마토 샐러드',
            menu2:'양송이 크림 스프', menu3:'자몽 셔벗',
            menu4:"소고기 안심 스테이크와 전복구이에 '샤토 라퐁 로쉐' 와인소스",
            menu5:'마블 레어 치즈 무스와 과일 소스',
            menu6:'커피 또는 티'
        },
        {
            name:'Western Set B',menu1:'아브루가 케비어와 마이크로 새싹',
            menu2:'아스파라거스 크림 스프', menu3:'수제 파스타를 곁들인 바닷가재 그라탕',
            menu4:"소고기 안심 스테이크에 포트 와인 소스와 컬리플라워 감자퓨레, 토마토 콩피",
            menu5:'딸기무스 봄베에 레몬크림과 젤리',
            menu6:'커피 또는 티'
        },
        {
            name:'Reception',menu1:'커피',
            menu2:'티 (녹차/홍차)', menu3:'와인 (레드/화이트)',
            menu4:"스파클링 와인",
            menu5:'택 2'
        },
        {
            name:'Coffee Break',menu1:'커피',
            menu2:'다과'
        }
    ]
    
    $('.menu a').click(function(e){
        e.preventDefault();
        let index = $(this).parents('.menu').index();
        //console.log(index);
        let bqmenu = popmenu[index];

        $('.back').show();

        let bqbox='<div><p>'+bqmenu.name+'</p>';
        bqbox+='<ul>';
        for(let i=1; i<=6; i++){
            if (bqmenu['menu'+i] !== undefined) {
                bqbox+='<li>'+bqmenu['menu'+i]+'</li>';
            }
        }
        bqbox+='</ul></div>';
        bqbox+='<span><a href="#">닫 기</a></span>';

        $('.popup').html(bqbox).show();
    });

    $(document).on('click','.back, .popup a', function(e){
        e.preventDefault();
        $('.back').hide();
        $('.popup').hide();
    });
});
//랩퍼 끝