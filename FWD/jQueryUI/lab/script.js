var $button = $('button')
var $dialog = $(".dialog")


$button.on('click', function () {
  $dialog.dialog({
    modal: false,
    buttons: {
      Close: function () {
        $(this).dialog( "close" );
      }
    }
  });
});

$('.menu').menu();


