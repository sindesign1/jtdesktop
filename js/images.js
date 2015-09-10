var Images = {
	
	init: function() {
		Images.events();
	},

	events: function() {
		$('body').on('click touch', '#selectImages', Images.selectBtn);
		$('body').on('click touch', '#images .mainImage img', Images.singleImage);
		$('body').on('click touch', '#images .mainImage', Images.selectImages);
		$('body').on('click touch', '#imagesBackBtn', Images.backBtn);
	},

	selectBtn: function() {
		var $mainMenu = $('#mainMenu');
		var $editMenu = $('#editMenu');
		var $selectBtn = $('.selectText');

		if($mainMenu.css("display") == "none") {
			$mainMenu.fadeIn();
			$editMenu.css('display', 'none');
			$('#headerTitle').text('All Images');
			$selectBtn.html('select');
			$('#images .mainImage').removeClass('selected');
		} else {
			$mainMenu.css('display', 'none');
			$editMenu.fadeIn();
			$selectBtn.html('cancel');
			$('#headerTitle').text('Select Images');
		}
	},

	singleImage: function() {
		var $this = $(this);
		var $mainMenu = $('#mainMenu');
		var $allImages = $('.image');
		var selectedImage = $this.attr('src');
		var $imageContainer = $('#images');
		var $textContainer = $('.editContainer');
		var $selectBtn = $('.selectText');
		

		if($mainMenu.css("display") != "none") { //if select is clicked
			$allImages.hide();
			console.log(selectedImage);
			$imageContainer.append('<div class="singleImage"><img src="' + selectedImage + '"/></div>');
			$textContainer.attr("id", "imagesBackBtn");
			$selectBtn.text('back');

			$('.singleImage').prepend('<div class="imageInfo"><div class="time">(created_at)</div></div>');
			if($('#singleImgTag').hasClass('.imageTags')) {
	    		$('.imageInfo').append('<div class="">TEST</div>');
	    	}
		}
	},

	selectImages: function() {
		var $this = $(this);
	    var $mainMenu = $('#mainMenu');
	    var numSelected = 0;

	    if($mainMenu.css("display") == "none") { //if select is clicked
	    	$this.toggleClass('selected');

	     	numSelected = $('.selected').length;

	    	$('#headerTitle').text(numSelected + ' ' + 'images selected');
	    }

	    console.log(numSelected);

	},

	backBtn: function() {
		Load.allImages();
	}

	

}

$(document).ready(function() {
	Images.init();
});