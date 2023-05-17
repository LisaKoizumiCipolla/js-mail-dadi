
//user and computer number
const userNumber = Math.floor(Math.random() * (99-1));
const pcNumber = Math.floor(Math.random() * (99-1));

//message
let resultMessage;

//calculation
if (userNumber > pcNumber){
    resultMessage = ("You Win!");
} else if (userNumber < pcNumber){
    resultMessage = ("You lost... Retry!");
} else {
    resultMessage = ("It's a draw! What are the odds?");
}

//result on console
console.log(resultMessage);