$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	/*$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		margin:30,
		nav: true,
		dots: false,
		navigationText : ["",""],
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			991:{
				items:3
			},
			2000:{
				items:4
			}
		}

	});

	$(window).scroll(function() {
      if ($(this).scrollTop() > 80) {
            $('header').addClass('header_fixed');
           
            
        }
        if ($(this).scrollTop() < 80 && $('header').hasClass('header_fixed')) {
            $('header').removeClass('header_fixed');
           

        }
    });

    $('.open').click(function(e) {
		e.preventDefault();
		$('.mobile_menu').addClass('mobile_menu_active');
	});
	$('.close').click(function(e) {
		e.preventDefault();
		$('.mobile_menu').removeClass('mobile_menu_active');
	});

	$('.popup_link').magnificPopup({
    items: {
      src: '.popup_window'
    },
    type: 'inline'
  });

});

ymaps.ready(init);
    var myMap,
    myPlacemark;;

    function init(){     
        myMap = new ymaps.Map("Map", {
            center: [59.9328,30.4179],
            zoom: 16
        });
        myPlacemark = new ymaps.Placemark([59.9328,30.4179],
         { hintContent: 'Финвал', balloonContent: 'Компания' });
        myMap.geoObjects.add(myPlacemark);
    }

	$('.tel_form').mask("+7 (999)-999-99-99"); /*

});
