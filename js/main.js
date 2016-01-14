$(document).ready(function(){

// Animation Transistions
$('.animsition').animsition({

	inClass: 'fade-in-right-lg',
	outClass: 'fade-out-right-lg',
	linkElements: '.sport-link'

});
	
// Add Static Top Nav
$('.blog-nav').sticky({

});

$('.blog-nav').on('sticky-start', function(){
	$('.description').html('The color changes when you begin to scroll');
});
$('.blog-nav').on('sticky-end', function(){
	$('.description').html('');
});

});