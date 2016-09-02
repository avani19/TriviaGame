// Define Questions as a variable
var question1 = {
    qus: "1. What colour are Raichu cheeks?",
    ans: ["Red", "Yellow", "Green", "Blue"],
    correctAns: 1,
};
var question2 = {
    qus: "2. Who dose Cubone evolve into?",
    ans: ["Rattata", "Pidgey", "weedle", "Marowak"],
    correctAns: 3,
};
var question3 = {
    qus: "3. Which pokemon hatches from Misty's egg?",
    ans: ["Spearow", "Caterpie", "Togepi", "Nidoran"],
    correctAns: 2,
};
var question4 = {
    qus: "4. What is Ash's first pokemon?",
    ans: ["Pikachu", "Seel", "Raichu", "Magmar"],
    correctAns: 0,
};
var question5 = {
    qus: "5. Which three pokemon can you first select from Professor Oak?",
    ans: ["Bulbasaur,Squirtle,Charmander", "Kakuna,Weedle,Beedrill", "Pidgeotto,Raticate,Diglett", "Growlithe,Arcanine,Poliwag"],
    correctAns: 0,
};
var question6 = {
    qus: "6. Which pokemon can transfer into any pokemon?",
    ans: ["Mankey", "Muk", "Ditto", "Onix"],
    correctAns: 2,
};
var question7 = {
    qus: "7. Which pokemon is man-made?",
    ans: ["Drowzee", "Tangela", "Horsea", "Mewtwo"],
    correctAns: 3,
};
var question8 = {
    qus: "8. Who dose Bulbasur evolve into?",
    ans: ["Marowak", "Ivysaur", "Koffing", "Seadra"],
    correctAns: 1,
};
var question9 = {
    qus: "9. Which pokemon always sleeps?",
    ans: ["Articuno", "Snorlax", "Dratini", "Mew"],
    correctAns: 1,
};
var question10 = {
    qus: "10. Which pokemon makes everyone fall asleep?",
    ans: ["Chikorita", "Totodile", "Jigglypuff", "Furret"],
    correctAns: 2,
};
// make a variable contain all the question
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]; 
// Define all the variable globally
var pokemonImages = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredQuestion = 0;
var printQuestionTime = 0;
var questionTime;
var selected;
var counter;
var userAnswer;
var answers = false;
var correctans;
var userChoice;
var header = ["Pokemon Trivia"];

// empty title
// before displying next page clear unnecessary div
$("#title").html('');
// define timer function as a varible, inside the function again define a time 
var timer = {
run: function(){
    printQuestionTime = 10;
    $("#time").html("<h2>Time Remaining: " + printQuestionTime + "</h2>");
    selected = true;
    counter = setInterval(timer.decrement, 1000);
},
decrement: function(){
    printQuestionTime--;
    $('#time').html('<h2>Time Remaining: ' + printQuestionTime + '</h2>');
    if (printQuestionTime < 1){
        timer.stop();
        selected = false;
        checkAnswer();
    }
},
stop: function(){
    clearInterval(counter);
}
};
// when start button click start game function and empty other divs 
$("#btn").on('click', function(){
    $('#title').html('<img src = "assets/images/header.png" width = "100px">');
    $("#title").append(header);
    $('#title').append('<img src = "assets/images/header.png" width = "100px">');
    $(this).hide();
    $("#name").html('');
    gameStart();
});
// make div empty and again define a empty value for variables and disply question cycle
function gameStart(){
    $("#endscore").html('');
    $("#correctAnswer").html('');
    $("#incorrectAnswer").html('');
    $("#unanswered").html('');
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unansweredQuestion = 0;
    displayQuestion();
}
// disply question and options,for options make a new div then attribute that div for a click operation
function displayQuestion(){
    $("#result").html('');
    $("#rightans").html('');
    $("#Pokemonimg").html('');
    selected = true;

    var questionToAnswer = (questions[currentQuestion].qus);
    $("#question").html("");
    $("#question").append(questionToAnswer);

    for(var i=0; i<questions[currentQuestion].ans.length; i++){
        var optionsToAnswer = $('<div>');
        optionsToAnswer.text(questions[currentQuestion].ans[i]);
        optionsToAnswer.attr({'data-value' : i});
        optionsToAnswer.addClass('choice');
        $("#options").append(optionsToAnswer);
    }
    timer.run();
    $(".choice").on('click', function() {
    userAnswer = $(this).data('value');
    timer.stop();
    checkAnswer();
    });
}
// create two variable index and text; index to compare the answer and text to diply the correct ans if answer is wrong
// compare ques and answer and make operation accordingly
// when it is a last ques disply last score page and if it is not last que keep moving to the next ques
function checkAnswer(){
    $(".choice").html('');
    $("#question").html('');
    $('#Pokemonimg').html('<img src = "assets/images/'+ pokemonImages[currentQuestion] +'.png" width = "300px">');
    var answerIndex = (questions[currentQuestion].correctAns);
    var answerText = (questions[currentQuestion].ans[questions[currentQuestion].correctAns]);
   
    if ((userAnswer == answerIndex) && (selected == true)){
       correctAnswer++;
       $("#result").html("Yes, nailed it!!!");
       console.log("true");
    }else if((userAnswer != answerIndex) && (selected == true)){
        incorrectAnswer++;
        $("#result").html("No, you got it wrong!!");
        $("#rightans").html("The correct answer is: " + answerText );
        console.log("wrong");
    }else{
        unansweredQuestion++;
        $("#result").html("You missed it");
        console.log("unans");
        $("#rightans").html("The correct answer is: " + answerText);
        selected = true;
    }
    if(currentQuestion == (questions.length-1)){
        setTimeout(resultPage, 5000)
        // when changing time less than 5000 not working
    }else{
        currentQuestion++;
        // timer.reset();
        setTimeout(displayQuestion, 5000);
    }   
}
//display result  
function resultPage(){
    $("#Pokemonimg").html('');
    $("#title").html('');
    $("#time").html('');
    $("#result").html('');
    $("#rightans").html('');
    $("#endscore").html("Game Over!! let's see your score");
    $("#correctAnswer").html("Total Correct Answers: " + correctAnswer);
    $("#incorrectAnswer").html("Total Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("total Unanswered Questions: " + unansweredQuestion);
    $("#PlayAgain").html("Play Again");
}
$('#PlayAgain').on('click', function(){
    $(this).hide();
    gameStart();
});

