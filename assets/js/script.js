var timerE1 = document.getElementById('countdown');
var alldoneE1 = document.querySelector('#alldone');
var startBtn = document.getElementById('start');
var countE1 = document.querySelector("#count");
var startquiz = document.querySelector("#startquiz");
var questions = document.querySelector("#questions");
var questE1 = document.getElementById('question');
var answerE1 = document.querySelector('#answer');
var scoreE1 = document.querySelector('#score');
var enterinE1 = document.querySelector('#enterin');

var questArr = [
    {   q:"Which of the following is not a Javascript operator?",
    a1: "new",
    a2: "this",
    a3: "delete",
    a4: "typeof",
    a: "this"
    },

    {   q:"Inside which HTML element do we put JavaScript?",
    a1: "<js>",
    a2: "<scripting>",
    a3: "<script>",
    a4: "<javascript>",
    a: "<script>"
    },

    {   q:"What statement tests for a specific condition?",
    a1: "Select",
    a2: "If",
    a3: "Switch",
    a4: "For",
    a: "If"
    },

    {   q:"This method of an Array object adds and/or remves elements from an array.",
    a1: "Reverse",
    a2: "Shift",
    a3: "Slice",
    a4: "Splice",
    a: "Splice"
    },

    {   q:"Which of the following is not a valid JavaScript variable name?",
    a1: "2names",
    a2: "_first_and_last_names",
    a3: "FirstAndLast",
    a4: "None of the above",
    a: "2names"
    },
]



// Start quiz
function startQuiz () {
    startquiz.style.display = "none";
    askQuestion();
}

function askQuestion () {

    for (var i = 0; i < questArr.length; i++) {
        countdown();
        questE1.textContent = questArr[i].q;
        
        var button1 = document.createElement("button");
        button1.textContent = questArr[i].a1;
        button1.className = "button";
        //button1.setAttribute()
        answerE1.appendChild(button1);
                
        var button2 = document.createElement("button");
        button2.textContent = questArr[i].a2;
        button2.className = "button";
        answerE1.appendChild(button2);

        var button3 = document.createElement("button");
        button3.textContent = questArr[i].a3;
        button3.className = "button";
        answerE1.appendChild(button3);

        var button4 = document.createElement("button");
        button4.textContent = questArr[i].a4;
        button4.className = "button";
        answerE1.appendChild(button4);
        
        var ans = questArr[i].a;
        if (button1.onclick) {
            console.log("button1");
        }
        if (button2.onclick) {
            console.log("button2");
        }
        if (button3.onclick) {
            console.log("button3");
        }
        if (button4.onclick) {
            console.log("button4");
        }                 
    }
}

function checkAnswer () {
    //if (answerE1 = questArr[i].a) {
    console.log("Check answer");
    console.log(button1.textContent);
    console.log(button2.textContent);
    console.log(ans)

    //} else {
    //    console.log("Wrong");
    //}
}


// Timer
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
        console.log(timeLeft);
        if (timeLeft > 0) {
            countE1.textContent = timeLeft;
            timeLeft--;
        } else {
            console.log("else")
            clearInterval(timeInterval);
            displaySummary();
        }
    }, 1000);
}

// All done summary
function displaySummary() {
    questions.style.display = "none";
    alldoneE1.textContent = "ALL DONE";
    alldoneE1.className = "allDone";
    scoreE1.textContent = "Your final score: ";
    scoreE1.className = "score";
    enterinE1.textContent = "Enter your initials ";
    enterinE1.className = "enterin";
}


startBtn.onclick = startQuiz;

// header class="start-quiz">
// <!-- Start Quiz -

// <!-- button to start -->


// section class="questions">
//  <!-- view highscores -->

// <!-- timer -->

// <!-- Question -->

// <!-- 4 answers using ul & li & button -->

// <!-- Correct/Wrong message -->


// section class="all-done">
// <!-- All Done-->


// section class="high-scores"
// <!-- hight scores -->

// <!-- go back & clear high scores -->
