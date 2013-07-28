(function( $ ) {

	if( $('.email-form-li').length ) {
		var $emailFormLi = $('.email-form-li'),
			$emailFormWrapper = $('.email-form-wrapper'),
			$openTrigger = $emailFormLi.find('.open');

		$openTrigger.on('click', function( event ) {

			event.preventDefault();

			$emailFormWrapper.toggleClass( 'opened' );

		});

	}

})( jQuery );