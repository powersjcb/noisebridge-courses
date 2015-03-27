
var $dialog = $('.dialog')
var $dialogForm = $(".dialog form")

$dialogForm.validate({
  rules: {

    password: {
      minlength: 8
    },

    password_confirmation: {
      equalTo: "#password"
    } 
  }
});

// Add signup menu with rediculous purse textures
$('.sign-up-now').on("click", function() {
  event.preventDefault();
  $dialog.dialog({
    buttons: {
      "Submit form": function () {
        $dialogForm.submit();
      }
    },

    modal: true
  });
});


