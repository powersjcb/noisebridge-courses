$('.sign-up-now').on('click', function (event) {
  event.preventDefault();
  $('.dialog').dialog({
    buttons: {
      "Submit": function () {
        console.log('you did it!');
      }
    },
    modal: true
  });
});