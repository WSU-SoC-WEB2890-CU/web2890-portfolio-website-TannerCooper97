//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap";
import 'bootstrap/js/dist/carousel';

$(document).ready(function(){
	
	$('.element-card').on('click', function(){
		
		if ( $(this).hasClass('open') ) {
			$(this).removeClass('open');
		} else {
			$('.element-card').removeClass('open');
			$(this).addClass('open');
		}
		
	});
	
});