$(document).ready(function(){
  //This will cause images to show above the product links when a mouse hovers.
  $('.product-bar a').hover(function () {
    $(this).siblings().toggleClass('show-image');
  });
  //Setting up the billboard transitions
  $('#billboard-background').addClass('billboard-default');
  $('#billboard-one').addClass('current-billboard-button');
  $('#billboard-one').click(function () {
    $('#billboard-two').removeClass('current-billboard-button');
    $('#billboard-three').removeClass('current-billboard-button');
    $('#billboard-one').addClass('current-billboard-button');
    $('#billboard-background').removeClass('billboard-default');
    $('#billboard-background').removeClass('billboard-two');
    $('#billboard-background').removeClass('billboard-three');
    $('#billboard-background').addClass('billboard-one');
  });
  $('#billboard-two').click(function () {
    $('#billboard-two').addClass('current-billboard-button');
    $('#billboard-three').removeClass('current-billboard-button');
    $('#billboard-one').removeClass('current-billboard-button');
    $('#billboard-background').removeClass('billboard-default');
    $('#billboard-background').removeClass('billboard-three');
    $('#billboard-background').removeClass('billboard-one');
    $('#billboard-background').addClass('billboard-two');
  });
  $('#billboard-three').click(function () {
    $('#billboard-two').removeClass('current-billboard-button');
    $('#billboard-three').addClass('current-billboard-button');
    $('#billboard-one').removeClass('current-billboard-button');
    $('#billboard-background').removeClass('billboard-default');
    $('#billboard-background').removeClass('billboard-one');
    $('#billboard-background').removeClass('billboard-two');
    $('#billboard-background').addClass('billboard-three');
  });
});
