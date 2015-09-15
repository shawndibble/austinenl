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
