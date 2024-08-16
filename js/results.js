import {results, mbtis} from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti');

// console.log(location.search);
// console.log(mbti);
// console.log(results[mbtis[mbti]]);
// console.log(results[mbtis[mbti]].title);

const titleEl = document.querySelector('.page-title');
const resultCharacter = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lectureImg = document.querySelector('.lecture img');
const lectureUrl = document.querySelector('.lecture');

let result = results[mbtis[mbti]];

titleEl.innerHTML = result.title;
resultCharacter.src = result.character;
boxes.forEach(function(boxEl, index){
        boxEl.innerHTML = result.results[index];
});
jobs.forEach((jobEl, index)=>{
        jobEl.innerHTML = result.jobs[index];
});
lectureImg.src = result.lectureImg;
lectureUrl.href = result.lectureUrl;

