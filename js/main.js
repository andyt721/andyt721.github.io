$(document).ready(function(){
  //This will cause images to show above the product links when a mouse hovers.
  $('.product-bar a').hover(function () {
    $(this).siblings().toggleClass('show-image');
  });
  $('#billboard-one').click(function () {
    $('.billboard-background').removeClass('billboard-two');
    $('.billboard-background').removeClass('billboard-three');
    $('.billboard-background').addClass('billboard-one');
  });
  $('#billboard-two').click(function () {
    $('.billboard-background').removeClass('billboard-three');
    $('.billboard-background').removeClass('billboard-one');
    $('.billboard-background').addClass('billboard-two');
  });
  $('#billboard-three').click(function () {
    $('.billboard-background').removeClass('billboard-one');
    $('.billboard-background').removeClass('billboard-two');
    $('.billboard-background').addClass('billboard-three');
  });
});
