// Time set
function setTime(){
    let dateBox = document.querySelector('.date') as HTMLElement;
    let newTime = new Date();
    let month = newTime.getMonth() + 1;
    let date = newTime.getDate();
    let day = newTime.getDay();
    let dayName = ['일','월','화','수','목','금','토'];
    //console.log(date);

    let hour = newTime.getHours();
    let minute = newTime.getMinutes();
    let minuteString = minute < 10 ? `0${minute}` : `${minute}`;
    let ampm = hour >= 12 ? `<i class="fa-solid fa-moon"></i>` : `<i class="fa-solid fa-sun"></i>`;
    hour = hour % 12;
    hour = hour ? hour : 12; 

    let writeTime = `${month}월 ${date}일 (${dayName[day]}) ${ampm} ${hour}:${minuteString}`;
    dateBox.innerHTML = writeTime;
}
setInterval(setTime, 1000);

// tooltip
const langSpan = document.getElementById('lang')as HTMLElement;
langSpan.addEventListener('mouseenter', function() {
    this.textContent = '한';
});
langSpan.addEventListener('mouseleave', function() {
    this.textContent = 'A';
});

// nav tab
const navItems = document.querySelectorAll('.navTab li a') as NodeListOf<HTMLElement>;
const tabMenu = document.querySelectorAll('.tabs ul li') as NodeListOf<HTMLElement>;
const contents = document.querySelectorAll('.con') as NodeListOf<HTMLElement>;
const portfolioSection = document.querySelector('.portfolio') as HTMLElement;;
const infoSection = document.querySelector('.info') as HTMLElement;;
const navPfTab = document.querySelector('.pfTab li a')as HTMLElement;
const resumeTitleText = document.getElementById('resumeTitleText') as HTMLElement;;

resumeTitleText.addEventListener('click', function(){
    tabMenu.forEach(function(tab) {
        (tab.querySelector('a') as HTMLElement).classList.remove('on');
    });
    (tabMenu[0].querySelector('a')as HTMLElement).classList.add('on');
    navPfTab.classList.remove('active');
    navItems.forEach(item => item.classList.remove('active'));
    navItems[0].classList.add('active');
    contents.forEach(section => section.style.display = 'none');
    contents[0].style.display = 'block';

    infoSection.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

navItems.forEach(navItem => {
    navItem.addEventListener('click', function(e) {
        e.preventDefault();

        const index = Array.from(navItem.parentElement!.parentElement!.children).indexOf(navItem.parentElement!);

        navPfTab.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        contents.forEach(section => section.style.display = 'none');
        contents[index].style.display = 'block';

        infoSection.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const tabMenu = document.querySelectorAll('.tabs ul li') as NodeListOf<HTMLElement>; 
        tabMenu.forEach(tab => (tab.querySelector('a') as HTMLElement).classList.remove('on'));
        (tabMenu[index].querySelector('a') as HTMLElement).classList.add('on');
    });
});
navPfTab.addEventListener('click', function(e){
    e.preventDefault();
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    tabMenu.forEach(function(tab) {
        (tab.querySelector('a') as HTMLElement).classList.remove('on');
    });
    (tabMenu[4].querySelector('a') as HTMLElement).classList.add('on');
    
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// resizing 
let windowHeight = window.innerHeight;
contents.forEach(content => {
    content.style.height = windowHeight + 'px';
});
(document.querySelector('nav') as HTMLElement).style.height = windowHeight + 'px';
window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
    contents.forEach(content => {
        content.style.height = windowHeight + 'px';
    });
    (document.querySelector('nav') as HTMLElement).style.height = windowHeight + 'px';
});

// tab
(tabMenu[0].querySelector('a') as HTMLElement).classList.add('on');
contents[0].style.display = 'block';

tabMenu.forEach(function(tab, index) {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        if (index < contents.length) {
            tabMenu.forEach(function(tab) {
                (tab.querySelector('a') as HTMLElement).classList.remove('on');
            });
            (this.querySelector('a') as HTMLElement).classList.add('on');

            contents.forEach(function(content) {
                content.style.display = 'none';
            });
            contents[index].style.display = 'block';

            navItems.forEach(item => item.classList.remove('active'));
            navItems[index].classList.add('active');
            navPfTab.classList.remove('active');

            contents.forEach(content => {
                content.style.height = windowHeight + 'px';
            });

            infoSection.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            tabMenu.forEach(function(tab) {
                (tab.querySelector('a') as HTMLElement).classList.remove('on');
            });
            (this.querySelector('a') as HTMLElement).classList.add('on');
            navItems.forEach(item => item.classList.remove('active'));
            navPfTab.classList.add('active');
            portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});



// skill con_con3
interface Skill {
    skillName: string;
    skillTxt: string;
}
interface SkillData {
    [key: string]: Skill[];
}
let skillData: SkillData;

fetch('./skill.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Not Working' + response.statusText);
        }
        return response.json();
    })
    .then(function(data) {
        skillData = data;
        const tabs = document.querySelectorAll('.skillTabs li') as NodeListOf<HTMLElement>;

        function updateSkillsList(skillType: string) {
            const skills = skillData[skillType];
            const skillsList = document.getElementById('skillsList') as HTMLElement;
            skillsList.innerHTML = '';

            for (let i = 0; i < skills.length; i++) {
                const listItem = document.createElement('li');
                const dlElement = document.createElement('dl');

                const dtElement = document.createElement('dt');
                dtElement.textContent = skills[i].skillName;

                const ddElement = document.createElement('dd');
                ddElement.textContent = skills[i].skillTxt;

                dlElement.appendChild(dtElement);
                dlElement.appendChild(ddElement);
                listItem.appendChild(dlElement);
                skillsList.appendChild(listItem);
            }
        }
        updateSkillsList('skills');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const skillType = this.getAttribute('data-skill-type')|| 'default';
                tabs.forEach(t => t.classList.remove('now'));
                this.classList.add('now');
                updateSkillsList(skillType);
            });
        });
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });
