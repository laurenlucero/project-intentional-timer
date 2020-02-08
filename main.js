// console.log("JavaScript test");
var meditate = document.querySelector('.meditate-btn');
var exercise = document.querySelector('.exercise-btn');
var study = document.querySelector('.study-btn');
var medActive = document.querySelector('#meditate-btn');
var studyActive = document.querySelector('#study-btn');
var exerciseActive = document.querySelector('#exercise-btn');


meditate.addEventListener('click', changeBtnColor)
exercise.addEventListener('click', changeBtnColor)
study.addEventListener('click', changeBtnColor)

function changeBtnColor() {
  meditate.classList.add('med-btn-selected');
  exercise.classList.add('exercise-btn-selected');
  study.classList.add('study-btn-selected');
  medActive.src = "assets/meditate-active.svg";
  studyActive.src = "assets/study-active.svg";
  exerciseActive.src = "assets/exercise-active.svg";
}
