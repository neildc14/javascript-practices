"use strict";

//indexOf and lastIndexOf methods//
var quotation = "Nobody calls me Lebowski, you got the wrong guy, I'm the Dude, man.";
var log = console.log;
log(quotation);
log(quotation.toLowerCase().indexOf('t'));
log(quotation.toLowerCase().indexOf('e'));
log(quotation.indexOf('14'));
log(quotation.toLowerCase().lastIndexOf('e'));
log(quotation.indexOf('T'));
log(quotation.toLowerCase().indexOf('e', 10));
log(quotation.toLowerCase().indexOf('the', quotation.indexOf('wrong')));
log(quotation.toLowerCase().lastIndexOf('the')); //substring and substr methods//

var str = quotation; //substring(from, to) up to but not including
//substr(from, length) gives 0 output when length is zero. the length = number of letter characters

log(str.substring(16, 24));
log(str.substring(16));
log(str.substr(16, 24));
log(str.substr(16, 2));
log(str.substr(16, 10));
log(str.substr(-16, 10)); //find and replace string methods//

var paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
Accusamus iure minima commodi odio reiciendis consectetur, autem, corrupti \
laboriosam dolore rem ratione vel, deleniti eveniet! Esse, fuga ullam. \
Possimus, eligendi ducimus.";
var find = " ";
var replace = '----';
log(paragraph.indexOf(find));

if (paragraph.indexOf(find) > -1) {
  log('found!');
} else {
  log('not found!');
}

if (paragraph.indexOf(find) > -1) {
  var p = paragraph.replace(find, replace);
  log(p);
}

var counter = 0;

while (paragraph.indexOf(find) > -1) {
  paragraph = paragraph.replace(find, replace);
  log(counter, paragraph);
  counter++;
}

while (paragraph.indexOf(find) > -1) {
  paragraph = paragraph.replace(find, replace);
}

log(paragraph);
var newPara = "".concat(paragraph);

while (newPara.indexOf(find) > -1) {
  newPara = newPara.replace(find, replace);
}

log(newPara); //trimming(removal of white space) and padding strings//
//trim() , trimLeft, trimRight,
//paStart(minlength, [padstring]) padEnd()

var name = "    Neil Edward     ";
var wholeName = "Neil Edward Dela Cruz";
log(name.trim());
log(name.trimLeft(), '***');
log(name.trimRight(), '***');
log(wholeName.padStart(55, '/-/-/-'));
log(wholeName.padEnd(55, '/-/-/-')); //rounding and formatting numbers//

var number1 = 1111.467;
var dec1 = 0.000161;
var str1 = "3.14159265359 is the the value of pi"; //Math.round() .floor()-for round down .ceil()- for round up --returns a number

log(Math.round(number1));
log(Math.floor(number1));
log(Math.ceil(number1)); //returns string

log(dec1.toFixed(2));
log(number1.toExponential(3)); //gives exponents, the value is how many digits

log(dec1.toPrecision(5)); //round off the first real number
//parsInt extract integer versions of the digits parsFloat extract the float or decimal digits

log(parseInt(str1));
log(parseFloat(str1)); //primitive data types 
//primitive is immutable means cannot be changed the value of the data

var nm = 'bob'; //string

var nm2 = new String('bob'); //object

nm2.toUpperCase();
var nm3 = nm.toUpperCase();
log(nm3); //object
//let o = new Object(); object constructor

var o = {
  prop1: 1,
  prop2: 'string',
  prop3: false,
  prop4: function prop4() {}
};
log(o); //Charcode//

var sentence = 'The quick brown fox jumps over the lazy dog.';
var index = 4;
console.log("The character code ".concat(sentence.charCodeAt(index), " is equal to ").concat(sentence.charAt(index))); // expected output: "The character code 113 is equal to q"
//replace and find string methods example on interface

document.addEventListener('DOMContentLoaded', function (e) {
  var btn = document.getElementById('btnSearch');
  btn.addEventListener('click', doFindAndReplace);
});

function doFindAndReplace(ev) {
  ev.preventDefault();
  var find = document.getElementById('find').value;
  var replace = document.getElementById('replace').value;
  var p = document.querySelector('.target');

  while (p.textContent.indexOf(find) != -1) {
    p.textContent = p.textContent.replace(find, replace);
  }
} //modifying text as you type


document.addEventListener('DOMContentLoaded', function () {
  var text = document.getElementById('txt');
  text.addEventListener('keydown', upThing); //no charcode and input value addded yet

  text.addEventListener('keypress', upThing); //charcode no input value added yet

  text.addEventListener('keyup', upThing); //no charcode input value added

  text.addEventListener('input', upThing); // no charcode but input is availablr or mutable
});

function upThing(ev) {
  var num = ev.charCode;
  var letter = String.fromCharCode(num);
  console.log(ev.type, num, letter, ev.target.value);
  ev.target.value = ev.target.value.toUpperCase();
} //iterator and generator fundamentals