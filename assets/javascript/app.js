// Define Questions as a variable
var question1 = {
    qus: "What is your name?",
    ans: ["a", "b", "c", "d"],
    correctAns: 1,
};
var question2 = {
    qus: "what are you doing?",
    ans: ["cooking", "watching tv", "sleeping", "typing"],
    correctAns: 3,
};
var question3 = {
    qus: "how are you?",
    ans: ["dizzy", "mmm", "great", "not well"],
    correctAns: 2,
};
// make a variable contain all the question
var questions = [question1, question2, question3]; 
// Define all the variable globally
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

// empty title
// before displying next page clear unnecessary div
$("#title").html('');
// $("#PlayAgain").html('');
// define timer function as a varible, inside the function again define a time 
var timer = {
run: function(){
    printQuestionTime = 100;
    $("#time").html("<h2>Time Remaining: " + printQuestionTime + "</h2>");
    selected = true;
    counter = setInterval(timer.decrement, 1000);
},
decrement: function(){
    // printQuestionTime = 10;
    printQuestionTime--;
    $('#time').html('<h2>Time Remaining: ' + printQuestionTime + '</h2>');
    if (printQuestionTime < 1){
        timer.stop();
        selected = false;
        checkAnswer();
        // timer.run();
        // timer.reset();
    }
},
stop: function(){
    clearInterval(counter);
}
};
// when start button click start game function and empty other divs 
$("#btn").on('click', function(){
    $("#title").html("Pokemon Trivia");
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
    // timer.reset();
    // timer.run();
    checkAnswer();
    });
}
// create two variable index and text; index to compare the answer and text to diply the correct ans if answer is wrong
// compare ques and answer and make operation accordingly
// when it is a last ques disply last score page and if it is not last que keep moving to the next ques
function checkAnswer(){
    $(".choice").html('');
    $("#question").html('');

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
    }else{
        currentQuestion++;
        // timer.reset();
        setTimeout(displayQuestion, 5000);
    }   
}
//display result  
function resultPage(){
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

