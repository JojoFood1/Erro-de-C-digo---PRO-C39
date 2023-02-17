var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var START = 0;
var PLAY = 1;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2 && contestant != undefined){
    //chame o método de atualização que está dentro da classe quiz (questionário)
    quiz.update(1);
    }
  }
  if(gameState === 1){
    clear();
    //chame o método play que está dentro da classe quiz (questionário)
    quiz.play();
  }



