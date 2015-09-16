$('#input-form').on('submit',function(){
    var areas = [];
    $(':checkbox:checked').each(function(i){
      areas[i] = $(this).val();
    });
    var handle = encodeURIComponent($('#handle').val());
    var gplus = encodeURIComponent($('#gplus').val());
    var email = encodeURIComponent($('#email').val());
    var area = encodeURIComponent(areas.join());
    var comment = encodeURIComponent($('#comment').val());
    var handleID = "entry.21828550";
    var gplusID = "entry.1407106735";
    var emailID = "entry.1860847224";
    var areaID = "entry.379451938";
    var commentID = "entry.225794266";
    var baseURL = 'https://docs.google.com/forms/d/1FIEZ--oH5VGJa2pvjG9WVrSn7ojst4mxZZ6OTsP7w5M/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL +
                              handleID + "=" + handle + "&" +
                              gplusID + "=" + gplus + "&" +
                              emailID + "=" + email + "&" +
                              areaID + "=" + area + "&" +
                              commentID + "=" + comment + "&" +
                              submitRef);
    $(this)[0].action=submitURL;
    $('input, textarea').val('');
    $('input:checkbox').removeAttr('checked');
    $('.w-form-done').fadeIn().delay(5000).fadeOut();;
});

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
