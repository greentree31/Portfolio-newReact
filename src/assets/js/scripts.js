//quiz questions
var qcode = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: 'What does CSS stand for?',
    choices: ['Cascading Style Sheets', 'Create Series Styles', 'Cascading Smart Styles', 'Calculating Sheet Styles'],
    answer: 'Cascading Style Sheets',
  },
  {
    title: 'What is HTML?',
    choices: ['HTML stands for Higher Text Makeup Letters', 'HTML stands for Hyper Text Markup Language', 'HTML stands for Hydro Turbo Marker Lines', 'HTML stands for Hide The Media Lists'],
    answer: 'HTML stands for Hyper Text Markup Language',
  },
  {
    title:
      "What does a paragraph tag look like.",
    choices: ["<para>", "<paragraph>", "<p>", "<pgr>"],
    answer: "<p>",
  },
  {
    title:
      "Can JavaScript change the style of an HTML element?",
    choices: ["Yes", "No"],
    answer: "Yes",
  },
];

var currentQcode = 0;
var time = qcode.length * 10;
var timerId;

var startBtn = document.getElementById('start-btn');
var choicesEl = document.getElementById('qcode-choices');
var submitBtn = document.getElementById('submit-btn');

function  startQuiz() {

    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');

    qcodeEl.removeAttribute('class');

    getQuestr();
}

function getQcode() {
    var currentQcode = qcode[currentQcodeIndex];
}

function qcodeClick() {
    var buttonEl = event.target;

    if (!buttonEl.matches('button')) {
        return;
    }      

    if (buttonEl.value !== qcode[currentQcode].answer) {
        time -= 10;
        if (time < 0){
            time = 0;
        }
        timerEl.textContent = time;
    };   



function quizEnd() {
    clearInterval(timerId);
};

setTimeout(function() {
}   , 1000);

currentQcode++;

if (time <= 0 || currentQcode === qcode.length) {
    quizEnd();
}   else {
    getQuestion();
}
};


function timeMove() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

function saveScore() {
    var initials = initialsEl.value.trim();

    if (initials !== '') {
        var highscores = 
        JSON.parse(window.localStorage.getItem('highscores')) || [];

    }
}     

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveScore();
    }
}
submitBtn.onclick = saveScore;
startBtn.onclick = beginQuiz;
initialsEl.onkeyup = checkForEnter;