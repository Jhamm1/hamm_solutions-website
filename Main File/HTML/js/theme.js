/*
Project:	    Sabo - Multipurpose Business and Corporate HTML5 Template.
Version:	    1.0.0
Assigned to:	Themeforest
Primary use:	
 */

	

(function ($) {
    "use strict";
	
	//---------------------
// WINDOW LOAD FUCNTION
//---------------------

jQuery(window).on('load', function() {

	prettyPhoto();

	preload();
	
	owlSlider();
	
	progressBar();
	
	bgImage();
	
	
	fullscreen();

	colEqheight();
	


	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	// Popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
		
	// Form Focus 
	$("input").on('focus',function(){
	
		$(this).parent().addClass("input-focus");
	
	}).blur(function(){
		
		$(this).parent().removeClass("input-focus");
	})
	

});	


//-----------------------
// WINDOW RESIZE FUCNTION
//-----------------------

function resizeend() {

	if (new Date() - rtime < delta) {

		setTimeout(resizeend, delta);

	} else {

		timeout = false;

		initIsotopeGrid();

		colEqheight();

	} 

}
	
	// Pre Loader
function preload(){
	$(".loader-inner").delay(100).fadeOut();
	$("#pageloader").delay(100).fadeOut("slow")
}


// Progress 
function progressBar() {		

	if ($('.progress-bar').length) {

		$('.progress-bar').each(function() {

			$(this).appear(function(){

			 var datavl = $(this).attr('data-percentage');

			 $(this).animate({ "width" : datavl + "%"}, '1200');

			 $(this).find('span').fadeIn(4000);

			 $(this).css('background', $(this).attr('data-bg'));

			})

		});

		$('.progress').each(function() {

			var dathgt = $(this).attr('data-height');

			$(this).css({'line-height': dathgt + "px", 'height': dathgt});

		});

	}

} 


// Pretty Photo
function prettyPhoto() {

	"use strict";
	
	if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
	
	 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', social_tools: false, deeplinking: false});
	
	}

}

// Background Image
function bgImage(){		

	var pageSection = $("section,.bg-img,.img-bg");

	pageSection.each(function(indx){

		if ($(this).attr("data-background")){

			$(this).css("background-image", "url(" + $(this).data("background") + ")");

		}

	});

}


// Fullscreen
function fullscreen() {
	"use strict";
	if ($(window).width() > 1025) {
		$('.full-screen, .full-screen .item').css({ 'height': $(window).height() });
			$(window).on('resize', function() {
			$('.full-screen, .full-screen .item').css({ 'height': $(window).height() });
		});
	}
}


// Owl Slider
 function owlSlider() {


		if ($('.owl-carousel').length) {		    

			  $(".owl-carousel").each(function (index) {

				var autoplay = $(this).data('autoplay');

				var timeout = $(this).data('delay');

				var slidemargin = $(this).data('margin');

				var slidepadding = $(this).data('stagepadding');

				var items = $(this).data('items');

				var animationin = $(this).data('animatein');

				var animationout = $(this).data('animateout');

				var itemheight = $(this).data('autoheight');

				var itemwidth = $(this).data('autowidth');

				var itemmerge = $(this).data('merge');

				var navigation = $(this).data('nav');

				var pagination = $(this).data('dots');

				var infinateloop = $(this).data('loop');

				var itemsdesktop = $(this).data('desktop');

				var itemsdesktopsmall = $(this).data('desktopsmall');

				var itemstablet = $(this).data('tablet');

				var itemsmobile = $(this).data('mobile');

				$(this).on('initialized.owl.carousel changed.owl.carousel',function(property){

					var current = property.item.index;

					$(property.target).find(".owl-item").eq(current).find(".animated").each(function(){

						var elem = $(this);

						var animation = elem.data('animate');

						if ( elem.hasClass('visible') ) {

							elem.removeClass( animation + ' visible');

						}

						if ( !elem.hasClass('visible') ) {

							var animationDelay = elem.data('animation-delay');

							if ( animationDelay ) {			

								setTimeout(function(){

								 elem.addClass( animation + " visible" );

								}, animationDelay);				

							} else {

								elem.addClass( animation + " visible" );

							}

						}

					});					

				}).owlCarousel({ 

					autoplay: autoplay,

					autoplayTimeout:timeout,

					items : items,

					margin:slidemargin,

					autoHeight:itemheight,

					animateIn: animationin,

					animateOut: animationout,

					autoWidth:itemwidth,

					stagePadding:slidepadding,

					merge:itemmerge,

					nav:navigation,

					dots:pagination,

					loop:infinateloop,

					responsive:{

						479:{

							items:itemsmobile,

						},

						768:{

							items:itemstablet,

						},

						980:{

							items:itemsdesktopsmall,

						},

						1199:{

							items:itemsdesktop,

						}

					}

				});

			});

		}  


}



// Column Equal Height
function equalHeight(group) {

	var tallest = 0;

	group.each(function() {

		var thisHeight = $(this).outerHeight();

		if(thisHeight > tallest) {

			tallest = thisHeight;

		}

	});

	group.css("height", tallest);

}

function colEqheight() {

	equalHeight($(".row > .col-eq-height"));

} 
   //=======================================================
    // filter
    //=======================================================

    if ($('.filterCont').length > 0) {
        $('.filterCont').themeWar();
    }

    //=======================================================
    // magnificPopup
    //=======================================================
    if ($('a.popUp').length > 0) {
        $("a.popUp").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
// Scroll top top
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).on('scroll',function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});


	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


	
})(jQuery);
