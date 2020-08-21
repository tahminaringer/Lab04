'use strict'
//Wrap this code in function
function askUserForName(){
    var userName = prompt('Please Enter Your Name ');
    alert('Hello ' + userName);
    return userName;
}
    
var userName = askUserForName();

console.log(userName);

function checkGreeting(){
    if (userName === 'Tahmina'){
        document.write('<h2>' + 'What a Glorious Day, welcome! ' + userName + '</h2>');
    } else {
        document.write('<h2>' + 'Welcome ' + userName + '</h2>');    
    }
}
checkGreeting();

function askFavoriteCoffeeDrink(){
    var favoriteCoffeeDrink = prompt('What is your favorite coffee drink');
    document.write('<h2>' + favoriteCoffeeDrink + ' yum! ' + '</h2>')
    return favoriteCoffeeDrink;   
}
askFavoriteCoffeeDrink();

function askJoinEmailList(){
    var emailQuestion = confirm("Would you like to join our mailing list?"); 
    return emailQuestion;
}
var emailQuestion = askJoinEmailList();

function answer(emailQuestion){
    if (emailQuestion === true){
        var userPreference = prompt("What is your email address");
        document.write('<h2>' + 'Great ' + userName + ' We have added ' + userPreference + ' to our mailing list ' + '<h2>')
        return userPreference;
    }
}
answer(emailQuestion);

function numberGuessingGame() {
    var correctAnswer = 5;
    var playGame = prompt('Do you want to play a game>');
    while(playGame === 'yes'){
        for (var i = 0; i<5; i = i + 1){
            var userGuess = parseInt(prompt("Enter A Number 1-35"));
            if(userGuess === correctAnswer){
                alert('You Are Correct!')
                break;
            } else if (userGuess < correctAnswer){
                alert('You guessed too low')
            } else if (userGuess > correctAnswer){
                alert('You guessed too high')
            }
            if(i === 4){
                alert('The correct answer is ' + correctAnswer);
            }
        }
        playGame = prompt('Do you want to play another round?');
    }
}

numberGuessingGame();
