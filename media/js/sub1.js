$(document).ready(function(){
    $(window).load(function() {
        setTimeout(function() {
            $('h2').removeClass('hide');
        }, 700);
    });

    let conTxts = [
        {
            contry:'hollywood',
            txt:'Located in the entertainment capital of the world, Universal Studios Hollywood is not just a theme park but a working film and television studio. Visitors can enjoy a variety of rides and attractions inspired by blockbuster films and TV shows, such as the adrenaline-pumping "Jurassic World - The Ride" and the magical "The Wizarding World of Harry Potter." The famous Studio Tour gives guests an exclusive look at real sets and soundstages where Hollywood movies are made.',
            img1:'./images/sub1/con1_1.jpg',
            img2:'./images/sub1/con1_2.jpg'
        },
        {
            contry:'orlando',
            txt:"Universal Orlando Resort in Florida is a premier destination for theme park enthusiasts. The resort encompasses two major theme parks: Universal Studios Florida and Universal's Islands of Adventure. Universal Studios Florida features attractions like 'Despicable Me Minion Mayhem' and 'Hollywood Rip Ride Rockit,' while Islands of Adventure is home to the critically acclaimed Wizarding World of Harry Potter, which includes meticulously recreated locations from the books and films such as Hogwarts Castle and Diagon Alley. The resort also features a water theme park, Universal’s Volcano Bay, which offers a tropical paradise with thrilling water rides and relaxing beaches.",
            img1:'./images/sub1/con2_1.jpg',
            img2:'./images/sub1/con2_2.jpg'
        },
        {
            contry:'japan',
            txt:'In Osaka, Universal Studios Japan continues the tradition of blending cinematic excitement with local culture. This park features unique attractions like "Super Nintendo World," which brings the world of Mario and other Nintendo characters to life with innovative rides and interactive experiences. Additionally, visitors can enjoy attractions based on global hits like "Minions," "Jurassic Park," and the "Wizarding World of Harry Potter."',
            img1:'./images/sub1/con3_1.jpg',
            img2:'./images/sub1/con3_2.jpg'
        },
        {
            contry:'singapore',
            txt:"Universal Studios Singapore, located on Sentosa Island, offers a diverse array of attractions tailored to both local and international guests. Highlights include the 'Transformers: The Ride,' an immersive 3D experience, and 'Battlestar Galactica: HUMAN vs. CYLON,' the world's tallest pair of dueling roller coasters. The park also features themed zones such as Ancient Egypt, Lost World, and Far Far Away, each providing unique experiences and entertainment.",
            img1:'./images/sub1/con4_1.jpg',
            img2:'./images/sub1/con4_2.jpg'
        },
        {
            contry:'beijing',
            txt:'The newest addition to the Universal Studios family, Universal Beijing Resort, opened its doors in 2021. This park showcases a blend of classic Universal attractions and new experiences tailored to Chinese culture and preferences. Notable areas include the "Kung Fu Panda Land of Awesomeness," "Transformers: Metrobase," and a distinctly Chinese-themed section of the Wizarding World of Harry Potter.',
            img1:'./images/sub1/con5_1.jpg',
            img2:'./images/sub1/con5_2.jpg'
        }
    ];

    let scSize = $(window).width();
    let conList = document.querySelectorAll('.conList li');
    let conP = document.querySelector('.conP');
    let ic = document.querySelector('.indicator');
    let content = document.querySelector('.contry > ul > li:nth-of-type(2)');


    
    function updateIndicator() {
        scSize = window.innerWidth;
        conList.forEach(function(item, index) {
            item.addEventListener('click', function() {
                conList.forEach(function(li) {
                    li.classList.remove('active');
                });

                this.classList.add('active');

                if (scSize > 1024) {
                    ic.style.top = `calc(50px + ${index * 90}px)`;
                    ic.style.left = ''; 
                } else {
                    let listW = item.offsetWidth;
                    ic.style.left = `calc(0px + ${index * listW}px)`;
                    ic.style.top = ''; 
                }

                document.querySelector('.imgBox img:nth-of-type(1)').setAttribute('src', conTxts[index].img1);
                document.querySelector('.imgBox img:nth-of-type(2)').setAttribute('src', conTxts[index].img2);

                conP.innerHTML = conTxts[index].txt;
            });
        });
    }
    
    updateIndicator();

    //너비변경시 indicator 속성변경
    window.addEventListener('resize', function() {
        scSize = window.innerWidth; 
        let activeItem = document.querySelector('.conList li.active');
        if (activeItem) {
            let index = Array.from(conList).indexOf(activeItem);
            if (scSize > 1024) {
                ic.style.top = `calc(50px + ${index * 90}px)`;
                ic.style.left = ''; 
                ic.style.width = '5px';
                ic.style.height = '50px';
            } else {
                let listW = activeItem.offsetWidth;
                ic.style.left = `calc(0px + ${index * listW}px)`;
                ic.style.top = '';  
                ic.style.width = '15vw';
                ic.style.height = '5px';
            }
        }
    });


    $(window).on('scroll', function() {
        let scroll = $(window).scrollTop();
        let videoH = document.querySelector('.videoBox').offsetHeight;
    
        if (scroll > (videoH - 500)) {
            $('.minions2').animate({top: '0px', opacity: '1' }, 1000);
            $('.minions3').animate({top: '0px', opacity: '1' }, 1000);
        }
    });

    // movies before 높이설정
    function updateBeforeHeight() {
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            const img = container.querySelector('img');
            const beforeHeight = img.clientHeight + 'px';
            container.style.setProperty('--before-height', beforeHeight);
        });
    }
    
    window.addEventListener('resize', updateBeforeHeight);
    window.addEventListener('load', updateBeforeHeight);






});
//랩퍼끝