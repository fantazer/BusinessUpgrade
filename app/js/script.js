$(document).ready(function () {

// slider
$('.b-slider-items').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 500,
		dots:true,
		arrows:false,
		rows:0,
		adaptiveHeight: true,
		responsive: [

    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
				slidesToScroll:1,
      }
    }
  ],
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		}
	}).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});

	// === custom arrow el ===
	$('.b-slider-control--right').click(function(){
		$(this).closest(".b-slider-wrap").find(".b-slider-item").slick('slickNext');
	});

	$('.b-slider-control--left').click(function(){
		$(this).closest(".b-slider-wrap").find(".b-slider-item").slick('slickPrev');
	});
	// custom arrow el === end
// slider === end

	AOS.init({
 	offset: 300,
	 disable: 'mobile',
	 disable: function () {
			var maxWidth = 1024;
			return window.innerWidth < maxWidth;
		}
	});

});
