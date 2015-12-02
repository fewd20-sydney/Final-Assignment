$( document ).ready(function() {
	
	document.getElementsByTagName("li")[0].addEventListener("click",function(){
	
		if(!this.parentNode.getAttribute("class")){
			this.parentNode.setAttribute("class","slideDown");
		}
		else{
			this.parentNode.removeAttribute("class");
		}
	})

	$(".portfolio").click(function() {
		$(".more1").show();
		$(".more2").show();
		$(".more3").show();
		$(".more4").show();
		$(".more5").show();
	});

	$(".more1").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more1").hide();
		$(".hidden1").slideDown();
		$(".less1").show();
		$(".replace-timeline").show();
		$(".more-timeline").show();
	});

	$(".less1").click(function() {
		$(".more1").show();
		$(".hidden1").slideUp();
		$(".less1").hide();
	});

	$(".more2").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more2").hide();
		$(".hidden2").slideDown();
		$(".less2").show();
		$(".replace-timeline").show();
		$(".more-timeline").show();
	});

	$(".less2").click(function() {
		$(".more2").show();
		$(".hidden2").slideUp();
		$(".less2").hide();
	});

	$(".more3").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more3").hide();
		$(".hidden3").slideDown();
		$(".less3").show();
		$(".replace-timeline").show();
		$(".more-timeline").show();
	});

	$(".less3").click(function() {
		$(".more3").show();
		$(".hidden3").slideUp();
		$(".less3").hide();
	});

	$(".more4").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more4").hide();
		$(".hidden4").slideDown();
		$(".less4").show();
		$(".replace-timeline").show();
		$(".more-timeline").show();
	});

	$(".less4").click(function() {
		$(".more4").show();
		$(".hidden4").slideUp();
		$(".less4").hide();
	});

	$(".more5").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more5").hide();
		$(".hidden5").slideDown();
		$(".less5").show();
		$(".replace-timeline").show();
		$(".more-timeline").show();
	});

	$(".less5").click(function() {
		$(".more5").show();
		$(".hidden5").slideUp();
		$(".less5").hide();
	});

	//timeline
	$(".more-timeline").click(function() {
		$(".hide").hide();
		$(".more").show();
		$(".more-timeline").hide();
		$(".timeline").slideDown();
		$(".lesstimeline").show();
		$(".replace-timeline").hide();
	});

	$(".less-timeline").click(function() {
		$(".more-timeline").show();
		$(".timeline").slideUp();
		$(".less-timeline").show();
		$(".replace-timeline").show();
	});
	//timeline

});
