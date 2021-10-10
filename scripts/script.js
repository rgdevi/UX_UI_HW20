
  //  scroll to top

  $(document).ready(function(){

$(window).scroll(function () {
  // console.log('I am scrolling');
  if ($(this).scrollTop() > 300) {
    $('#toTop').fadeIn();
    $("#topSticky").html("Scroll to top should appear! Scroll value: " + $(this).scrollTop())
    // console.log('I am here');

  } else {
    $('#toTop').fadeOut();
    $("#topSticky").html("Scroll should disappear! " + "<br>" + "Scroll value: " + $(this).scrollTop());
    // console.log('I am on the else block');
  }
});

$("#toTopButton").click(function () {
  $("html, body").animate({ scrollTop: 0 });
});


  //  dark theme 

  $("#icon").click(function () {
    $("body").toggleClass("dark-theme");
    $("#icon").toggleClass("fa-sun fa-moon");
    console.log('Dark mode toggled');
  });

  $("#topSticky").click(function () {
   
    console.log('Top Sticky clicked');
  });

  sal({
    threshold: 0.1,
    once: false,
  });

  });

 // ScrollReveal

  // var slideUp = {
  //   distance: '150%',
  //   origin: 'bottom',
  //   opacity: null,
  //   delay: 0,
  //   interval: 80
  // };

  // var nodeList = document.querySelectorAll('.cs-container');
  // ScrollReveal().reveal(nodeList, slideUp);
