(function( $ ) {

	if( $('.email-form-li').length ) {
		var $openTrigger = $('.open');

		$openTrigger.on('click', function( event ) {

			$this = $(this);

			event.preventDefault();

			$this.next().toggleClass( 'opened' );

		});

	}

})( jQuery );