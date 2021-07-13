// JavaScript source code

var tryagain = document.querySelector('#tryagain');
var correct = document.querySelector('#correct');
var newcolor = document.querySelector('#newcolor');
var isHard = true;
var finished = false;

var easybtn = document.querySelector('#level-easy');
var hardbtn = document.querySelector('#level-hard');

var btnarray1 = document.querySelector('#btn-array1');
var btnarray2 = document.querySelector('#btn-array2');
var x = btnarray1.querySelectorAll('button');
var y = btnarray2.querySelectorAll('button');
var allbuttons = document.querySelectorAll('#button-box button');

function random264() {
    var l1 = 'rgb(';
    var l2 = ', ';
    var l3 = ')';
    var randomrgb = l1 + Math.floor(Math.random() * 264) + l2 + Math.floor(Math.random() * 264) + l2 + Math.floor(Math.random() * 264) + l3;
    return randomrgb;
};

function easyDisplay() {
    for (var i = 0; i < 3; i++) {
        x[i].style.display = 'inline-block';
        y[i].style.display = 'none';
    };
};

easybtn.addEventListener('click', function () {
    isHard = false;
    this.classList.add('level-btn-background');
    hardbtn.classList.remove('level-btn-background');
    reset();
});

function hardDisplay() {
    for (var i = 0; i < 3; i++) {
        x[i].style.display = 'inline-block';
        y[i].style.display = 'inline-block';
    };
};

hardbtn.addEventListener('click', function () {
    isHard = true;
    this.classList.add('level-btn-background');
    easybtn.classList.remove('level-btn-background');
    reset();
});

function setColor() {
    for (var i = 0; i < 3; i++) {
        x[i].style.background = random264();
        y[i].style.background = random264();
    };
};

var allbuttons = document.querySelectorAll('#button-box button');
function getHardColor() {
    return document.querySelectorAll('#button-box button')[Math.floor(Math.random() * 6)].style.background;   
};

function getEasyColor() {
    return document.querySelectorAll('#button-box button')[Math.floor(Math.random() * 3)].style.background;
};

for (var i = 0; i < 6; i++) {
    allbuttons[i].addEventListener('click', function () {
        if (finished) {
            return alert('It seems like u should try different colors./n You have selected the right answer!');
        }
        var color = this.style.background;
        if (color === randomColor) {
            document.querySelector('#header').style.background = randomColor;
            document.querySelector('#correct').style.display = 'inline-block';
            tryagain.style.display = 'none';
            finished = true;
        } else {
            this.style.display = 'none';
            document.querySelector('#tryagain').style.display = 'inline-block';
        }
    });
};

newcolor.addEventListener('click', function () {
    reset();
});

function reset() {
    setColor();
    tryagain.style.display = 'none';
    correct.style.display = 'none';
    document.querySelector('#header').style.background = 'steelblue';
    if (isHard) {
        hardDisplay();
        randomColor = getHardColor();
        document.querySelector('#rgb-value h1').textContent = randomColor.toUpperCase();
    } else {
        easyDisplay();
        randomColor = getEasyColor();
        document.querySelector('#rgb-value h1').textContent = randomColor.toUpperCase();
    };
    finished = false;

};













setColor();
var randomColor = getHardColor();
document.querySelector('#rgb-value h1').textContent = randomColor.toUpperCase();