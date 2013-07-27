/*empty script file*/
(function( $ ) {

	if( $('.email-form-li').length ) {
		var $openTrigger = $('.open');

		$openTrigger.on('click', function( event ) {

			event.preventDefault();

			var $this = $(this);

			$this.next().toggleClass( 'opened' );

		});

	}

})( jQuery );