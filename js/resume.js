$(document).ready (function () {
	
	//store the $$expanders and $$expandables on the page
	var $expanders = $(".js-expander");
	var $expandables = $(".js-expandable");
	
	// When js loads hide $expandables and set proper aria states
	$expanders.attr("aria-expanded", "false");
	$expandables.attr("aria-hidden", "true").hide();
	
	// When one of the $expanders is clicked...
	$expanders.click (function () {
		// Store the clicked expander and its sibling expandable
		var $expander = $(this);
		var $expandable = $(this).next(".js-expandable");
		
		$expanders.not($expander).attr("aria-expanded", "false");
		$expandables.not($expandable).attr("aria-hidden", "true").slideUp(400);

		// If the clicked $expander is not expanded, then expand the $expandable and set proper aria states
		if ($expander.attr("aria-expanded") === "false") {
			$expander.attr("aria-expanded", "true");
			$expandable.attr("aria-hidden", "false").slideDown(400);

		// If the clicked $expander is already expanded, then close the $expandable and set proper aria states
		} else if ( $expander.attr("aria-expanded") === "true") {
			$expander.attr("aria-expanded", "false");
			$expandable.attr("aria-hidden", "true").slideUp(400);
		}
	});
});