$(document).ready(function() {
  $(window).load(function() {
    setTimeout(function() {
        $('h2').removeClass('hide');
    }, 100);
});

  let key, value;
  
  function getParams() {
    let url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex1.html?num=1'

    let params='';
    params = url.substring( url.indexOf('?')+1, url.length );   
    key = params.split("=")[0];  //'num'
    value = params.split("=")[1];  // '1'
    value = Number(value); //숫자로 변환  1
  }  
  getParams(); 

  let screenSize, screenHeight;
  

  function screen_size(){
      screenSize = $(window).width();
      screenHeight = $(window).height(); 
      let listW = $('.conList li').width();

      $("#content").css('margin-top',screenHeight);
      if(screenSize <= 1024){
        $('.indicator').css({'width':listW});
      }
      if( screenSize > 768){
          $("#imgBG").attr('src','./images/sub'+value+'/sub'+value+'_big.jpg');
      }else{
          $("#imgBG").attr('src','./images/sub'+value+'/sub'+value+'_small.jpg');
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