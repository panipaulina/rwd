$(document).ready(function() {    
   $(window).scroll( function(){        
        $('.fadein').each( function(){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();           
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},200);                   
            }            
        });     
    });    
});

// scroll top button
var $backBtn = $('#back'),
    windowHeight = $(window).height();

$(window).scroll(function() {
  if ($(document).scrollTop() >= 600) {
    $backBtn.fadeIn();
  } else {
    $backBtn.fadeOut();
  }
});

$backBtn.click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
});

// section animations
$('#header a').click(function(event) {
  event.preventDefault();
    
  var target = $(this).attr('href'),
      menuItem = $(this),
      targetOffset = $(target).offset().top;
  
  $('#header a').removeClass('active');
  $('.posts').removeClass('active');
    
  $('html, body').animate({
    scrollTop: targetOffset,
  }, 800, function() {
    menuItem.addClass('active');
    $(target).addClass('active');
  });
});
