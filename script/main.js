var myHeading = document.querySelector('h1')

myHeading.textContent = 'Hello, the Greatest Mathematicans!'

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!')
}
*/

function setUserName() {
  var myName = prompt('Please enter your name.')
  if (myName) {
    localStorage.setItem('name', myName)
    myHeading.textContent = myName + ', the Greatest Mathematicans!'
  }
}

if(!localStorage.getItem('name')) {
  setUserName()
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', the Greatest Mathematicans!' 
}

document.querySelector('button').onclick = function () {
    setUserName()
} 