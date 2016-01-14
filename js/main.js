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

/*************** SHOWING AND REMOVING STICKY TEXT **********************/
//show text when sticky
$('.blog-nav').on('sticky-start', function(){
	$('.description').html('The color changes when you begin to scroll');

});
//remove text when sticky
$('.blog-nav').on('sticky-end', function(){
	$('.description').html('');
});


$('.blog-description').sticky({topSpacing:50, padding: 20});
$('.blog-description').on('sticky-start', function(){
	$(this).append(' <a href="view-source:http://getbootstrap.com/examples/blog/" class="nav-link"> View Source</a>');
});
$('.blog-description').on('sticky-end', function(){
	$('.nav-link').remove();
});


});