var timerE1 = document.getElementById('countdown');
var alldoneE1 = document.querySelector('#alldone');
var startBtn = document.getElementById('start');
var countE1 = document.querySelector("#count");
var startquiz = document.querySelector("#startquiz");
var questE1 = document.getElementById('question');
var answerE1 = document.querySelector('#answer');

var questArr = [
    {   q:"Question 1?",
    a1: "Answer 1",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4",
    a: "Answer 2"
    },

    {   q:"Question 2?",
    a1: "Answer 1",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4",
    a: "Answer 3"
    },

    {   q:"Question 3?",
    a1: "Answer 1",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4",
    a: "Answer 1"
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
        answerE1.appendChild(button2);

        var button3 = document.createElement("button");
        button3.textContent = questArr[i].a3;
        answerE1.appendChild(button3);

        var button4 = document.createElement("button");
        button4.textContent = questArr[i].a4;
        answerE1.appendChild(button4);
        
        button1.onclick 
                   
        
    }
}

function checkAnswer () {
    if (answerE1 = questArr[i].a) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
}


// Timer
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
        // debugger;
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
    alldoneE1.textContent = "ALL DONE";
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
