window.onload = function() {

    // create a couple of elements in an otherwise empty HTML page
    var heading = document.createElement("h2");
    var heading_text = document.createTextNode("Is Nice!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
 }

 var myImage = document.querySelector('img');

 myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-quantum-firefox.png') {
      myImage.setAttribute ('src','images/Firefox_Nightly.png');
    } else {
      myImage.setAttribute ('src','images/logo-quantum-firefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name!');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

