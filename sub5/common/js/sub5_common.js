
//메인슬라이드 버튼
let i = 1;
$('.fa-chevron-left').click(function(e){
    e.preventDefault();

    i--;
    if(i == 0){
        i=3;
    }
    $('.pagenum b').text(i);
});
$('.fa-chevron-right').click(function(e){
    e.preventDefault();

    i++;
    if(i == 4){
        i=1;
    }
    $('.pagenum b').text(i);
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: -15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',
    },
    on: {
        slideChange: function () {
            updatePageNumber();
        }
    }
});

function updatePageNumber() {
    let currentIndex = swiper.realIndex + 1; 
    document.querySelector('.pagenum b').textContent = currentIndex;
}

updatePageNumber();

//아코디언
let origin_w = 460;
let min_w = 230;
let max_w = 930;

$('.tangbox ul li').hover(function(){
    $('.tangbox ul li').animate({'width':min_w},300).clearQueue();
    $('.tangbox ul li img').css('filter','grayscale(60%)');
    $(this).animate({'width':max_w},300).clearQueue();
    $('img',this).css('filter','grayscale(0%)');
},function(){
    $('.tangbox ul li').animate({'width':origin_w},300).clearQueue();
    $('.tangbox ul li img').css('filter','grayscale(0%)');
})
