
  /***************** Waypoints ******************/

$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
   $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp delay-05s');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated zoomIn delay-1s');
  }, {
    offset: '75%'
  });
    $('.wp7').waypoint(function() {
    $('.in1').addClass('animated fadeInRight');
    $('.in2').addClass('animated fadeInRight delay-05s');
    $('.in3').addClass('animated fadeInRight delay-1s');
    $('.in4').addClass('animated fadeInRight delay-1-5s');
    $('.in5').addClass('animated fadeInRight delay-2s');
    $('.in6').addClass('animated fadeInUp delay-2s');
  }, {
    offset: '75%'
  });

});



  $(document).ready(function() {
  var nice = $("html").niceScroll();  // The document page (body)
    $("#boxscroll").niceScroll({touchbehavior:true}); // First scrollable DIV
  });



      $( function() {
        $( '#cbp-qtrotator' ).cbpQTRotator();
      } );

  $(function(){
    $('#Grid').mixitup();
});


$(document).ready(function() {

  $('.image-popup-no-margins').magnificPopup({type:'image'});

  $('.popup-with-form').magnificPopup({
  	type: 'inline',
  	preloader: false,
  	focus: '#name',
  
  	// When elemened is focused, some mobile browsers in some cases zoom in
  	// It looks not nice, so we disable it:
  	callbacks: {
  		beforeOpen: function() {
  			if($(window).width() < 700) {
  				this.st.focus = false;
  			} else {
  				this.st.focus = '#name';
  			}
  		}
  	}
  });

});




        // Set options
        var options = {
            offset: '#showHere',
            classes: {
                clone:   'banner--clone',
                stick:   'banner--stick',
                unstick: 'banner--unstick'
            }
        };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();


$('.parallax-back').stellar();
$('.header-parallax').stellar();


    $(function(){

      $.stellar({

        horizontalScrolling: false,

        verticalOffset: 40

      });

    });
