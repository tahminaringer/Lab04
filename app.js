'use strict'

var userName = prompt('Please Enter Your Name');

if (userName === 'Tahmina') {
    alert("Have A Glorious Day " + userName);
} else {
    alert("Have A Great Day " + userName);
}

document.write('<h2>' + 'Welcome ' + userName)

var question = prompt('What is your favorite coffee drink');

document.write('<h2>' + 'yum ' + question + '</h2>')

var emailQuestion = confirm("Would you like to join our mailing list?") 

if (emailQuestion === true) {
    
    var userPreference = prompt("What is your email address");
}

document.write('<h2>' + 'Great ' + userName + ' We have added ' + userPreference + ' to our mailing list ' + '<h2>')