var tweetLimit = 140;
var textarea = $('.tweetbox textarea');
var currentCharacters;

var calculateCurrentCharacters = function (event) {
  currentCharacters = textarea.val().length;
  var remainingCharacters = tweetLimit - currentCharacters;
  var tweetCounter = $('.tweet-counter');
  tweetCounter.text(remainingCharacters);
  tweetCounter.toggleClass('warning', remainingCharacters <= 15);
  tweetCounter.toggleClass('error', remainingCharacters < 0);
  $('.tweetbox [type=submit]').attr('disabled', remainingCharacters < 0);
};
calculateCurrentCharacters();

textarea.on('keyup', calculateCurrentCharacters);

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  var value = textarea.val();

  if (value.length <= tweetLimit) {

    var newTweet = $(".tweet").first().clone();

    newTweet.removeClass('favorited retweeted');

    newTweet.find('.tweet-content').text(value);

    newTweet.find('.time').text('now');

    newTweet.prependTo('.tweets');

    textarea.val('');
    calculateCurrentCharacters();
  }
});

$('.tweets').on('click', 'button', function () {
  var classText;
  var $this = $(this);
  if ($this.hasClass('favorite')) {
    classText = 'favorited';
  } else {
    classText = 'retweeted';
  }
  $this.closest('.tweet').toggleClass(classText);
});

// <input type="text" value="Hello world!">

// [ hello world!   ]

// $('input').val() === "hello world!"

// <textarea>Hello world!</textarea>
// $('textarea').val()

// <div><span>Hello world!</span></div>
// $('div').text() === "Hello world!"
// $('div').html() === "<span>Hello world!</span>"


