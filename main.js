//dice 1
var randomNumber1 = Math.floor(Math.random()*6);
var imageArray = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

var randomImage1 = imageArray[randomNumber1];


document.querySelector(".img1").setAttribute("src",randomImage1);


//dice2 
var randomNumber2 = Math.floor(Math.random()*6);
var imageArray = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

var randomImage2 = imageArray[randomNumber2];


document.querySelector(".img2").setAttribute("src",randomImage2);


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
}
