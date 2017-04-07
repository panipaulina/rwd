// story slider

$(document).ready(function() {
	slider();
});

function slider() {
	$('.control-dot').first().addClass('active');
	$('.s-content').first().addClass('active');


	$('.control-dot').click(function() {
		var $this = $(this),
			$dotLength = $this.parent().children(),
			position = $dotLength.index($this);

		$('.control-dot').removeClass('active').eq(position).addClass('active');
		$('.s-content').removeClass('active').eq(position).addClass('active');
	});
};

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

// scroll top button

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