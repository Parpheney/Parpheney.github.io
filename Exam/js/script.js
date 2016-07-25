$(function () {
  $('.bxslider').bxSlider({
          mode: 'fade',
         captions: true
    });

        function grid() {
            var $grid = $('.grid');
            $grid.imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    singleMode: false,
	                  isResizable: true,
                    columnWidth: function( containerWidth ) {
                        return ( containerWidth / 3 - 10);
                    },
                    gutterWidth: 10
                });
            });
        }

        function search() {
            $('.ideas').find('div').remove();
            var $keyWord = $('.search__field').val();

            $.ajax({
                url: 'https://pixabay.com/api/?key=2754477-e73f4db5ecd0f0e55c2e045a4&q=' + $keyWord + '&image_type=photo',
                dataType: 'jsonp',
                success: function (data) {

                    var $html = $('#container').html();
                    var $content = tmpl($html, data);
                    $('.ideas').append($content);
                    grid();
                },
                error: function () {
                    alert('Error!');
                }
            });
        }

        search();

        $('.search__button').on('click', function (e) {
            e.preventDefault();
            search();
            $('.search__field').val('');
        });
    }
);
