jQuery.noConflict();
(function ($) {
  Drupal.clarityStops = {};

  $(document).ready(function ($) {
         
  	var centerIn = Drupal.settings.clarity_stops.inCenterIndex;
  	var centerOut = Drupal.settings.clarity_stops.outCenterIndex;
          
    $('#inbound').click(function(){
      $('#inbound').addClass('active');
      $('#outbound').removeClass('active');
      $('#table-in').css('display', 'block');
      $('#table-out').css('display', 'none');
      SlyIn.reload();
    });
    $('#outbound').click(function(){
      $('#outbound').addClass('active');
      $('#inbound').removeClass('active');
      $('#table-in').css('display', 'none');
      $('#table-out').css('display', 'block');
      SlyOut.reload();
    });
  				
		var $frameIn  = $('#inbound-slides');
		var $slideeIn = $frameIn.children('ul').eq(0);
		var $wrapIn   = $frameIn.parent();

		// Call Sly on frame
		var SlyIn = new Sly($frameIn,{
			horizontal: 1,
			itemNav: 'centered',
			startAt: centerIn, 
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrapIn.find('.prev'),
			next: $wrapIn.find('.next')
		});
		
		var $frameOut  = $('#outbound-slides');
		var $slideeOut = $frameOut.children('ul').eq(0);
		var $wrapOut   = $frameOut.parent();

		// Call Sly on frame
		var SlyOut = new Sly($frameOut,{
			horizontal: 1,
			itemNav: 'centered',
			startAt: centerOut,
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrapOut.find('.prev'),
			next: $wrapOut.find('.next')
		});
		
		SlyIn.init();
		SlyOut.init();

  }); // end document ready

})(jQuery);
