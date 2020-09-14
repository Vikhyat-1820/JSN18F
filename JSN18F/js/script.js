$(window).on('load',function(){
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut();

});

/**************************************************

responsive tab for centuries

**************************************************/

$(function(){
	$("#centuries-tabs").responsiveTabs({
		animation:'slide'
	});

});


$(function(){
	$("#test-centuries").owlCarousel({
		items:2,
		autoplay:true,
		loop:true,
		nav:true,
		autoplayHoverPause:true,
		dots:false,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            }
        }
	});

	$("#oneday-centuries").owlCarousel({
		items:2,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		nav:true,
		autoplayHoverPause:true,
		dots:false,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            }
        }
	});
	$('.counter').counterUp({
		delay:10,
		time:3000
	});
	$("#record-part").owlCarousel({
		items:1,
		autoplay:true,
		loop:true,
		nav:true,
		autoplayHoverPause:true,
		dots:false,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

});



/* show and hide white navigation */
$(function(){

	$(window).scroll(function(){
		if( $(window).scrollTop()>50 ){
			// display white navigation
			$("nav").addClass("white-nav-top");
			//dark logo
			$(".navbar-bran img").attr("src","img/logo/logo1_c.png");
		}
		else{
			$("nav").removeClass("white-nav-top");
			$(".navbar-bran img").attr("src","img/logo/logo2_c.png");
			// hide navigation bar
		}
	});


	$(window).on('load',function(){
		if( $(window).scrollTop()>50 ){
			// display white navigation
			$("nav").addClass("white-nav-top");
			//dark logo
			$(".navbar-bran img").attr("src","img/logo/logo1_c.png");
		}
		else{
			$("nav").removeClass("white-nav-top");
			$(".navbar-bran img").attr("src","img/logo/logo2_c.png");
			// hide navigation bar
		}
	});
});

$(function(){
	$("a.smooth-scroll").click(
		function(event){
			event.preventDefault();

			// get section id

			var section_id=$(this).attr("href");
			$("html, body").animate({
				scrollTop: $(section_id).offset().top
			},1250);
		}
	);
});




/***********************MOBILE MENU */


$(function(){
	//show mobile nav
	$("#mobile-nav-open-btn").click(function(){
		$("#mobile-nav").css("height","100%");
	});

	$("#mobile-nav-close-btn, #mobile-nav").click(function(){
		$("#mobile-nav").css("height","0%");
	});
});