$(function(){

	var keepBgSize = $('#header, #breakImg');


	function resizeBackground() {
		keepBgSize.height($(window).height() + 60)
	};

	$(window).resize(resizeBackground);
})