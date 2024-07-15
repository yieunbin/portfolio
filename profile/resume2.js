// skill con_con3
document.addEventListener('DOMContentLoaded', function() {
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

                // Clear existing content
                skillsList.innerHTML = '';

                // Add new content
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
});