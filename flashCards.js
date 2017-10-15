var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");
var questions = require("./JSON.json");
var inquirer = require("inquirer");

makeCard();

function makeCard(){
  var cardArr = [];
  var currentCard;
  var score = 0;
  var index = 0;
  for (var i = 0; i < questions.length; i++){
      currentCard = new BasicCard(questions[i].front, questions[i].back);
      cardArr.push(currentCard);
    }
    promptQuestion(score, cardArr, index);
  }
  function promptQuestion(score, cardArr, index){
    var card = cardArr[index];
    inquirer.prompt([{"type": "input","name": "text", "message":"Fill in the blank: " + card.front}]).then(function(answers){
      if(answers.text == card.back.toLowerCase()){
        console.log("You're so smart!");
        score++;
        index++;
        if(index < cardArr.length){
        promptQuestion(score, cardArr, index);
      }
      }
      else{
        console.log(card.back);
        console.log("Keep studying!");
        promptQuestion(score, cardArr, index);
      }
    });
}
