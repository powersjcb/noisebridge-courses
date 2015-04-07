

// jquery select the button. on click clone new blank list item
var $newItemButton = $('.add');
var $doList = $('.to-do-list');

// Copies the first item and adds it to the end of the list
var copyNewItem = function () {
  var insertedItem = $doList.children().first().clone();
  var newText = $('.new-field').val()
  
  insertedItem.text(newText)

  $doList.append(insertedItem);

};


// Handles on click and calls the copy function
$newItemButton.on( 'click', copyNewItem );