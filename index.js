$(".toggle-btn").click(()=>{
    $(".nav-item").slideToggle()
})
$(".nav-link").click(function() {
  if ($(window).width() <= 450) {  // Check if it's a mobile screen, adjust the value as per your requirement
      $(".nav-item").slideUp();
  }
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {  // Adjust the value based on when you want the color to change
      $('.inside-nav').css({
          backgroundColor: "#fff"
      });
  } else {
      $('.inside-nav').css({
          backgroundColor: "#000"  // Black color when scrolled to the top or original position
      });
  }
});
$(document).ready(function() {
  // Function to show the appropriate content based on the clicked tab
  function showContent(href) {
    // Hide all contents
    $("#home-content, #about-content, #contact-content").hide();

    switch (href) {
      case '/':
        $(".home-ani").show();
        $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide();
        $('.about-container').hide();
        $('.contact-container').hide();
        $('#candy-1, #candy-2, #candy-3').css({
          opacity: '1',
          display: 'block',
          left: 0,
          top: 0
        });
        break;
      case '/about':
        $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide();
        $('.contact-container').hide();

        $(".about-container").show();
        $('.home-ani').hide();
        break;
      case '/contact':
        $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide();
        $(".contact-container").show();
        $('.home-ani').hide();
        $('.about-container').hide();
        break;
      default:
        $(".home-ani").show();
    }
  }

  // Function to handle browser back and forward buttons
  function handlePopState() {
    let currentPath = location.pathname;
    $(".nav-link").each(function() {
      if ($(this).attr("href").substring(1) === currentPath) {
        $(this).click();
      }
    });
  }

  // Handle clicks on the navbar links
  $(".nav-link").on("click", function(e) {
    e.preventDefault();

    let href = $(this).attr("href").substring(1); // Removing the '#' from the href

    // Show the appropriate content based on the clicked tab
    showContent(href);

  });

  // Handle browser back and forward buttons
  $(window).on('popstate', handlePopState);

  // Handle "previous page" button in your navbar
  $('.nav-item a[href="#/back"]').click(function(e) {
    e.preventDefault();
    if ($(window).width() <= 450) {  // Check if it's a mobile screen, adjust the value as per your requirement
      $(".nav-item").slideUp();}
    if ($('.about-container').is(':visible') || $('.replace-candy-2').is(':visible') || $('.replace-candy-3').is(':visible') || $('.replace-candy-1').is(':visible'))  {
   
      showContent('/') 

    } else if ($('.contact-container').is(':visible')) {
   
      showContent('/about');
    } 
  });

  // Initial setup: Show the appropriate content based on the current URL
  showContent(location.pathname);
});



let animationStarted = false;

$(window).scroll(function() {
  
  if (!animationStarted) {
    const restSection = $('#content');
    const introSection = $('.first-main');
    restSection.show().animate({
      top: '20px',
    }, 1000);
    $('body').css('overflow', 'auto')
    introSection.fadeOut(1000);

    animationStarted = true; 
  }

});



$(document).ready(function() {
  const homeSection = $('.home-ani');
  const homeContainer = $('.first-main');

  $('#candy-1').click(function(){

    var duration = 1000;

    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-1').show();
      
    });
   

});

  $('#candy-2').click(function(){
    var duration = 1000;
$('.upper-img').show()
    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-2').css({
        display: 'block',
        top: 0
      })
      
    });
  });

  $('#candy-3').click(function(){
    var duration = 1000;

    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-3').show();
    
      
    });
  });
});
var animationTimeout;

$("#next").click(function() {
    var $innerDiv = $('.replace-candy-2');
    var $innerImage = $('.images-upper');

    // Show both elements and reset their top property for the animation
    $innerDiv.css({ display: 'block', top: '100%' });
    $innerImage.css({ display: 'block', top: '100%' });
    

    // Animation to move the divs to top
    $innerDiv.animate({ top: 0 }, 1500);
    $innerImage.animate({ top: 0 }, 1500, function() {

       
        animationTimeout = setTimeout(function() {
            $innerDiv.animate({ top: '100%' }, 1000, function() {
                $innerDiv.css('display', 'none');
            });

            $innerImage.animate({ top: '100%' }, 1000, function() {
                $innerImage.css('display', 'none');
            });
        }, 5000);
    });
});

$('.btn-right-2').click(function() {
    $('.replace-candy-2, .images-upper').stop(true);
    clearTimeout(animationTimeout);
    $(".replace-candy-2").hide();
    $(".replace-candy-1").hide();
    $('.upper-img').show()
    $(".replace-candy-3").fadeIn(1000)
});

$(".btn-left-2").click(function() {
  $('.replace-candy-2,.images-upper').stop(true);
    $('.replace-candy-2').fadeOut(1000)
    $(".replace-candy-1").fadeIn(2000);
    $(".images-upper").fadeOut(1000)
});

$(".btn-left-3").click(function() {
    $(".replace-candy-3").fadeOut(2000)
    $(".replace-candy-2").css({
        display: "block",
        top: 0,
    });
    $(".upper-img").show();
});


$('#linkbtn').click(function(event){
  event.preventDefault()
  $('#about').css({
    display: 'block',
  })
  $('.citizen-pr').hide();
  $('.navbar').show();
  $('.contact-container').hide()
})
$('#contact-link').click(function(event){
  event.preventDefault()
  $('.contact-container').css({
    display: 'block',
  })
  $('.citizen-pr').hide();
  $('.navbar').show()
  $('#about').hide()
})
$('.nav-item a[href="#/back-button"]').click(function(e) {
  e.preventDefault();
  if ($(window).width() <= 450) { // Check if it's a mobile screen, adjust the value as per your requirement
    $(".nav-item").slideUp();
  }

  if ($('.citizen-pr').is(':visible')) {
    window.history.back();
  } else if ($('.contact-container-2').is(':visible') || $('.about-container-sania').is(':visible')) {
    // If either "contact-container-2" or "about-container-sania" is visible, show "citizen-pr" and hide "about" and "contact"
    $('.citizen-pr').show();
    $('.contact-container-2, .about-container-sania, .contact-container, #about').css({
      display: 'none'
    });
  }
});

