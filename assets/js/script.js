var i = 0;
var s = 0;
var timeLeft = 0;
var correct = "n";
var name = "Billy";
var timerE1 = document.getElementById('countdown');
var alldoneE1 = document.querySelector('#alldone');
var resultE1 = document.querySelector('#result');
var startBtn = document.getElementById('start');
var highsBtn = document.getElementById('highSc');
var countE1 = document.querySelector("#count");
var startquiz = document.querySelector("#startquiz");
var questions = document.querySelector("#questions");
var questE1 = document.getElementById('question');
var answerE1 = document.querySelector('#answer');
var submitE1 = document.querySelector('#submit');
var clearE1 = document.querySelector('#clear');
var gobackE1 = document.querySelector('#goback');
var scoreE1 = document.querySelector('#score');
var enterinE1 = document.querySelector('#enterin');
var highscoreE1 = document.querySelector('#highscore');
var highNmScE1 = document.querySelector('#highNmSc');
var hiScoreE1 = document.querySelector('#hiScore');

var questArr = [
    {
        q: "Which of the following is not a Javascript operator?",
        a1: "1. new",
        a2: "2. this",
        a3: "3. delete",
        a4: "4. typeof",
        a: "2. this"
    },

    {
        q: "Inside which HTML element do we put JavaScript?",
        a1: "1. <js>",
        a2: "2. <scripting>",
        a3: "3. <script>",
        a4: "4. <javascript>",
        a: "3. <script>"
    },

    {
        q: "What statement tests for a specific condition?",
        a1: "1. Select",
        a2: "2. If",
        a3: "3. Switch",
        a4: "4. For",
        a: "2. If"
    },

    {
        q: "This method of an Array object adds and/or remves elements from an array.",
        a1: "1. Reverse",
        a2: "2. Shift",
        a3: "3. Slice",
        a4: "4. Splice",
        a: "4. Splice"
    },

    {
        q: "Which of the following is not a valid JavaScript variable name?",
        a1: "1. 2names",
        a2: "2. _first_and_last_names",
        a3: "3. FirstAndLast",
        a4: "4. None of the above",
        a: "1. 2names"
    },
];



// Start quiz
function startQuiz() {
    startquiz.style.display = "none";
    countdown();
    askQuestion();
}

function askQuestion() {
    questE1.textContent = questArr[i].q;

    // Create button
    if (i === 0) {
        var button1 = document.createElement("button");
        button1.className = "button";
        button1.id = "btn1";
        answerE1.appendChild(button1);

        var button2 = document.createElement("button");
        button2.className = "button";
        button2.id = "btn2";
        answerE1.appendChild(button2);

        var button3 = document.createElement("button");
        button3.className = "button";
        button3.id = "btn3";
        answerE1.appendChild(button3);

        var button4 = document.createElement("button");
        button4.className = "button";
        button4.id = "btn4";
        answerE1.appendChild(button4);
    }

    var btnE1 = document.querySelector("#btn1");
    var btnE2 = document.querySelector("#btn2");
    var btnE3 = document.querySelector("#btn3");
    var btnE4 = document.querySelector("#btn4");
    btnE1.textContent = questArr[i].a1;
    btnE2.textContent = questArr[i].a2;
    btnE3.textContent = questArr[i].a3;
    btnE4.textContent = questArr[i].a4;

    // Check which button was clicked
    btn1.onclick = function () {
        if (btnE1.textContent === questArr[i].a) {
            resultE1.textContent = "Correct!";
            resultE1.className = "result";
            s++;
        } else {
            resultE1.textContent = "Wrong";
            resultE1.className = "result";
            timeLeft--;
        }
        arrayQuestions();
    }

    btn2.onclick = function () {
        if (btnE2.textContent === questArr[i].a) {
            resultE1.textContent = "Correct!";
            resultE1.className = "result";
            s++;
        } else {
            resultE1.textContent = "Wrong";
            resultE1.className = "result";
            timeLeft--;
        }
        arrayQuestions();
    }

    btn3.onclick = function () {
        if (btnE3.textContent === questArr[i].a) {
            resultE1.textContent = "Correct!";
            resultE1.className = "result";
            s++;
        } else {
            resultE1.textContent = "Wrong";
            resultE1.className = "result";
            timeLeft--;
        }
        arrayQuestions();
    }

    btn4.onclick = function () {
        if (btnE4.textContent === questArr[i].a) {
            resultE1.textContent = "Correct!";
            resultE1.className = "result";
            s++;
        } else {
            resultE1.textContent = "Wrong";
            resultE1.className = "result";
            timeLeft--;
        }
        arrayQuestions();
    }
}

// Check array after onclick answers
function arrayQuestions() {
    if (i < questArr.length - 1) {
        i++;
        askQuestion();
    }
}


// Timer
function countdown() {
    timeLeft = 15;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            countE1.textContent = timeLeft;
            timeLeft--;
        } else {
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
    scoreE1.textContent = "Your final score: " + s;
    scoreE1.className = "score";
    enterinE1.textContent = "Enter your initials ";
    enterinE1.className = "enterin";
    var initialInput = document.createElement("input");
    initialInput.className = "input";
    enterinE1.appendChild(initialInput);
    var submit = document.createElement("button");
    submit.className = "buttonS";
    submit.textContent = "submit";
    submit.id = "btnS";
    submitE1.appendChild(submit);

    btnS.onclick = function () {
        event.preventDefault();
        var init = document.querySelector("#enterin").value;
        //JSON.parse(init);
        console.log(init);
        var lHighScore = localStorage.getItem("HS");
        if (lHighScore == null) {
            lHighScore = 0;
        }
        if (s > lHighScore) {
            localStorage.setItem("HS", s);
            // localStorage.setItem("lName", init);
            localStorage.setItem("lName", JSON.stringify(init));
        }
    viewHighScore();
    }
};

// High score
function viewHighScore() {
    var lHighScore = localStorage.getItem("HS");
        if (lHighScore == null) {
            lHighScore = 0;
        }
    s = lHighScore;    
    questions.style.display = "none";
    startquiz.style.display = "none";
    summary.style.display = "none";
    highscoreE1.textContent = "High Score";
    highNmScE1.textContent = "Name: " + name;
    hiScoreE1.textContent = "Score: " + s;
    var clear = document.createElement("button");
    clear.className = "buttonH";
    clear.textContent = "Clear";
    clear.id = "btnC";
    clearE1.appendChild(clear);
    var goback = document.createElement("button");
    goback.className = "buttonH";
    goback.textContent = "GoBack";
    goback.id = "btnG";
    gobackE1.appendChild(goback);

    btnC.onclick = function () {
        localStorage.setItem("HS", 0);
        // localStorage.setItem("lName", init);
        //localStorage.setItem("lName", JSON.stringify("));
    }

    btnG.onclick = function () {
        window.location.reload();
    }
};

startBtn.onclick = startQuiz;
highsBtn.onclick = viewHighScore;