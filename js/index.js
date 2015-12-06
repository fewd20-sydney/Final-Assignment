/* Sort through work */

$('#websites').click(function(){
	$('.website').fadeIn("slow");
	$('.tshirt').fadeOut("slow");
	$('.edm').fadeOut("slow");
	$('.print').fadeOut("slow");
})

$('#tshirts').click(function(){
	$('.website').fadeOut("slow");
	$('.tshirt').fadeIn("slow");
	$('.edm').fadeOut("slow");
	$('.print').fadeOut("slow");
})

$('#print').click(function(){
	$('.website').fadeOut("slow");
	$('.tshirt').fadeOut("slow");
	$('.edm').fadeOut("slow");
	$('.print').fadeIn("slow");
})

$('#all').click(function(){
	$('.website').fadeIn("slow");
	$('.tshirt').fadeIn("slow");
	$('.edm').fadeIn("slow");
	$('.print').fadeIn("slow");
})


/* Slide to top */

$('#top').click(function() {
	event.preventDefault(); 

   var scroll_pos=(0);       

   $('html, body').animate({scrollTop:(scroll_pos)}, '2000');

});