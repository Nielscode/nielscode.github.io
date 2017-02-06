//$(document).ready(function() {
//
//});

$(document).ready(function() {
	$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
});
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});

