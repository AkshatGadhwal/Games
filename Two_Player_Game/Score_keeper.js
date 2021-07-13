// JavaScript source code
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var card1 = document.querySelector('#p1display');
var card2 = document.querySelector('#p2display');
var score1 = 0;
var score2 = 0;
var end = false;
var target = 5;
p1.addEventListener('click', function () {
    if (!end) {
        score1++;
        card1.textContent = score1;
        if (score1 === target) {
            card1.classList.add('winner');
            end = true;
        }
    }
});

p2.addEventListener('click', function () {
    if (!end) {
        score2++;
        card2.textContent = score2;
        if (score2 === target) {
            card2.classList.add('winner');
            end = true;
        }
    }
});

function reset() {
    score1 = 0;
    score2 = 0;
    end = false;
    card1.textContent = score1;
    card2.textContent = score2;
    card1.classList.remove('winner');
    card2.classList.remove('winner');
}

document.querySelector('#reset').addEventListener('click', function () {
    reset();
})

inputVal = document.querySelector('input');
inputVal.addEventListener('change', function () {
    reset();
    target = Number(inputVal.value);
    document.querySelector('p span').textContent = target;

})