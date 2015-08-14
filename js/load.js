var Load = {

	init: function() {
		Load.events();
		Load.login();
	},

	events: function() {
		$('body').on('click touch', '#forgotPassword', Load.retrieve);
		$('body').on('click touch', '#switchLogin', Load.login);
		$('body').on('click touch', '#loginBtn', Load.whatPerson);
		$('body').on('click touch', '.personIcon', Load.chooseCentre);
		$('body').on('click touch', '#switchAccountsBtn', Load.whatPerson);
	},

	login: function() {
		$('#loadContainer').load('components.html #loginPage');
	},

	retrieve: function() {
		$('#loadContainer').load('components.html #retrievePage');
	},

	locked: function() {
		$('#loadContainer').load('components.html #lockedPage');
	},

	// errorDetails: function() {
	// 	$('#errorText').css('display', 'block');
	// 	$('.loginContainer').addClass('errorStyle');		//incorrect username or password styling.
	// 	$('.email').addClass('errorEmail');
	// 	$('.password').addClass('errorPassword');
	// },

	whatPerson: function() {
		$('#loadContainer').load('components.html #whatPersonPage');
	},

	chooseCentre: function() {
	    $('#loadContainer').load('components.html #chooseCentrePage');
	    $('#chooseCentreAccordion').foundation('reflow');
	}
}

$(document).ready(function() {
	Load.init();
});