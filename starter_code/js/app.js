$(document).foundation();

// Instagram feeds

var sidebarFeed = new Instafeed({
    get: 'tagged',
    tagName: 'sshphotos',
    clientId: '74b08bf225704ee4bc7b82d334660edd',
    resolution: 'low_resolution',
    limit: 4,
    target: 'instafeedSide'
});
sidebarFeed.run();

// dropdown menus

var submenuID;

$('#menu-news').click(function() {
	submenuID = '#submenu-news';
	dropdownMenu();
});
$('#menu-reviews').click(function() {
	submenuID = '#submenu-reviews';
	dropdownMenu();
});
$('#menu-opinion').click(function() {
	submenuID = '#submenu-opinion';
	dropdownMenu();
});

var dropdownMenu = function () {
	// If this thing is open. close it.
	// If another thing is open. close it. then open my thing
	// else open this thing
	if ($(submenuID).hasClass('isactive')) {
		$(submenuID).slideUp().removeClass('isactive');
	} else if ( $('.submenu').hasClass('isactive') ) {
		$('.submenu').slideUp().removeClass('isactive').delay(600);
		$(submenuID).slideDown().addClass('isactive');
	} else {
		$(submenuID).slideDown().addClass('isactive');
	}	
};

// comments

var url = 'https://ssh-comments.firebaseio.com/ssh-comments.json';
var allComments = [];

// get all the comments

$.get(url, JSON.stringify(), function(data, status) {
	console.log(data);

}).fail(function(data) {
	console.log('not working');
});	


// submit a new comment
$('#comment-button').click(function() {

	// capture the data in the form
	var newComment = {
		name: $('#name').val(),
		email: $('#email').val(),
		website: $('#website').val(),
		comment: $('#comment').val(),
	};
	// if name, email or comment value == '' error
	if (newComment['name'] === '') {
		$('.comment-error').fadeIn().delay(2000).fadeOut();
	} else if (newComment['email'] === '') {
		$('.comment-error').fadeIn().delay(2000).fadeOut();
	} else if (newComment['comment'] === '') {
		$('.comment-error').fadeIn().delay(2000).fadeOut();
	} else {
		// post it to server
		$.post(url, JSON.stringify(newComment), function (data, status) {
			$('form').submit();
			window.location.hostname;
		}).fail(function(){
		})
	}

});
	// add condition if both are empty or highlight field that is wrong