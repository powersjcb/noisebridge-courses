/*while (i < 10) {
  alert('WELCOME TO MY WEB SITE!!!');
}*/

// Numbers
// Strings
// Booleans
// Functions


/*alert(greetings[1]);

["hello"][0]

"hello"[0]*/

1 === 1 // true
0 < 10 // true
0 > 10 // false

/*for (var i = 0; i < 10; i += 1) {
  alert(i);
}

var i = 0;
while (i < 10) {
  alert(i);
  i += 1;
}*/

// Arrays
var numbers = [1, 2, 3, 4, 5];
var greetings = ["Hello", "Goodbye", "Get Bent"]
var dataTypes = [1, true, "no", alert];

/*for (var i = 0; i < dataTypes.length; i += 1) {
  alert(dataTypes[i]);
}*/

numbers[0] = 6;

numbers; // [6, 2, 3, 4, 5];

numbers[5] = 7;

numbers; // [6, 2, 3, 4, 5, 7];

numbers.push(8);

numbers; // [6, 2, 3, 4, 5, 7, 8];

// Objects
var jeffrey = {
  name: "Jeffrey",
  age: 29, 
  location: "San Francisco", 
  siblings: ["Lily", "Bob"]
}

jeffrey[0] // undefined

jeffrey["name"] // "Jeffrey"
jeffrey["age"] // 29
jeffrey["siblings"] // ["Lily", "Bob"]
jeffrey["siblings"][0] // "Lily"

jeffrey.name
jeffrey.age
jeffrey.siblings
jeffrey.siblings[0]

var index = "name"
jeffrey[index]

index = "siblings"
//jeffrey[siblings]

jeffrey.index // undefined

jeffrey.favorite_foods = ["sushi", "pizza"];
jeffrey["favorite_foods"] = ["durian", "blue cheese"];

jeffrey; /* {
  name: "Jeffrey",
  age: 29, 
  location: "San Francisco", 
  siblings: ["Lily", "Bob"],
  favorite_foods = ["durian", "blue cheese"]
} */

var sayHello = function () {
  alert('hello!!@!@$!');
  alertAMessage('goodbye');
  return "i did it. i said the hello to you";
}

var anything = "WWWWwwwwoooowwww";

var alertAMessage = function (anything) {
  alert(anything);
}

//sayHello();

/*alertAMessage("wow!");
alertAMessage("wowies!")
alertAMessage("wow~")*/

//var iDidIt = sayHello();

var x = 1 + 1
var y = "Hello " + "World"
var z = sayHello;

//z()

var sum = function (addend1, addend2) {
  return addend1 + addend2;
}

sum(1, 2);

var wow = function (sub1, sub2) {
  return ((sub1 + sub2) / sub1 + sub2) * 1000000;
}

jeffrey.zowie = wow;

jeffrey.zowie(1, 2);

var objectWithFunction = {
  theThing: function () {
    alert('yay');
  }
}

objectWithFunction.theThing()

var objWithObj = {
  obj: {
    obj: {
      obj: {
        obj: {
          array: [{
            string: 'i am a string'
          }]
        }
      }
    }
  }
}

objWithObj.obj["obj"].obj.obj.array[0].string