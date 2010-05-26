// Put your application scripts here

$(document).ready(function() {
  
  lastBlock = $("#nav_start");
  maxWidth = 210;
  minWidth = 75;  

  $("#nav .left ul li a").hover(
    function(){ 
      $(lastBlock).animate({width: minWidth+"px"}, { queue:false, duration:400 });
      $(this).animate({width: maxWidth+"px"}, { queue:false, duration:400});
      lastBlock = this; 
    }
  );
  
  $("#nav_heart").hide();
  $("#nav_with_heart").hover(
    function(){
      $('#nav_heart').show(400);
    }
  );       
  $(".nav_without_heart").hover(
    function(){
      $('#nav_heart').hide();
    }
  );
  
  $('.navbox').each(
    function(i, v){ 
      var hue = 'rgb('+(180-(i*40))+','+(0+(i*5))+','+(0+(i*15))+')';
      if($.browser.mozilla){
        $(this).animate( { backgroundColor: hue }, 2000);
      }
      $(this).css('background-color', hue); 
    }
  ); 
  
  $('#gallery').jcarousel({
    visible: 1,
    scroll: 1,
    initCallback: gallery_initCallback,  
    // This tells jCarousel NOT to autobuild prev/next buttons
    buttonNextHTML: null,
    buttonPrevHTML: null 
  });         

   
});                          
      

function gallery_initCallback(carousel) {
  jQuery('.jcarousel-controls a').bind('click', function() {
      carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('page')));
      return false;
  });  
}