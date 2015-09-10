var Effects = {
	
	init: function() {
		Effects.events();
	},

	events: function() {
		$('body').on('click touch', '.centreAccordion > dt', Effects.accordion);
		$('body').on('click touch', '#searchBtn', Effects.openSearchBar);
		$('body').on('click touch', '#profileBtn', Effects.openProfileDropdown);
		$('body').on('click touch', '.searchInput', Effects.searchInput);
		$('html').on('click touch', 'body', Effects.hideEffects);
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

	openSearchBar: function(e) {
		var $searchBar = $('.searchBar');
		var $input = $('.searchInput');

		// e.stopPropagation();
		e.stopImmediatePropagation();

		if($searchBar.hasClass('open')) {
			$input.animate({margin: "0px", padding: "0px"}, 500);
			$searchBar.animate({width: "0px"}, 500).removeClass('open');
		} else {
			e.stopPropagation();
			$input.animate({margin: "0px", padding: "7px"}, 500);
			$searchBar.animate({width:"230px"}, 500).addClass('open');
			$input.focus();
		}
	},

	searchInput: function(e) {
		e.stopPropagation();
	},

	openProfileDropdown: function(e) {
		var $dropdown = $('.profileDropDown');

		e.stopPropagation();

		$dropdown.slideToggle();
	},

	hideEffects: function() {
		var $dropdown = $('.profileDropDown');
		var $searchBar = $('.searchBar');
		var $input = $('.searchInput');

		$input.animate({margin: "0px", padding: "0px"}, 500);
		$searchBar.animate({width: "0px"}, 500).removeClass('open');

		$dropdown.slideUp();
	},

	removeMenuClass: function() {
		$('.sidebar ul li').removeClass();
	}
}

$(document).ready(function() {
	Effects.init();
});