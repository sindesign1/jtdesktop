var Tree = {
	
	init: function() {
		Tree.events();
		
	},

	events: function() {

	},

	numberOfMoreImages: function() {
		var $lastSmallThumb = $(".smallThumbnail:last-child");

		$lastSmallThumb.append("<div class='morePhotos'>+5</div>");
	}

	


}

$(document).ready(function() {
	Tree.init();
});