// data.js 파일에서 const questions 배열만 가져오기.

import {questions} from './data.js';
// import './data.js'; /*전체 가져오기 ver1*/
// import {*} from './data.js'; /*전체 가져오기 ver2*/

// html과 연결할 변수 선언
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let question = questions[currentNumber];
let mbti = ''; 

function renderQuestion(){
    question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    questionEl.innerHTML = question.question;
    choice1El.innerHTML = question.choices[0].text;
    choice2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = (currentNumber+1)*10+'%';
}
renderQuestion();

// 답변 선택 -> 다음 문제로 넘어가기 & 결과값 저장하기
function nextQuestion(choiceNumber){
    mbti += question.choices[choiceNumber].value;
    // console.log(mbti);
    if(currentNumber === questions.length-1){
        location.href='./results.html?mbti=' + mbti;
    }
    currentNumber+=1;
    renderQuestion();
}
choice1El.addEventListener('click', function(){nextQuestion(0)});
choice2El.addEventListener('click', function(){nextQuestion(1)});

