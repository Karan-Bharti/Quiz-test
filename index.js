var readlinesync=require('readline-sync');
const chalk=require('chalk');
console.log(chalk.blue('Hello World'));

var score=0;

var username=readlinesync.question("What is your name? ");
console.log("Welcome "+username +" to the world of Harry Potter");
console.log("Only type option alphabet in capital as answer")

function play(question, answer){
  var useranswer=readlinesync.question(question);

  if( useranswer===answer){
    console.log("You are right")
    score =score+1;
  }else{
    console.log("You are wrong")
    score=score;
  }
   console.log("Score is "+score);
   console.log("------");
}

var questions =[
  {
  question: "Which hogwarts staff member lives near the black forest? A-Hagrid  B-Dumbeldore  c-Hermione   ",
  answer: "A"

},
{
  question:" The magical train to wizard school was available at which of the followinG platform numbers? A-9 and 3 quarters  B-10 and 2 quarters  C-7  ",
 answer:"A"
},{
  question:"Talking about the future, whom did Hermione married? A-Harry B-Ron C-Draco",
  answer:"B"
},
{
  question:"Who became Harry's wife? A-Ginny B-Hermione C-Pansy  ",
  answer: "A",
},{
  question:"How many childern Harry and his wife had in future? A-3 B-4 C-2  ",
  answer:"A"
}]


for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i]
  play (currentquestion.question,currentquestion.answer)

  }

  console.log("The final score is "+score);
  
