const ques = [
    {
        question: "Select the correct option to open a link in a new browser window?",
        options: [
            'A href="url" target="new" ',
            'A href="url" new',
            'A href="url" target="_window"',
            'A href="url" target="_blank"',
        ],
        answer: 4
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        options: [
            "It",
            "I",
            "Italic",
            "II",
        ],
        answer: 2,
    },
    {
        question: "Select the option to make a list that lists the items with numbers?",
        options: [
            "Dl",
            "ol",
            "ul",
            "None",
        ],
        answer: 2,
    },
    {
        question: "Select the correct HTML tag to make a text bold.",
        options: [
            "bb",
            "bo",
            "b",
            "bold"
        ],
        answer: 3,
    },
    {
        question: "In CSS,Select the property used to set the spacing in between lines of text?",
        options: [
            "line-height",
            "line-spacing",
            "letter-spacing",
            "spacing",
        ],
        answer: 1,
    },
    {
        question: "Select the appropriate HTML tag for inserting a line break?",
        options: [
            "br",
            "lb",
            "brbr",
            "break",
        ],
        answer: 1,
    },
    {
        question: "In CSS, Select the property to set an image in a list instead of a standard bullet?",
        options: [
            "list-image:",
            "list-image-src",
            "list-style-image:",
            "image-list:",
        ],
        answer: 3
    }, {
        question: "Select the correct option to create an e-mail link?",
        options: [
            'Mail href="xxx@yyy.com"',
            'Mail>xxx@yyy.com/mail',
            'A href=mailto:xxx@yyy.com',
            'A href="xxx@yyy.com"',
        ],
        answer: 3,
    },
    {
        question: "In CSS,select the property used to set the background color of an image?",
        options: [
            "color:background",
            "background-color",
            "color",
            "background:color",
        ],
        answer: 2
    },
    {
        question: "Select the appropriate HTML tag used for the largest heading?",
        options: [
            "Heading",
            "H6",
            "H1",
            "Head",
        ],
        answer: 3,
    }
];
var score =0;
var questions = document.getElementById("questions");
var option = document.getElementById("option");
var radio;
var clicked = false;
var correct = false;

function CreateRadio(data) {
    radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ques";
    radio.value = data + 1;
    radio.id = 'radio' + data;
    questions.appendChild(radio);
}
var radioid = [];
var i = 0;
function element(i) {
    clicked = false;
    var selected = 0;
    questions.style.fontWeight = "normal";
    questions.innerHTML = "<h2>" + ques[i].question + "</h2> <br/>";
    for (var j = 0; j < ques[i].options.length; j++) {
        var label = document.createElement("label");
        label.innerHTML = [CreateRadio(j)] + ques[i].options[j] + "<br/>";
        label.setAttribute("for", radio.id);
        radio.addEventListener("click", function () {
            correct = false;
            clicked = false;
        })
        radio.addEventListener("click", function (event) {
            selected = event.target.value;
            if (selected == ques[i].answer) {
                correct = true;
                clicked = true;
            } else if (selected == 0) {
                clicked = false;
            } else {
                clicked = true;
                correct = false;
            }
        })
        questions.appendChild(label);
        radioid.push(document.getElementById(radio.id));
    }
}
element(i);

var next = document.getElementById("next");
var head1 = document.getElementById("header");
next.style.display = "none";
function Result() {
    questions.style.fontWeight = 'bold';
    head1.innerHTML = '';
    head1.innerHTML = 'SCORE : ' + score;
    questions.innerHTML = "<h2>" + 'AnswerSheet' + "</h2>";
    ques.forEach(function (value, ind) {
        var corr = ques[ind].answer;
        var ansDiv = document.createElement('div');
        ansDiv.className = 'Answersheet';
        ansDiv.innerHTML = ques[ind].options[corr - 1];
        questions.innerHTML += "<br/> " + ques[ind].question + ": ";
        questions.appendChild(ansDiv);
        questions.innerHTML += "<br/>";

    })
}
var restart = document.getElementById('restart');
restart.style.display = 'none';
var submit = document.getElementById('submit');
function submitBtn() {
    var detail = document.getElementById("corrincorr");
    detail.removeAttribute("class");
    next.addEventListener("click", function () {
        detail.style.display = "none";
        if (i >= ques.length - 1) {
            detail.innerHTML = "";
            Result();
            next.style.display = "none";
            restart.style.display = "block";
            return;
        }
        element(++i);
        next.style.display = "none";
        submit.style.display = "block";
    })

    submit.addEventListener("click", function () {
        detail.style.display = "block";
        if (correct) {
            detail.className = "success";
            detail.innerHTML = "";
            detail.innerHTML = "Correct";
            score += 1;
            correct = false;
            radioid.forEach(function (value) {
                value.disabled = true;
            })
            submit.style.display = "none";
            next.style.display = "block";
        }
        else if (!clicked) {
            detail.className = "warning";
            detail.innerHTML = "Select an Option";
        } else {
            detail.className = "danger";
            detail.innerHTML = "Incorrect";

            radioid.forEach(function (value) {
                value.disabled = true
            })
            submit.style.display = "none";
            next.style.display = "block";
        }
    })
}
submitBtn();
restart.addEventListener("click", function () {
    i = 0;
    score = 0;
    element(i);
    restart.style.display = 'none';
    submit.style.display = 'block';
    head1.innerHTML = 'QUIZ';
})