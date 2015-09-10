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
		$('body').on('click touch', '.accordionList', Load.mainTemplate);
		$('body').on('click touch', '#albumsBtn', Load.albums);
		$('body').on('click touch', '#viewProfileBtn', Load.staffProfile);
		$('body').on('click touch', '#treeBtn, #topTreeBtn', Load.tree);
		$('body').on('click touch', '.feedItem', Load.viewPost);
		$('body').on('click touch', '#imagesBtn', Load.allImages);
		$(document).ajaxStop(Load.ajaxStop);
	},

	melonBackground: function() {
		$('body').removeClass();
		$('body').addClass('melonBackground');
	},

	greyBackground: function() {
		$('body').removeClass();
		$('body').addClass('greyBackground');
	},

	login: function() {
		Load.melonBackground();
		$('#loadContainer').load('components.html #loginPage');
	},

	retrieve: function() {
		Load.melonBackground();
		$('#loadContainer').load('components.html #retrievePage');
	},

	locked: function() {
		Load.melonBackground();
		$('#loadContainer').load('components.html #lockedPage');
	},

	// errorDetails: function() {
	// 	$('#errorText').css('display', 'block');
	// 	$('.loginContainer').addClass('errorStyle');		//incorrect username or password styling.
	// 	$('.email').addClass('errorEmail');
	// 	$('.password').addClass('errorPassword');
	// },

	whatPerson: function() {
		Load.melonBackground();
		$('#loadContainer').load('components.html #whatPersonPage');
	},

	chooseCentre: function() {
		Load.melonBackground();
	    $('#loadContainer').load('components.html #chooseCentrePage');
	    $('#chooseCentreAccordion').foundation('reflow');
	},

	mainTemplate: function() {
		Load.greyBackground();
		// Load.getUserDetails();
		$('#loadContainer').load('components.html #mainTemplate', function(){
			Load.tree();
		});
	},

	albumModals: function() {
		$('#modals').load('components.html #albumModals');
	},

	albums: function() {
		Load.albumModals();
		Effects.removeMenuClass();
		$('#mainContainer').load('components.html #albums');
		$('#headerTitle').text('Albums');
		$(this).addClass('melonColour');
	},

	staffProfile: function() {
		Load.staffProfileModals();
		$('#mainContainer').load('components.html #profile');
		$('#headerTitle').text('Profile');
	},

	staffProfileModals: function() {
		$('#modals').load('components.html #staffProfileModals');
	},

	tree: function() {
		Effects.removeMenuClass();
		$('#mainContainer').load('components.html #tree');
		$('#treeBtn').addClass('melonColour');
		// Tree.numberOfMoreImages();
		$('#headerTitle').text('Classroom Name');
	},

	viewPost: function() {
		$('#mainContainer').load('components.html #viewPost');
	},

	allImages: function() {
		Effects.removeMenuClass();
		$('#mainContainer').load('components.html #images');
		$('#imagesBtn').addClass('melonColour');
	},

	ajaxStop: function() {
		Tree.numberOfMoreImages();
	}

	// getUserDetails: function() {
	// 	console.log('ajax function got called');
	// 	$.when(
	// 		$.ajax({
	// 			url: 'php/json.php',
	// 			type: 'GET',
	// 			dataType: 'jsonp'
	// 		})
	// 	).done(function(response){
	// 		console.log(response);
	// 		var id = response.user.user_id;
	// 		var title = response.user.title;
	// 		var firstName = response.user.fname;
	// 		var lastName = response.user.lname;
	// 		var email = response.user.email;

	// 		$('#usersName').text(title +' '+firstName);
	// 		$('#usersEmail').text(email);

	// 	});
	// }
}

// $(document).ajaxStop(function(){
// 	Tree.numberOfMoreImages();
// });

$(document).ready(function() {
	Load.init();
});