$(function() {
    $('#vdaterange').dateRangePicker();
});

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
    $('#handle, #gplus, #email, #comment').val('');
    $('input:checkbox').removeAttr('checked');
    $('.w-form-done').fadeIn().delay(5000).fadeOut();
});

$('#visitor-form').on('submit',function(){
  var handle = encodeURIComponent($('#vhandle').val());
  var gplus = encodeURIComponent($('#vgplus').val());
  var email = encodeURIComponent($('#vemail').val());
  var origin = encodeURIComponent($('#vorigin').val());
  var daterange = encodeURIComponent($('#vdaterange').val());
  var handleID = "entry.21828550";
  var gplusID = "entry.1407106735";
  var emailID = "entry.1860847224";
  var originID = "entry.346729811";
  var daterangeID = "entry.1260726591";
  var submitURL = (baseURL +
                            handleID + "=" + handle + "&" +
                            gplusID + "=" + gplus + "&" +
                            emailID + "=" + email + "&" +
                            originID + "=" + origin + "&" +
                            daterangeID + "=" + daterange + "&" +
                            submitRef);
  $(this)[0].action=submitURL;
  $('#vhandle, #vgplus, #vemail, #vorigin, #vdaterange').val('');
  $('input:checkbox').removeAttr('checked');
  $('.w-form-done').fadeIn().delay(5000).fadeOut();
});
