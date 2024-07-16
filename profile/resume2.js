// nav tab
const navItems = document.querySelectorAll('.navTab li a');
const tabMenu = document.querySelectorAll('.tabs ul li');
const contents = document.querySelectorAll('.con');
const portfolioSection = document.querySelector('.portfolio');
const infoSection = document.querySelector('.info');
const navPfTab = document.querySelector('.pfTab li a');
let windowHeight = window.innerHeight;

navItems.forEach(navItem => {
    navItem.addEventListener('click', function(e) {
        e.preventDefault();

        const index = Array.from(navItem.parentElement.parentElement.children).indexOf(navItem.parentElement);

        navPfTab.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
        navItem.classList.add('active');

        contents.forEach(section => section.style.display = 'none');
        contents[index].style.display = 'block';

        infoSection.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const tabMenu = document.querySelectorAll('.tabs ul li'); 
        tabMenu.forEach(tab => tab.querySelector('a').classList.remove('on'));
        tabMenu[index].querySelector('a').classList.add('on');
    });
});
navPfTab.addEventListener('click', function(e){
    e.preventDefault();
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    tabMenu.forEach(function(tab) {
        tab.querySelector('a').classList.remove('on');
    });
    tabMenu[4].querySelector('a').classList.add('on');
    
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// tab menu
contents.forEach(content => {
    content.style.height = windowHeight + 'px';
});
window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
    contents.forEach(content => {
        content.style.height = windowHeight + 'px';
    });
});

tabMenu[0].querySelector('a').classList.add('on');
contents[0].style.display = 'block';

tabMenu.forEach(function(tab, index) {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        if (index < contents.length) {
            tabMenu.forEach(function(tab) {
                tab.querySelector('a').classList.remove('on');
            });
            this.querySelector('a').classList.add('on');

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
                tab.querySelector('a').classList.remove('on');
            });
            this.querySelector('a').classList.add('on');
            portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});



// skill con_con3
let skillData;

fetch('./skill.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Not Working' + response.statusText);
        }
        return response.json();
    })
    .then(function(data) {
        skillData = data;
        const skills = data.skills;
        const designSkill = data.designSkill;
        const etcSkill = data.etcSkill;
        
        const skillsName = document.getElementsByClassName('skillsName');
        const skillslist = document.getElementsByClassName('list');

        const tabs = document.querySelectorAll('.skillTabs li');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const skillType = this.getAttribute('data-skill-type');
                tabs.forEach(t => t.classList.remove('now'));
                this.classList.add('now');
                updateSkillsList(skillType);
            });
        });

        function updateSkillsList(skillType) {
            const skills = skillData[skillType];
            const skillsList = document.getElementById('skillsList');
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
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });
