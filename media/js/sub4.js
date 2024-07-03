$(document).ready(function(){

    let chList = ['Harry Potter','Minions','Super Mario','Spider Man',
        'Jurassic World','Kungfu Panda','Transformers'];

    function printChcontent(){
        let chCon = '';
        chCon += '<ul>';
        chList.forEach((item, index) => {
            let a = index + 1;
            chCon += `<li><div>
                    <img src="./images/sub4/ch${a}.jpg" alt=""></div>
                    <img src="./images/sub4/ch${a}_1.png" alt="" class="ch">
                    <img src="./images/sub4/ch${a}_logo.png" alt="${chList[index]}" class="chname">
                    </li>
            `;
        });

        chCon += `</ul>`;
        $('.chContent').html(chCon);
    }
    printChcontent();

    // trailer
    let active = 0;

    function indicatorPosition(index) {
        let liWidth = $('.trMenu li').not(':last-child').outerWidth();
        let moveLeft = liWidth * index;

        $('.trMenu li:last-child').css({
            'width': liWidth + 'px',
            'left': moveLeft + 'px'
        });
    }

    $('.trMenu li').not(':last-child').on('click', function() {
        active = $(this).index();
        
        $('.trMenu li').removeClass('active');
        $(this).addClass('active');

        $('.trMenu li:last-child').stop().animate({'left': $(this).position().left}, 1000);
        $('.trcontent').fadeOut('fast');
        $('.trcontent').eq(active).fadeIn('slow');

        indicatorPosition(active);
    });

    $(window).on('resize', function() {
        indicatorPosition(active);
    });

    // 초기 상태 설정
    $('.trMenu li:first').trigger('click');

    $.ajax({
        url:'./data/trailer.json',
        dataType:'json',
        success:function(data){
            let trList = data.trList;
            
            function loadTrailer() {
                let trCon1 = '<ul>';
                let trCon2 = '<ul>';

                for (let i = 0; i < trList.length; i++) {
                    let trItem = '<li>';
                    trItem += `<div><img src="${trList[i].imglink}" alt="">
                            <span><i class="fa-solid fa-play"></i></span></div>
                            <p>${trList[i].toptxt}</p>
                            <p>${trList[i].text}</p>
                            </li>
                    `
                    
                    if (i < 4) {
                        trCon1 += trItem;
                    } else {
                        trCon2 += trItem;
                    }
                }
                trCon1 += '</ul>';
                trCon2 += '</ul>';

                $('.tr1').html(trCon1);
                $('.tr2').html(trCon2);
            }
            loadTrailer();
            
            $('.tr1 ul li div').click(function(e){
                e.preventDefault();
                let ind = $(this).parents('li').index();
                $('.popup iframe').attr('src',trList[ind].ytlink);
                $('.popup').fadeIn();
                $('.popback').show();
            });

            $('.tr2 ul li div').click(function(e){
                e.preventDefault();
                let ind = $(this).parents('li').index()+4;
                $('.popup iframe').attr('src',trList[ind].ytlink);
                $('.popup').fadeIn();
                $('.popback').show();
            });

            $('.popup a, .popback').click(function(e){
                e.preventDefault();
                $('.popup').fadeOut();
                $('.popback').hide();
            });
            
        }

        
    });







});