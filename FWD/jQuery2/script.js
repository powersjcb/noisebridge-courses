var textarea = $('textarea');
var tweetCounter = $('.tweet-counter');
var submitButton = $('input');
var tweetList = $('.tweets');
var firstTweet = $('.tweet').first();


var calculateRemaining = function () {
  var remaining = 140 - textarea.val().length;

  tweetCounter.text(remaining);

  // warning
  tweetCounter.toggleClass('warning', remaining < 16 && remaining > -1);
  tweetCounter.toggleClass('error', remaining < 0)


  // error

  // normal

  submitButton.prop('disabled', remaining < 0 || remaining === 140 );
}

calculateRemaining();


textarea.on( 'keyup', calculateRemaining );


$('form').on('submit', function (event) {
  event.preventDefault();

  // find tweet, clone it
  var newTweet = firstTweet.clone();

  // change content of local var newTweet
  newTweet.find('.tweet-content').text(textarea.val());

  newTweet.removeClass('favorited retweeted');

  // adding it back to the page using prepend on 'tweets' class
  tweetList.prepend(newTweet);

  //clears the text area
  textarea.val("");

  // resets counter
  calculateRemaining();
});


$('.tweets').on('click', 'button', function () {
  var $this = $(this)
  var classToAdd;

  if ($this.hasClass('favorite')) {
    classToAdd = 'favorited'
  }
  if ($this.hasClass('retweet')) {
    classToAdd = 'retweeted'
  }
  $this.closest('.tweet').toggleClass(classToAdd)
});












