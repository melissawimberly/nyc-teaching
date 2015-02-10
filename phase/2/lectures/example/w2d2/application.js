$(document).ready(function(){


  var myCallback =  function(){
    $('.btn-container').append( "<div class='hello'>Hello Squirrels 2015 </div>");
  }

  myCallback();
  myCallback();


  $('a#syHi').on('click', function(e){
    console.log(e);
    console.log(e.target);
    console.log(this);
    $('.hello').remove(); 
  });

});    
