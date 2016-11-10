$(function(){

  var $w = $(window)
  var $header = $('#header');
  var $breakImg = $('#breakImg');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $header.css({'top': 'auto', 'bottom': 0});
    $breakImg.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackgroundHeader);
    $w.resize(sizeBackgroundBreakImg);

    sizeBackgroundHeader();
    sizeBackgroundBreakImg();
  }

  function sizeBackgroundHeader() {
     $header.height(screen.height*.6);
  }

  function sizeBackgroundBreakImg() {
     $breakImg.height(screen.height*.32);
  }
})