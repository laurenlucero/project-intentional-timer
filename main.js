console.log("JavaScript test")

// time input numbers only

minutesInput = document.querySelector('.minutes')
secondsInput = document.querySelector('.seconds')

minutesInput.addEventListener('input', restrictNumber)
secondsInput.addEventListener('input', restrictNumber)

function restrictNumber(e) {
  var newValue = this.value.replace();
  this.value = newValue;
}

function restrictNumber(e) {
  var newValue = this.value.replace();
  this.value = newValue;
}

// buttons

var meditate = document.querySelector('.meditate-btn');
var exercise = document.querySelector('.exercise-btn');
var study = document.querySelector('.study-btn');
var medActive = document.querySelector('#meditate-btn');
var studyActive = document.querySelector('#study-btn');
var exerciseActive = document.querySelector('#exercise-btn');
var startTimerBtn = document.querySelector('.start-timer-btn')

meditate.addEventListener('click', changeMediBtnColor)
exercise.addEventListener('click', changeExerBtnColor)
study.addEventListener('click', changeStudyBtnColor)

function changeMediBtnColor() {
  meditate.classList.add('med-btn-selected');
  medActive.src = "assets/meditate-active.svg";
  exercise.classList.remove('exercise-btn-selected');
  exerciseActive.src = "assets/exercise.svg";
  study.classList.remove('study-btn-selected');
  studyActive.src = "assets/study.svg";
  startTimerBtn.classList.add('start-timer-btn-meditate');
  startTimerBtn.classList.remove('start-timer-btn');
}

function changeExerBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.add('exercise-btn-selected');
  exerciseActive.src = "assets/exercise-active.svg";
  study.classList.remove('study-btn-selected');
  studyActive.src = "assets/study.svg";
  startTimerBtn.classList.add('start-timer-btn-exercise');
  startTimerBtn.classList.remove('start-timer-btn');
}

function changeStudyBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.remove('exercise-btn-selected');
  exerciseActive.src = "assets/exercise.svg";
  study.classList.add('study-btn-selected');
  studyActive.src = "assets/study-active.svg";
  startTimerBtn.classList.add('start-timer-btn-study');
  startTimerBtn.classList.remove('start-timer-btn');
}

// error messages if no input

userGoalInput = document.querySelector('.goal-input')
minutesInput = document.querySelector('.minutes')
secondsInput = document.querySelector('.seconds')
hiddenError = document.querySelector('.hidden-error')
startButton = document.querySelector('.start-button')

startButton.addEventListener('click', checkInputValues)

function checkInputValues() {
  var goal = true;
  if (userGoalInput.value === '') {
    document.querySelector('.goal-error').hidden = false;
    goal = false;
  }
  var minutes = true;
  if (minutesInput.value === '') {
    document.querySelector('.minutes-error').hidden = false;
    minutes = false;
  }
  var seconds = true;
  if (secondsInput.value === '') {
    document.querySelector('.seconds-error').hidden = false;
    seconds = false;
  }
  if (goal && minutes && seconds) {
    newActivityPage = document.querySelector(".new-activity-page");
    currentActivityPage = document.querySelector(".current-activity-page");
    newActivityPage.style.display = "none";
    currentActivityPage.classList.remove("current-activity-page");
  }
}

// prevents form from refreshing by default

var form = document.querySelector('.form-details')
form.addEventListener('submit', handleForm)

function handleForm(event) {
  event.preventDefault();
}
