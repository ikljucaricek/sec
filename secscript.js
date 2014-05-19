$(document).ready(function(){
	$('#btntop').mouseenter(function(){
		$(this).animate({width: '+=15px'});
	});
	$('#btntop').mouseleave(function(){
		$(this).animate({width: '-=15px'})
	});
});