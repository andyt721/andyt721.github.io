$(document).ready(function(){
  //This will cause images to show above the product links when a mouse hovers.
  $('.product-bar').hover(function () {
    $(this).siblings().toggleClass('show-image');
  });

  //Setting up the billboard transitions
  let currentBillboard = 1;
  $('#billboard-background').addClass('billboard-one');
  $('#billboard-one').addClass('current-billboard-button');
  $('#billboard-one').click(function() {
    switch (currentBillboard) {
      case 1:
        break;
      case 2:
        $('#billboard-two').removeClass('current-billboard-button');
        $('#billboard-one').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-two');
        $('#billboard-background').addClass('billboard-one');
        break;
      case 3:
        $('#billboard-three').removeClass('current-billboard-button');
        $('#billboard-one').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-three');
        $('#billboard-background').addClass('billboard-one');
        break;
      default:
        break;
    }
    currentBillboard = 1;
  });
  $('#billboard-two').click(function() {
    switch (currentBillboard) {
      case 1:
        $('#billboard-one').removeClass('current-billboard-button');
        $('#billboard-two').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-one');
        $('#billboard-background').addClass('billboard-two');
        break;
      case 2:
        break;
      case 3:
        $('#billboard-three').removeClass('current-billboard-button');
        $('#billboard-two').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-three');
        $('#billboard-background').addClass('billboard-two');
        break;
      default:
        break;
    }
    currentBillboard = 2;
  });
  $('#billboard-three').click(function() {
    switch (currentBillboard) {
      case 1:
        $('#billboard-one').removeClass('current-billboard-button');
        $('#billboard-three').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-one');
        $('#billboard-background').addClass('billboard-three');
        break;
      case 2:
        $('#billboard-two').removeClass('current-billboard-button');
        $('#billboard-three').addClass('current-billboard-button');
        $('#billboard-background').removeClass('billboard-two');
        $('#billboard-background').addClass('billboard-three');
        break;
      case 3:
        break;
      default:
        break;
    }
    currentBillboard = 3;
  });
});
