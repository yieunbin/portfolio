$(document).ready(function(){

    let key, value;
    function indexroom(){
        let url = decodeURIComponent(location.href);
        url = decodeURIComponent(url); 

        let params = '';
        params = url.substring( url.indexOf('?')+1, url.length);
        key = params.split("=")[0];
        value = params.split("=")[1];
        //console.log(key, value);
        value = Number(value);
    }
    indexroom();
    if(value==1){
        $('.content_area .roomcontent').hide();
        $('.content_area .roomcontent:eq(' + value + ')').show();
        $('.tapmenu li').removeClass('tapnow');
        $('.tapmenu li:eq('+value+')').addClass('tapnow');
    }else{
        $('.content_area .roomcontent').hide();
        $('.content_area .roomcontent:eq(0)').show();
        $('.tapmenu .tab1').addClass('tapnow');
    }

    $('.tapmenu li').click(function(e){
        e.preventDefault();

        var i = $(this).index('.tapmenu li');
        //console.log(i);

        $('.content_area .roomcontent').hide();
        $('.content_area .roomcontent:eq(' + i + ')').show();
        $('.tapmenu li').removeClass('tapnow');
        $(this).addClass('tapnow');
    });

    // $('.content_area .roomcontent').hide();
    // $('.content_area .roomcontent:eq(0)').show();
    // $('.tapmenu .tab1').addClass('tapnow');

    // $('.tapmenu li').click(function(e){
    //     e.preventDefault();

    //     var i = $(this).index('.tapmenu li');
    //     //console.log(i);

    //     $('.content_area .roomcontent').hide();
    //     $('.content_area .roomcontent:eq(' + i + ')').show();
    //     $('.tapmenu li').removeClass('tapnow');
    //     $(this).addClass('tapnow');
    // });

    let i = 0;
    $('.imgbox img').fadeIn('slow');
    $('.img_btn').css({'width':'17px', 'transition':'none'});
    $('.img_btn:eq(0)').animate({'width':'50px'},3000).clearQueue();
    function changeImage(){
        i++;
        if(i==3){
            i=0;
        }
        $('.imgbox img').hide();
        $('.img_btn').css({'width':'17px', 'transition':'none'});
        $('.box1 img').attr('src','./images/content1/twin_mt0'+(i+1)+'.jpg').fadeIn();
        $('.box2 img').attr('src','./images/content1/twin_oc0'+(i+1)+'.jpg').fadeIn();
        $('.box3 img').attr('src','./images/content1/double_mt0'+(i+1)+'.jpg').fadeIn();
        $('.box4 img').attr('src','./images/content1/double_oc0'+(i+1)+'.jpg').fadeIn();

        $('.imgbox img').fadeIn('slow');
        
        $('.box1 .img_btn:eq('+i+')').css({'width':'50px', 'transition':'3s'});
        $('.box2 .img_btn:eq('+i+')').css({'width':'50px', 'transition':'3s'});
        $('.box3 .img_btn:eq('+i+')').css({'width':'50px', 'transition':'3s'});
        $('.box4 .img_btn:eq('+i+')').css({'width':'50px', 'transition':'3s'});


    }
    setInterval(changeImage, 3000);




});
//랩퍼끝