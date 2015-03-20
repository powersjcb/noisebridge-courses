$('button').on('click', function () {

  var button_class = $(this);
  var count = parseInt(button_class.text()) + 1;
  $(this).text(count);

  if (button_class.hasClass("zero")) {
    $(this).removeClass('zero').addClass('one');
  } else if (button_class.hasClass("one")) {
    $(this).removeClass('one').addClass('two');
  } else if (button_class.hasClass("two")) {
    $(this).removeClass('two').addClass('three');
  } else if (button_class.hasClass("three")) {
    $(this).removeClass('three').addClass('zero');
  } else {
    console.log('error, class for button not recognized');
  }
});



// Usage of .text() vs .val()  ?