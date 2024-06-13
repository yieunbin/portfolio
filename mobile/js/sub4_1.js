$(document).ready(function(){
    let useData;
    let loded = 4;
    let totalList;

    $.ajax({
        url:'./data/event.json',
        dataType:'json',
        success:function(data){
            useData = data.event;
            loded = 4;
            totalList = data.event.length;
    
            function dataPrint(arr){
                let list = '<ul>';
    
                for(let i = 0; i < arr.length; i++){
                    let title = arr[i].title;
                    let txt = arr[i].txt;
                    let imgsrc = arr[i].imgsrc;
                    let eventTime = arr[i].eventTime;
    
                    list += '<li>';
                    list += '<img src="' + imgsrc + '" alt="">';
                    list += '<dl>';
                    list += '<dt>' + title + '</dt>';
                    list += '<dd>' + txt + '</dd>';
                    list += '<dd>기간/시간 : ' + eventTime + '</dd>';
                    list += '</dl>';
                    list += '<a href="#">자세히</a></li>';
                };
                list += '</ul>';
                $('.eventList div').html(list);

                $('.eventList ul li').click(function(e){
                    e.preventDefault();
                    
                    let ind = $(this).index();
                    //console.log(ind);

                    $('.title p:eq(0)').html(arr[ind].popname);
                    $('.title p:eq(1)').html(arr[ind].poptxt);
                    $('.poptext').html(arr[ind].detail);
                    $('.poptime').html(arr[ind].eventTime);
                    $('.poploca').html(arr[ind].eventLo);
                    $('.popinfo').html(arr[ind].eventInfo);
    
                    $('.back').fadeIn('fast');
                    $('.popup').fadeIn('slow');
                });

                $('.close_btn, .back').click(function(e){
                    e.preventDefault();
                    $('.back').fadeOut('fast');
                    $('.popup').fadeOut('fast');
                });
            };
            dataPrint(useData.slice(0, loded));

            $('.loadMore').click(function(e){
                e.preventDefault();
                if(loded < totalList){
                    loded += 5;
                    if(category.length > 0){
                        dataPrint(category.slice(0, loded));
                    } else {
                        dataPrint(useData.slice(0, loded));
                    }
                }else{
                    $(this).hide();
                    $('<p>마지막 페이지입니다.</p>').css({'text-align':'center','color':'#999'}).hide().appendTo('.eventList div').fadeIn('slow');
                }
            });

            // 필터버튼클릭서식
            let category = [];
            $('.swiper-wrapper div').css({'background':'none'});
            $('.swiper-wrapper div a').css({'color':'#333'});
            $('.swiper-wrapper div:eq(0)').css({'background':'#B0744D'});
            $('.swiper-wrapper div:eq(0) a').css({'color':'#fff'});

            $('.swiper-wrapper div').click(function(e){
                e.preventDefault();
                $('.swiper-wrapper div').css({'background':'none'});
                $('.swiper-wrapper div a').css({'color':'#333'});
                $(this).css({'background':'#B0744D'});
                $(this).find('a').css({'color':'#fff'});
            });

            $('.btn_all').click(function(){
                loded = 4;
                $('.loadMore').show();
                category = [];
                dataPrint(useData.slice(0, loded));
            });

            $('.btn_res').click(function(){
                loded = 4;
                $('.loadMore').show();
                category = useData.filter(function(element){
                    return element.title.includes('쿤스트라운지');
                })
                dataPrint(category.slice(0, loded));
            });

            $('.btn_room').click(function(){
                loded = 4;
                $('.loadMore').show();
                category = useData.filter(function(element){
                    return element.title.includes('객 실');
                })
                dataPrint(category.slice(0, loded));
            });

            $('.btn_bq').click(function(){
                loded = 4;
                $('.loadMore').show();
                category = useData.filter(function(element){
                    return element.title.includes('연 회');
                })
                dataPrint(category.slice(0, loded));
            });
        }
    });
});