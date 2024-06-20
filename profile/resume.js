$(document).ready(function() {
    
    var linkToggle = document.querySelectorAll('.toggle-btn');

    for(i = 0; i < linkToggle.length; i++){
        linkToggle[i].addEventListener('click', function(event){
        
            event.preventDefault();
            //console.log(this) 
            var container = document.getElementById(this.dataset.container); 

            if (!container.classList.contains('active')) { 
                $(this).parent().find('i').addClass('rotate');
                container.classList.add('active'); 

                container.style.height = 'auto';
                var height = container.clientHeight + 'px'; 
                container.style.height = '0px';

                setTimeout(function () {
                    container.style.height = height;
                }, 0);
            
            } else { 
                $('i').removeClass('rotate');
                container.style.height = '0px';
                container.addEventListener('transitionend', function () { 
                    container.classList.remove('active');
                }, {
                    once: true
                });
            }
        });
    }
});
    
