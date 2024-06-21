$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); 
      screenHeight = $(window).height();  

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 1024 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 1024){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
      if(screenSize <= 768){
        $("#imgBG").attr('src','./images/back2.jpg');
      }
      if(screenSize <= 640){
        $("#imgBG").attr('src','./images/back3.jpg');
      }
  }

  screen_size();  
  
  $(window).resize(function(){   
      screen_size();
  }); 
  
  $('.down, .scrollbox').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });


  
  
});