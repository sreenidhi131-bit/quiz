let userName = "";
let current = 0;
let score = 0;
let timer;
let timeLeft = 15;
let quiz = [];
let selectedCategory = "";

const quizData = {

html: [
{q:"HTML stands for?",a:"Hyper Text Markup Language",b:"High Text Machine Language",c:"Hyper Tool ML",d:"None",cAns:"a"},
{q:"Which tag creates a link?",a:"<a>",b:"<link>",c:"<href>",d:"<url>",cAns:"a"},
{q:"Which tag is for images?",a:"<img>",b:"<image>",c:"<src>",d:"<pic>",cAns:"a"},
{q:"HTML is a ___ language",a:"Programming",b:"Markup",c:"Scripting",d:"Query",cAns:"b"},
{q:"Which tag creates list?",a:"<ul>",b:"<list>",c:"<ol>",d:"Both A & C",cAns:"d"},
{q:"Which tag breaks line?",a:"<break>",b:"<lb>",c:"<br>",d:"<line>",cAns:"c"},
{q:"Which tag creates table?",a:"<table>",b:"<tab>",c:"<tr>",d:"<td>",cAns:"a"},
{q:"Which attribute gives URL?",a:"href",b:"src",c:"link",d:"url",cAns:"a"},
{q:"Which tag is heading?",a:"<head>",b:"<h1>",c:"<title>",d:"<p>",cAns:"b"},
{q:"HTML file extension?",a:".ht",b:".html",c:".xml",d:".css",cAns:"b"}
],

css: [
{q:"CSS stands for?",a:"Color Style Sheet",b:"Creative Style Sheet",c:"Cascading Style Sheets",d:"Computer Style Sheet",cAns:"c"},
{q:"Class selector symbol?",a:"#",b:".",c:"*",d:"$",cAns:"b"},
{q:"Change text color?",a:"font-color",b:"text-color",c:"color",d:"fg",cAns:"c"},
{q:"Background color property?",a:"bgcolor",b:"background-color",c:"background",d:"color",cAns:"b"},
{q:"Flexbox is used for?",a:"Animation",b:"Layout",c:"Forms",d:"Database",cAns:"b"},
{q:"Which unit is relative?",a:"px",b:"cm",c:"em",d:"mm",cAns:"c"},
{q:"Hide element?",a:"display:none",b:"hide",c:"invisible",d:"opacity",cAns:"a"},
{q:"Select all elements?",a:"*",b:"#",c:".",d:"$",cAns:"a"},
{q:"CSS file extension?",a:".cs",b:".style",c:".css",d:".html",cAns:"c"},
{q:"Font size property?",a:"text-size",b:"font-style",c:"font-size",d:"size",cAns:"c"}
],

js: [
{q:"JavaScript is used for?",a:"Styling",b:"Structure",c:"Interactivity",d:"Database",cAns:"c"},
{q:"Declare variable?",a:"var",b:"int",c:"string",d:"define",cAns:"a"},
{q:"Click event?",a:"onload",b:"onclick",c:"onhover",d:"onpress",cAns:"b"},
{q:"Single line comment?",a:"<!-- -->",b:"//",c:"/* */",d:"#",cAns:"b"},
{q:"alert() does?",a:"Print",b:"Popup",c:"Log",d:"Style",cAns:"b"},
{q:"Boolean value?",a:"true",b:"1",c:"yes",d:"on",cAns:"a"},
{q:"Compare value & type?",a:"==",b:"=",c:"===",d:"!=",cAns:"c"},
{q:"DOM stands for?",a:"Data Object Model",b:"Document Object Model",c:"Digital Object Model",d:"None",cAns:"b"},
{q:"Get element by ID?",a:"get()",b:"getId()",c:"getElementById()",d:"query()",cAns:"c"},
{q:"JS runs on?",a:"Server",b:"Client",c:"Database",d:"Compiler",cAns:"b"}
]

};
function signup(){

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    if(username === "" || password === ""){

        showMessage("Please fill all fields","red");
        return;
    }

    localStorage.setItem("quizUser", username);
    localStorage.setItem("quizPass", password);

    showMessage(
    "Signup Successful ✅ Please Login",
    "lightgreen"
    );

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
function login(){

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    let storedUser =
    localStorage.getItem("quizUser");

    let storedPass =
    localStorage.getItem("quizPass");

    if(username === storedUser &&
       password === storedPass){

        userName = username;

        showMessage("Login Successful ✅","lightgreen");

        setTimeout(()=>{

            document.getElementById("startScreen")
            .classList.add("hidden");

            document.getElementById("dashboardScreen")
            .classList.remove("hidden");

            loadDashboard();

        },1000);

    }else{

        showMessage("Invalid Username or Password ❌","red");
    }
}

function loadDashboard(){

    document.getElementById("dashboardUser")
    .innerText = userName;

    let last =
    localStorage.getItem("lastScore") || 0;

    let best =
    localStorage.getItem("bestScore") || 0;

    document.getElementById("lastScore")
    .innerText = `🏆 Last Score : ${last}`;

    document.getElementById("bestScore")
    .innerText = `⭐ Best Score : ${best}`;
}

function openCategories(){

    document.getElementById("dashboardScreen")
    .classList.add("hidden");

    document.getElementById("categoryScreen")
    .classList.remove("hidden");
}

function logoutUser(){

    location.reload();
}

function showMessage(message,color){

    let msg =
    document.getElementById("authMessage");

    msg.innerText = message;
    msg.style.color = color;
}

function showCategories() {

    userName = document.getElementById("username").value;

    if(userName.trim() === ""){
        alert("Please enter your name");
        return;
    }

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("categoryScreen").classList.remove("hidden");
}

function startQuiz(category){

    selectedCategory = category.toUpperCase();

    quiz = quizData[category];
    current = 0;
    score = 0;

    document.getElementById("categoryTitle").innerText =
    `Category : ${selectedCategory}`;

    document.getElementById("categoryScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion(){

    resetTimer();

    let q = quiz[current];

    document.getElementById("question").innerText = q.q;

    document.getElementById("a_text").innerText = q.a;
    document.getElementById("b_text").innerText = q.b;
    document.getElementById("c_text").innerText = q.c;
    document.getElementById("d_text").innerText = q.d;

    document.getElementById("progressText").innerText =
    `Question ${current+1} / ${quiz.length}`;

    document.getElementById("progressBar").style.width =
    ((current+1)/quiz.length)*100 + "%";

    document.querySelectorAll("input").forEach(i => {
        i.checked = false;
    });
}

function submitAnswer(){

    clearInterval(timer);

    let selected =
    [...document.querySelectorAll('input[name="answer"]')]
    .find(i => i.checked);

    // If no answer selected
    if(!selected){

        current++;

        if(current < quiz.length){

            loadQuestion();

        }else{

            showResult();
        }

        return;
    }

    let ans = selected.id;

    // Check answer
    if(ans === quiz[current].cAns){

        score++;
    }

    current++;

    if(current < quiz.length){

        loadQuestion();

    }else{

        showResult();
    }
}
function resetTimer(){

    clearInterval(timer);

    timeLeft = 15;

    document.getElementById("timer").innerText =
    `⏱ ${timeLeft}s`;

    timer = setInterval(()=>{

        timeLeft--;

        document.getElementById("timer").innerText =
        `⏱ ${timeLeft}s`;

        if(timeLeft <= 5){

            document.getElementById("timer").style.color = "red";

        }else{

            document.getElementById("timer").style.color = "white";
        }

        if(timeLeft === 0){

            submitAnswer();
        }

    },1000);
}

function showResult(){

    document.getElementById("quizScreen")
    .classList.add("hidden");

    document.getElementById("resultScreen")
    .classList.remove("hidden");

    let percent = (score/quiz.length)*100;

    // Save Scores
    localStorage.setItem("lastScore", score);

    let best =
    localStorage.getItem("bestScore") || 0;

    if(score > best){

        localStorage.setItem("bestScore", score);
    }

    document.getElementById("resultScreen").innerHTML = `

    <div class="certificate">

        <h1>🏆 Certificate</h1>

        <h2>${userName}</h2>

        <p>Successfully completed</p>

        <h3>${selectedCategory} QUIZ</h3>

        <p>Score : ${score} / ${quiz.length}</p>

        <p>Percentage : ${percent}%</p>

        <button onclick="goDashboard()">
        Go To Dashboard
        </button>

    </div>
    `;
}

function goDashboard(){

    document.getElementById("resultScreen")
    .classList.add("hidden");

    document.getElementById("dashboardScreen")
    .classList.remove("hidden");

    loadDashboard();
}