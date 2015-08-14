// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
	accordion: {
		toggleable: true,
	}
});

$(document).foundation('reflow');


$(document).ready(function() {

	var $body = $('body');

	$body.prepend('<script src="js/load.js"></script>');
	$body.prepend('<script src="js/effects.js"></script>');
});