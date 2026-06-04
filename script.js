let userName = "";
let current = 0;
let score = 0;
let timer;
let timeLeft = 15;
let quiz = [];
//let selectedCategory = "";
let selectedBranch = "";
let selectedSubject = "";

const quizData = {
CSE:{
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

},
ECE: {

Digital: [

{q:"What is a Logic Gate?",a:"Memory",b:"Switching Circuit",c:"Processor",d:"Register",cAns:"b"},

{q:"How many inputs does a NOT gate have?",a:"1",b:"2",c:"3",d:"4",cAns:"a"},

{q:"The output of an AND gate is HIGH when?",a:"Any input is HIGH",b:"All inputs are HIGH",c:"All inputs are LOW",d:"Any input is LOW",cAns:"b"},

{q:"The output of an OR gate is LOW when?",a:"All inputs are LOW",b:"All inputs are HIGH",c:"Any input is HIGH",d:"One input is LOW",cAns:"a"},

{q:"Which gate is called a Universal Gate?",a:"AND",b:"OR",c:"NAND",d:"XOR",cAns:"c"},

{q:"How many possible outputs does a binary digit have?",a:"4",b:"8",c:"2",d:"16",cAns:"c"},

{q:"A Flip-Flop is used as?",a:"Amplifier",b:"Memory Element",c:"Sensor",d:"Counter",cAns:"b"},

{q:"What is the binary equivalent of decimal 5?",a:"101",b:"110",c:"111",d:"100",cAns:"a"},

{q:"Which gate gives HIGH output when inputs are different?",a:"AND",b:"OR",c:"XOR",d:"NOT",cAns:"c"},

{q:"A Half Adder is used to?",a:"Subtract Binary Numbers",b:"Multiply Binary Numbers",c:"Add Two Binary Digits",d:"Store Data",cAns:"c"}

],

Microprocessor: [

{q:"8086 is a?",a:"Microprocessor",b:"Sensor",c:"Transistor",d:"IC",cAns:"a"},

{q:"8086 is a ___ bit microprocessor.",a:"4",b:"8",c:"16",d:"32",cAns:"c"},

{q:"Which company developed the 8086 microprocessor?",a:"IBM",b:"Intel",c:"AMD",d:"Motorola",cAns:"b"},

{q:"What is the function of the ALU?",a:"Store Data",b:"Perform Arithmetic and Logic Operations",c:"Control Input Devices",d:"Generate Clock Signals",cAns:"b"},

{q:"Which register stores the address of the next instruction?",a:"AX",b:"BX",c:"Program Counter",d:"DX",cAns:"c"},

{q:"What does CPU stand for?",a:"Central Process Unit",b:"Central Processing Unit",c:"Computer Processing Unit",d:"Control Processing Unit",cAns:"b"},

{q:"Which bus carries data between CPU and memory?",a:"Address Bus",b:"Control Bus",c:"Data Bus",d:"System Bus",cAns:"c"},

{q:"What is the size of the data bus in 8086?",a:"8 bits",b:"16 bits",c:"32 bits",d:"64 bits",cAns:"b"},

{q:"Which memory is volatile?",a:"ROM",b:"EEPROM",c:"RAM",d:"Flash Memory",cAns:"c"},

{q:"Which instruction is used to transfer data in 8086?",a:"ADD",b:"MOV",c:"SUB",d:"MUL",cAns:"b"},

{q:"What is the maximum memory that 8086 can address?",a:"64 KB",b:"256 KB",c:"1 MB",d:"4 MB",cAns:"c"}

]

},

EEE: {

Machines: [

{q:"Transformer works on?",a:"DC",b:"AC",c:"Battery",d:"Motor",cAns:"b"},

{q:"Which machine converts electrical energy into mechanical energy?",a:"Generator",b:"Transformer",c:"Motor",d:"Battery",cAns:"c"},

{q:"Which machine converts mechanical energy into electrical energy?",a:"Motor",b:"Generator",c:"Transformer",d:"Rectifier",cAns:"b"},

{q:"A transformer operates on the principle of?",a:"Self Induction",b:"Mutual Induction",c:"Electrolysis",d:"Resistance",cAns:"b"},

{q:"Which type of current does a transformer require?",a:"DC",b:"AC",c:"Both AC and DC",d:"Pulsating DC",cAns:"b"},

{q:"The stationary part of a motor is called?",a:"Rotor",b:"Commutator",c:"Stator",d:"Armature",cAns:"c"},

{q:"The rotating part of an electrical machine is called?",a:"Stator",b:"Rotor",c:"Core",d:"Pole",cAns:"b"},

{q:"Which motor is commonly used in electric fans?",a:"DC Series Motor",b:"Stepper Motor",c:"Single-Phase Induction Motor",d:"Universal Motor",cAns:"c"},

{q:"The efficiency of a transformer is generally?",a:"20-40%",b:"40-60%",c:"60-80%",d:"90-98%",cAns:"d"},

{q:"What is the unit of transformer rating?",a:"kW",b:"HP",c:"kVA",d:"Volt",cAns:"c"}

]

}

};
function signup(){

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    if(username === "" || password === ""){

        showMessage(
            "Please fill all fields",
            "red"
        );
        return;
    }

    let users =
    JSON.parse(localStorage.getItem("quizUsers"))
    || {};

    if(users[username]){

        showMessage(
            "Username already exists",
            "red"
        );
        return;
    }

    users[username] = {
        password: password,
        lastScore: 0,
        bestScore: 0
    };

    localStorage.setItem(
        "quizUsers",
        JSON.stringify(users)
    );

    showMessage(
        "Signup Successful ✅ Please Login",
        "green"
    );

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
function login(){

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    let users =
    JSON.parse(localStorage.getItem("quizUsers"))
    || {};

    if(
        users[username] &&
        users[username].password === password
    ){

        userName = username;

        showMessage(
            "Login Successful ✅",
            "green"
        );

        setTimeout(()=>{

            document
            .getElementById("startScreen")
            .classList.add("hidden");

            document
            .getElementById("dashboardScreen")
            .classList.remove("hidden");

            loadDashboard();

        },1000);

    }
    else{

        showMessage(
            "Invalid Username or Password ❌",
            "red"
        );
    }
}
function loadDashboard(){

    document.getElementById(
        "dashboardUser"
    ).innerText = userName;

    let users =
    JSON.parse(localStorage.getItem("quizUsers"))
    || {};

    let user =
    users[userName];

    document.getElementById(
        "lastScore"
    ).innerText =
    `🏆 Last Score : ${user.lastScore}`;

    document.getElementById(
        "bestScore"
    ).innerText =
    `⭐ Best Score : ${user.bestScore}`;
}
function openCategories(){

    document.getElementById("dashboardScreen")
    .classList.add("hidden");

    document.getElementById("branchScreen")
    .classList.remove("hidden");
}
function selectBranch(branch){

    selectedBranch = branch;

    document.getElementById("branchScreen")
    .classList.add("hidden");

    document.getElementById("subjectScreen")
    .classList.remove("hidden");

    document.getElementById("branchTitle").innerText =
    `${branch} Subjects`;

    let subjects =
    Object.keys(quizData[branch]);

    let html = "";

    subjects.forEach(subject=>{

        html += `
        <button onclick="startSubjectQuiz('${subject}')">
            ${subject}
        </button>
        `;
    });

    document.getElementById("subjectButtons")
    .innerHTML = html;
}
function startSubjectQuiz(subject){

    selectedSubject = subject;

    quiz = quizData[selectedBranch][subject];

    current = 0;
    score = 0;

    document.getElementById("subjectScreen")
    .classList.add("hidden");

    document.getElementById("quizScreen")
    .classList.remove("hidden");

    document.getElementById("categoryTitle")
    .innerText =
    `${selectedBranch} - ${selectedSubject}`;

    loadQuestion();
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
   localStorage.setItem(
    userName + "_lastScore",
    score
);

let users =
JSON.parse(localStorage.getItem("quizUsers"))
|| {};

users[userName].lastScore = score;

if(score > users[userName].bestScore){

    users[userName].bestScore = score;
}

localStorage.setItem(
    "quizUsers",
    JSON.stringify(users)
);
    

    document.getElementById("resultScreen").innerHTML = `

    <div class="certificate">

        <h1>🏆 Certificate</h1>

        <h2>${userName}</h2>

        <p>Successfully completed</p>

       <h3>${selectedBranch} - ${selectedSubject} QUIZ</h3>
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
