var Staff = {
	
	init: function() {
		Staff.events();
	},

	events: function() {
		$('body').on ('click touch', '#editProfile', Staff.editProfile);
		$('body').on ('click touch', '.editProfileImg', Staff.editProfileImg);
		$('body').on ('click touch', '#closeEditProfileImgModal, #editProfileImgBtn', Staff.closeEditProfileImgModal);
		$('body').on ('click touch', '#infoBtn', Staff.emailInfoModal);
		$('body').on ('click touch', '#closeEmailInfoModal, #emailInfoModalBtn', Staff.closeEmailInfoModal);
		$('body').on ('click touch', '#profileChangePW', Staff.showChangePassword);
		$('body').on ('click touch', '#editProfilePassword', Staff.hideChangePassword);
	},

	editProfile: function() {
		var $this = $(this);
		var $inputs = $('.editable');
		var $email = $('#emailValue');
		var $info = $('.profileInfo');
		var $btns = $('.btnContainer');
		var $infoBtn = $('.emailAdd button');
		var $mainMenu = $('#mainMenu');
		var $firstName = "<div class='fname'>" +
							"<div class='profileLabel'>First Name:</div>" +
								"<div class='value editable editValue width-55-perc' contenteditable='true' id='fnameValue'>Hannah</div>" +
						"</div>"
		var $lastName = "<div class='lname'>" +
							"<div class='profileLabel'>Last Name:</div>" +
								"<div class='value editable editValue width-59-perc' contenteditable='true' id='lnameValue'>Brown</div>" +
						"</div>"
		var $editBtn = $('.editText');

						
		$btns.toggle();
		$infoBtn.toggle();
		$inputs.toggleClass('editValue');

		$('#dobValue').toggleClass('width-55-perc');
		$('#genderValue').toggleClass('width-59-perc');
		$('.profileHeader').toggleClass('editProfileHeader');
		$('.profileImg').toggleClass('editProfileImg');
		$('.profileName').toggleClass('none');

		if($inputs.hasClass('editValue')) {
			$inputs.attr('contenteditable', 'true');
			$info.prepend($firstName + $lastName);
			$editBtn.text('cancel');
		} else {
			$inputs.attr('contenteditable', 'false');
			$('.fname, .lname').remove();
			$editBtn.text('edit');
		}

	},

	editProfileImg: function() {
		var $modal = $('#editProfileImgModal');

		$modal.fadeIn();
		$('#blur').addClass('blur');
	},

	closeEditProfileImgModal: function() {
		var $modal = $('#editProfileImgModal');

		$modal.fadeOut();
		$('#blur').removeClass('blur');
	},

	emailInfoModal: function() {
		var $modal = $('#emailInfoModal');

		$modal.fadeIn();
		$('#blur').addClass('blur');
	},

	closeEmailInfoModal: function() {
		var $modal = $('#emailInfoModal');

		$modal.fadeOut();
		$('#blur').removeClass('blur');
	},

	showChangePassword: function() {
		var $profileInfo = $('#profileInfo');
		var $passwordInfo = $('#changePasswordInfo');

		$('.fname, .lname').remove();

		$profileInfo.css('display', 'none');
		$passwordInfo.fadeIn();		
	},

	hideChangePassword: function() {
		var $profileInfo = $('#profileInfo');
		var $passwordInfo = $('#changePasswordInfo');

		$passwordInfo.css('display', 'none');
		$profileInfo.fadeIn();
	}


}

$(document).ready(function() {
	Staff.init()
});