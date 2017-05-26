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
      var hash = this.hash;
      $('body, html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
