$('#new_user').validate({
  rules: {
    password_confirmation: {
      equalTo: "#password"
    },
    email: {
      required: true
    },
    password: {
      required: true,
      minlength: "8"
    }
  },
  errorPlacement: function(error,element) {
    error.insertAfter(element).hide().slideDown(1000);
  }
});