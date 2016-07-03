$(function () {
$('.tooltip').hide();
$('.field').hover(function (event) {
var $input = $(event.target);
$input.siblings('.tooltip').show(500);
},
(function(event){
var $input = $(event.target);
$input.siblings('.tooltip').animate({height: 'toggle'}, 1000);
}));
$('.help').click(function () {
$('.tooltip').show();
});

$('.tab_item').not(':first').hide();
$('.container .tab').click(function() {
	$('.container .tab').removeClass('active').eq($(this).index()).addClass('active');
	$('.tab_item').hide().eq($(this).index()).fadeIn();
}).eq(0).addClass('active');

});
