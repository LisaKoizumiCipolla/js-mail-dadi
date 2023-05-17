
//User and computer number
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);

//Message
let resultMessage;

//Calculation
if (userNumber > pcNumber){
    resultMessage = ("You Win!");
} else if (userNumber < pcNumber){
    resultMessage = ("You lost... Retry!");
} else {
    resultMessage = ("It's a draw! What are the odds?");
}

//Result on console
console.log(userNumber);
console.log(pcNumber);
console.log(resultMessage);

///////////////

//Retrieve user data
const userEmail = (prompt("Insert your email"));

//List of authorised accounts
const authorisedEmail = ["Eru@Iluvatar.lotr" , "Azathoth@ancientone.hpl" , "Tenochtitlan@texcoco.aztec" , "GreatATuin@discworld.tp" , "OhNoNotAgain@petunia.da"];

//Message variable
let accessMessage;

//Calculations
if (userEmail) {
    accessMessage = ("Access GRANTED");
} else {
    accessMessage = ("Access DENIED");
}

//Result on console
console.log(accessMessage);