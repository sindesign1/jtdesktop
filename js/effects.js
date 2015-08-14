var Effects = {
	
	init: function() {
		Effects.events();
	},

	events: function() {
		$('body').on ('click touch', '.centreAccordion > dt', Effects.accordion);
	},

	accordion: function() {
		var allPanels = $('.centreAccordion > dd').hide();
		var $this = $(this);
		var $target = $this.next();

		if($target.hasClass('accActive')) {
			$target.removeClass('accActive').slideUp();
		} else {
			allPanels.removeClass('accActive').slideUp();
			$target.addClass('accActive').slideDown();
		}

		return false;

	},


}

$(document).ready(function() {
	Effects.init();
});