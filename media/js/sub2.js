$(document).ready(function(){
    var areaswiper = new Swiper('.areaswiper', {
        autoHeight: true,
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 10,  
        freeMode: true,
        pagination: {  
            el: '.pagination1',
            //dynamicBullets: true,
            clickable: true,
            //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
        },
        scrollbar:{
            el: '.swiper-scrollbar',
            hide: false,
        },
        breakpoints:{
            769:{
                spaceBetween: 20
            }
        }
    });

    let areaInfo = [
        {
            area:'mario',toptxt:'Super Nintendo World',
            ride1:'Mario Kart', ride2:"Yoshi's Adventure",
            play1:'Power-Up Band',play2:'Meet-Up',
            txt:"Immerse yourself in the world of Mario and friends and use your whole body to have fun!<br>And now Donkey Kong has arrived! Anything can happen in his jungle and that means thrills and exhilaration. Before you know it,<br> you'll be all caught up in the excitement, body and soul! This is only place in the world where kids and grown-ups alike can return to the wild and play all out with Mario and Donkey Kong!<br>The magic word is 'Play wild!' Awaken your instinct to play!",
            youtube:'https://www.youtube.com/watch?v=254bBGgNq-s'
        },
        {
            area:'harry',toptxt:'The Wizarding World Of Harry Potter',
            ride1:'Flight of the Hippogriff', ride2:"Forbidden Journey",
            play1:'Olivanders',play2:'Wand Magic',
            txt:"Embracing a variety of areas with unique characteristics, wonderment and surprise, Universal Studios Japan covers a whole spectrum of world-class entertainment through thrilling rides and shows themed on blockbuster Hollywood movies, as well as seasonal events for all ages to enjoy.<br>The Wizarding World of Harry Potter™ will reproduce the world from the Harry Potter™ stories, bringing it to life on a phenomenal scale at Universal Studios Japan.",
            youtube:'https://www.youtube.com/watch?v=CpjqPl8zckM'
        },
        {
            area:'minion',toptxt:'Minion Park',
            ride1:'Banana Cabana', ride2:"Despicable Me",
            play1:'Minions Greeting',play2:'Delicious Me!',
            txt:"All of humanity will have a blast at Minion Park!<br>The Minions have finally fulfilled their ambitions! All of humanity will be a part of the mayhem at the Minion Park!",
            youtube:'https://www.youtube.com/watch?v=uKtheKRA7Hk'
        },
        {
            area:'jurassic',toptxt:'Jurassic Park',
            ride1:'Jurassic parkd Ride', ride2:"The flying dinosaur",
            play1:'Dinosaur Meet',play2:'Fossil Fuels',
            txt:"Travel Back in Time to the Jurassic Era<br>Immerse yourself in a jungle where dinosaurs have been brought back to life!<br>Keep your wits about you as these ancient, reptilian beasts roam through the trees.<br>Welcome...to Jurassic Park.",
            youtube:'https://www.youtube.com/watch?v=3yDkR_cDVlU'
        },
        {
            area:'amity',toptxt:'Amity Village',
            ride1:'Amity Boardwalk', ride2:"Jaws",
            play1:'Amity Ice Cream',play2:'Jaws Photo',
            txt:"With the terror of the town's man-eating shark now firmly in the past, Amity once again welcomes tourists to explore the charm of this small fishing village and sate their thirst for the macabre with stories of the shark's reign.",
            youtube:''
        },
        {
            area:'hollywood',toptxt:'Hollywood',
            ride1:'Dream Ride', ride2:"Backdrop",
            play1:'Power-Up Band',play2:'World Tour',
            txt:"Discover Hollywood just beyond the park entrance. This exciting area is packed with the most attractions and shops in the park.Find your inner 1930s movie star as you stroll down dazzling Hollywood Boulevard.Welcome to a stylish, classy world where you can scream on roller coasters, party at live shows, and go absolutely wild!",
            youtube:''
        },
        {
            area:'newyork',toptxt:'New York',
            ride1:'Festival Park', ride2:"Greeting Gallery",
            play1:'Kuromi Live',play2:'Streetside Symphony',
            txt:"This area features the streets of 1930s New York. Discover glamorous landmarks of the era, from 5th Avenue to Delancey Street.Movie fans of all kinds will enjoy strolling through streets and back alleys from famous films.Explore the birthplace of entertainment, with unpredictable experiences and thrills!",
            youtube:''
        }
    ]

    $('.swiper-slide').click(function(e){
        e.preventDefault();
        let i = $(this).index();
        //console.log(i);

        $('.swiper-slide').removeClass('activeOn');
        $(this).addClass('activeOn');
        $('.subTitle').html(areaInfo[i].toptxt);
        $('.areaTop img').attr('src','./images/sub2/area_'+areaInfo[i].area+'.jpg');
        $('.bottomtxt').html(areaInfo[i].txt);

        $('.ride1 img').attr('src','./images/sub2/area_'+areaInfo[i].area+'1_1.jpg');
        $('.ride1 p').html(areaInfo[i].ride1);
        $('.ride2 img').attr('src','./images/sub2/area_'+areaInfo[i].area+'1_2.jpg');
        $('.ride2 p').html(areaInfo[i].ride2);
        $('.play1 img').attr('src','./images/sub2/area_'+areaInfo[i].area+'1_3.jpg');
        $('.play1 p').html(areaInfo[i].play1);
        $('.play2 img').attr('src','./images/sub2/area_'+areaInfo[i].area+'1_4.jpg');
        $('.play2 p').html(areaInfo[i].play2);

    });
    // sticky menu
    let scr = $(window).scrollTop();
    let scSize = $(window).width();
    // let menuHeight = $('.areaLogo').offset().top;
    // let locationHeight = $('.areaMap').offset().top;

    let mh = $('.areaswiper').outerHeight(true);
    
    function stickyMenu() {
        let scr = $(window).scrollTop();
        let menuHeight = $('.areaLogo').offset().top;
        let locationHeight = $('.areaMap').offset().top;
        
        //console.log('locationHeight:', locationHeight);
        //console.log('scrollTop:', scr);
        
        if (scr > menuHeight && scr < locationHeight-300){
            $('#headerArea').hide();
            $('.areaswiper').css({
                'position': 'fixed',
                'left': '0',
                'top': '0',
                'background': '#fff',
                'width': '100%',
                'z-index': '999'
            });
            $('.areaLogo').css('padding-bottom',mh);
        } else {
            $('#headerArea').show();
            $('.areaswiper').css({
                'position': 'relative',
                'left': '0',
                'top': '0',
                'background': 'none',
                'width': '90%'
            });
            $('.areaLogo').css('padding-bottom',0);
        }
    }
    
    $(window).on('scroll', function() {
        stickyMenu();
    });


    // map
    $('.mapList li').click(function(e){
        e.preventDefault();
        let ind = $(this).index();
        //console.log(ind);
        $('.mapList li').removeClass('clickA');
        $(this).addClass('clickA');
        $('.areaMap img').attr('src','./images/sub2/map'+(ind+1)+'.png');
        $('.areaMap').css({'background':'url(./images/sub2/map'+(ind+1)+'back.jpg) no-repeat','background-size':'cover','background-position':'center center'});
    });








});
//랩퍼끝