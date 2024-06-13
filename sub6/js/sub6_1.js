$(document).ready(function(){
$.ajax({
    url:'./data/event.json',
    dataType:'json',
    success:function(data){
        let useData = data.event;

        function dataPrint(arr){
            let list = '<ul>';

            for(let i = 0; i < arr.length; i++){
                let title = arr[i].title;
                let txt = arr[i].txt;
                let imgsrc = arr[i].imgsrc;

                list += '<li>';
                list += '<img src="' + imgsrc + '" alt="">';
                list += '<dl>';
                list += '<dt>' + title + '</dt>';
                list += '<dd>' + txt + '</dd>';
                list += '<dd>more</dd>';
                list += '</dl>';
            };
            list += '</ul>';
            $('.event_list').html(list);
        };
        dataPrint(useData);

        let category = [];
        //필터버튼클릭서식
        $('.btn_all').click(function(){
            dataPrint(useData);
            $('.event_list ul li').click(function(e){
                e.preventDefault();
                
                let ind = $(this).index();
                //console.log(ind);
    
                $('.popup .popimg').attr('src',useData[ind].popimg);
                $('.popup > p:eq(0)').html(useData[ind].popname);
                $('.popup > p:eq(1)').html(useData[ind].poptxt);
                $('.popup ul li:eq(0) p:eq(1)').html(useData[ind].detail);
                $('.popup ul li:eq(1) p:eq(1)').html(useData[ind].eventTime);
                $('.popup ul li:eq(2) p:eq(1)').html(useData[ind].eventLo);
                $('.popup ul li:eq(3) p:eq(1)').html(useData[ind].eventInfo);
    
                $('.popback').fadeIn('fast');
                $('.popup').fadeIn('slow');
    
            });
            $('.close_btn, .popback').click(function(e){
                e.preventDefault();
    
                $('.popback').fadeOut('fast');
                $('.popup').fadeOut('fast');
            });
        });

        $('.btn_res').click(function(){
            category = useData.filter(function(element){
                return element.title.includes('쿤스트라운지');
            })
            //console.log(category);
            dataPrint(category);
            $('.event_list ul li').click(function(e){
                e.preventDefault();
                
                let ind = $(this).index();
                //console.log(ind);
    
                $('.popup .popimg').attr('src',category[ind].popimg);
                $('.popup > p:eq(0)').html(category[ind].popname);
                $('.popup > p:eq(1)').html(category[ind].poptxt);
                $('.popup ul li:eq(0) p:eq(1)').html(category[ind].detail);
                $('.popup ul li:eq(1) p:eq(1)').html(category[ind].eventTime);
                $('.popup ul li:eq(2) p:eq(1)').html(category[ind].eventLo);
                $('.popup ul li:eq(3) p:eq(1)').html(category[ind].eventInfo);
    
                $('.popback').fadeIn('fast');
                $('.popup').fadeIn('slow');
    
            });
            $('.close_btn, .popback').click(function(e){
                e.preventDefault();
    
                $('.popback').fadeOut('fast');
                $('.popup').fadeOut('fast');
            });
        });

        $('.btn_room').click(function(){
            category = useData.filter(function(element){
                return element.title.includes('객 실');
            })
            //console.log(category);
            dataPrint(category);
            $('.event_list ul li').click(function(e){
                e.preventDefault();
                
                let ind = $(this).index();
                //console.log(ind);
    
                $('.popup .popimg').attr('src',category[ind].popimg);
                $('.popup > p:eq(0)').html(category[ind].popname);
                $('.popup > p:eq(1)').html(category[ind].poptxt);
                $('.popup ul li:eq(0) p:eq(1)').html(category[ind].detail);
                $('.popup ul li:eq(1) p:eq(1)').html(category[ind].eventTime);
                $('.popup ul li:eq(2) p:eq(1)').html(category[ind].eventLo);
                $('.popup ul li:eq(3) p:eq(1)').html(category[ind].eventInfo);
    
                $('.popback').fadeIn('fast');
                $('.popup').fadeIn('slow');
    
            });
            $('.close_btn, .popback').click(function(e){
                e.preventDefault();
    
                $('.popback').fadeOut('fast');
                $('.popup').fadeOut('fast');
            });
        });

        $('.btn_bq').click(function(){
            category = useData.filter(function(element){
                return element.title.includes('연 회');
            })
            //console.log(category);
            dataPrint(category);
            $('.event_list ul li').click(function(e){
                e.preventDefault();
                
                let ind = $(this).index();
                //console.log(ind);
    
                $('.popup .popimg').attr('src',category[ind].popimg);
                $('.popup > p:eq(0)').html(category[ind].popname);
                $('.popup > p:eq(1)').html(category[ind].poptxt);
                $('.popup ul li:eq(0) p:eq(1)').html(category[ind].detail);
                $('.popup ul li:eq(1) p:eq(1)').html(category[ind].eventTime);
                $('.popup ul li:eq(2) p:eq(1)').html(category[ind].eventLo);
                $('.popup ul li:eq(3) p:eq(1)').html(category[ind].eventInfo);
    
                $('.popback').fadeIn('fast');
                $('.popup').fadeIn('slow');
    
            });
            $('.close_btn, .popback').click(function(e){
                e.preventDefault();
    
                $('.popback').fadeOut('fast');
                $('.popup').fadeOut('fast');
            });
        });

        // 팝업
        $('.event_list ul li').click(function(e){
            e.preventDefault();
            
            let ind = $(this).index();
            //console.log(ind);

            $('.popup .popimg').attr('src',useData[ind].popimg);
            $('.popup > p:eq(0)').html(useData[ind].popname);
            $('.popup > p:eq(1)').html(useData[ind].poptxt);
            $('.popup ul li:eq(0) p:eq(1)').html(useData[ind].detail);
            $('.popup ul li:eq(1) p:eq(1)').html(useData[ind].eventTime);
            $('.popup ul li:eq(2) p:eq(1)').html(useData[ind].eventLo);
            $('.popup ul li:eq(3) p:eq(1)').html(useData[ind].eventInfo);

            $('.popback').fadeIn('fast');
            $('.popup').fadeIn('slow');

        });
        $('.close_btn, .popback').click(function(e){
            e.preventDefault();

            $('.popback').fadeOut('fast');
            $('.popup').fadeOut('fast');
        });
    }


});
//ajax end

$('.filter_btn button').removeClass('on');
$('.filter_btn button').css({'background':'none','color':'#333','box-shadow':'none'});
$('.filter_btn .btn_all').css({'background':'#B0744D','color':'#fff','box-shadow':'1px 2px 5px 1px rgba(0,0,0,.3)'});
$('.filter_btn .btn_all').addClass('on');

$('.filter_btn button').click(function(){
    $('.filter_btn button').css({'background':'none','color':'#333','box-shadow':'none'});
    $('.filter_btn button').removeClass('on');
    $(this).css({'background':'#B0744D','color':'#fff','box-shadow':'1px 2px 5px 1px rgba(0,0,0,.3)'});
    $(this).addClass('on');
});

$('.filter_btn button').hover(function(){
    if($(this).hasClass('on')){
        $(this).css({'background':'#B0744D','color':'#fff','box-shadow':'1px 2px 5px 1px rgba(0,0,0,.3)'});
    }else{
        $(this).css('background','#ebebeb');
    }
},function(){
    if($(this).hasClass('on')){
        $(this).css({'background':'#B0744D','color':'#fff','box-shadow':'1px 2px 5px 1px rgba(0,0,0,.3)'});
    }else{
        $(this).css('background','none');
    }
});
















});
// 랩퍼끝