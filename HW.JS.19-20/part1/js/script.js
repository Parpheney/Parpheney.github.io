$(function() {
    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='slider__nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".slider__nav").append("<span rel='"+$(this).index()+"'><span rel='"+$(this).index()+"'></span></span>");
            $(this).addClass("slider"+$(this).index());
        });
        $(".slider span:nth-of-type(1)").find("span:nth-of-type(1)").addClass("slider__nav--active");
    });
    function sliderJS (obj, sl) {
        var ul = $(sl).find("ul");
        var bl = $(sl).find("li.slider"+obj);
        var step = $(bl).width();
        $(ul).animate( {
            marginLeft: "-" + step * obj
        }, 500);
    }
    $(".slider .slider__nav span").on("click", function() {
        var sl = $(this).closest(".slider");
        $(sl).find("span").removeClass("slider__nav--active");
        $(this).addClass("slider__nav--active");
        var obj = $(this).attr("rel");
        sliderJS(obj, sl); 
        return false;
    });
    var $flag = false;

    $('.banner__toggle').on('click', function() {
            if (!$flag) {
                $('.banner__toggle').html('+');
                $('.banner__toggle').removeClass('banner__active');
                $('.banner__item__title').removeClass('banner__active');
                $('.banner__text').slideUp();
                $(this).parent().find('.banner__text').slideDown();
                $(this).html('-');
                $(this).addClass('banner__active');
                $(this).parent().find('.banner__item__title').addClass('banner__active');
                $flag = true;
            } else {
                $(this).parent().find('.banner__text').slideUp();
                $(this).html('+');
                $(this).removeClass('banner__active');
                $(this).parent().find('.banner__item__title').removeClass('banner__active');
                $flag = false;
            }
});
});
