var question1 = {
    qus: "What is your name?",
    ans: ["a", "b", "c", "d"],
    correctans: 1,
};
var question2 = {
    qus: "what are you doing?",
    ans: ["cooking", "watching tv", "sleeping", "typing"],
    correctans: 3,
};
var question3 = {
    qus: "how are you?",
    ans: ["dizzy", "mmm", "great", "not well"],
    correctans: 2,
};
var title = "Can you name the Pokemon looking at the picture?";
var questions = [question1, question2, question3];
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredQuestion = 0;
var printQuestionTime = 10;
var questionTime;
var selected;
var counter;
var userans;
var answers = false;
var correct = ["Yes, nailed it!!!"];
var wrong = ["No, you got it wrong!!"];
var unanswered = ["You missed it"];

$("#title").html('');
$("#btn").on('click', function(){
    $("#title").html(title);
    $(this).hide();
    $("#name").html('');
    displayQuestion();
    timer.run();
});
    

function displayQuestion(){
    selected = true;
    var questionToAnswer = (questions[currentQuestion].qus);
    $("#question").html("");
    $("#question").append(questionToAnswer);

    for(i=0; i<questions[currentQuestion].ans.length; i++){
    var optionsToAnswer = ('<ol><button>'+questions[currentQuestion].ans[i]+' </button><ol>');
    $("#options").append(optionsToAnswer);
    }
    
    // currentQuestion++;

// $(document).on('click', 'input', function() {
//   $('#question').html('');
//   $('#options').html('');
//   displayQuestion();
// });
}
    // var number = 10;

//Timer functions: 
var timer = {
run: function(){
    $("#time").html("<h2>Time Remaining: " + printQuestionTime + "</h2>");
    selected = true;
    counter = setInterval(timer.decrement, 1000);
},
decrement: function(){
    printQuestionTime--;
    $('#time').html('<h2>Time Remaining: ' + printQuestionTime + '</h2>');
    if (printQuestionTime < 1){
        timer.stop();
        // displaynextQuestion();
        selected = false;
        displaynextQuestion();
    }
},
stop: function(){
    clearInterval(counter);
}
};


function displaynextQuestion(){
    var userans;
    $("#question").html('');
    $("#options").html('');
    // $("#title").html('');
    var perticularans = (questions[currentQuestion].ans[questions[currentQuestion].correctans]);
    var allans = (questions[currentQuestion].correctans);

    if ((userans == allans) && (selected == true)){
       correctAnswer++;
       $("#result").html(correct);
       console.log("true");
    }else if((userans != allans) && (selected == true)){
        incorrectAnswer++;
        $("#result").html(wrong);
        $("#rightans").html("The correct answer is: " + perticularans);
        console.log("wrong");
    }else{
        unansweredQuestion++;
        $("#result").html(unanswered);
        console.log("unans");
        $("#rightans").html("The correct answer is: " + perticularans);
        selected = true;
    }
}
    
// function rsultPage (){}



    // when start button pressed

    // display timer

    // display 1st question and options; 
    // when timer = 0 show next question

// $(document).on('click', 'input', function() {
//   $('#question').html('');
//   $('#options').html('');
//   displayQuestion();
// });

// // game object
// var game = {
//     questionCount:0,
//     displayQuestion: function() {
//     },



// }

// timer object
// var timer = {
//     time: 30,
//     start: function() {

//     },
//     stop: function() {
        
//     },
//     decrement: function() {
        
//     }

// }

// on start

// if you're going to use inputs or buttons that get genereated dynamically -- look up jquery event bubbling


