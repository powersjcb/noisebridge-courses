$('textarea').on('keyup', function() {
  var remaining = 140 - $(this).val().length;
  
  $('.tweet-counter').text(remaining);

  $('input[type=submit]').prop('disabled', remaining < 0);
});