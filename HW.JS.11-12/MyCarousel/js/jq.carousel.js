(function($) {
$.fn.carousel = function(opts){

return this.each (function() {
  var $carousel = $('div',this);
  var $elementList = $carousel.find('ul');
  var $items = $elementList.find('li');
  var $single = $items.filter(':first');

  singleWidth = $single.outerWidth();
  visible = Math.ceil($carousel.innerWidth()/singleWidth);
  currentPage = 1;
  pages = Math.ceil($items.length/visible);
  $carousel.scrollLeft(visible);

  function gotoPage(page) {
  var dir = page < currentPage ? -1 : 1;
  n = Math.abs(currentPage - page);
  left = singleWidth * dir * visible * n;

  $carousel.filter(':not(:animated)').animate({scrollLeft:'+='+ left }, 500, function() {
    if (page > pages) {
      page = 1;
    $carousel.scrollLeft(visible);
    } else if (page === 0) {
      page = pages;
    $carousel.scrollLeft(singleWidth * visible * (pages - 1));
    }
    currentPage = page;
  });
}

$('.arrow-left').click(function() {
gotoPage(currentPage - 1);
  return false;
});
$('.arrow-right').click(function() {
gotoPage(currentPage + 1);
  return false;
});
$(this).bind('goto',function (event, page) {
  gotoPage(page);
});
});
};

})(jQuery);
