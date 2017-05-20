$(document).ready(function(){
  $('#menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass("toggled");
    $('#menu-toggle').toggleClass("toggled");
  });
});