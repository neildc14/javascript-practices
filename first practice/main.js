// const firstHeadingH1 = document.querySelector('h1');
// firstHeadingH1.textContent = 'now this is manipulated';

// const firstParagraph = document.querySelector('#paraGraph');
// firstParagraph.textContent = 'this is changed into this text';

// let myHTML = document.querySelector('#paraGraph');
// myHTML.onclick = function() {
//     myHTML.textContent = 'CHANGED AGAIN';
// };

// document.querySelector('#paraGraph').onclick = function(myHTML) {
//     myHTML.textContent = 'CHANGED AGAIN';
// };

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//   let mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/image-photography.jpg'){
//     myImage.setAttribute('src', 'images/firefox2.jpg');
//   } else {
//     myImage.setAttribute('src', 'images/image-photography.jpg');
//   }
// }
//The code retrieves the value of the image's src attribute.
// The code uses a conditional to check if the src value is equal to the path of the original image:
// If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
// If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}