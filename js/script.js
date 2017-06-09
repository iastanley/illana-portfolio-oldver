$(document).ready(function(){
  $('#menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass("toggled");
    $('#menu-toggle').toggleClass("toggled");
  });

  //adding smooth scrolling to sidebar links
  $('#sidebar-wrapper a').on('click', function(event) {
    if (this.hash) {
      event.preventDefault();
      smoothScroll(this.hash);
    }
    //remove selected class from all links
    $('#sidebar-wrapper a').removeClass('selected');
    //add selected class to clicked link
    $(this).addClass('selected');
    if (document.documentElement.clientWidth < 768) {
      console.log('This is working!!!');
    }
  });

  //add scrolling to arrow on home section
  $('.intro-content a').on('click', function(event) {
    if (this.hash) {
      event.preventDefault();
      smoothScroll(this.hash);
    }
    $('#sidebar-wrapper a').removeClass('selected');
    $('a[href="#portfolio"]').addClass('selected');
  });

});

function smoothScroll(hash) {
  $('body, html').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){
    window.location.hash = hash;
  });
}
