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

// activity category buttons

meditate = document.querySelector('.meditate-btn')
exercise = document.querySelector('.exercise-btn')
study = document.querySelector('.study-btn')
medActive = document.querySelector('#meditate-btn')
studyActive = document.querySelector('#study-btn')
exerciseActive = document.querySelector('#exercise-btn')

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
}

function changeExerBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.add('exercise-btn-selected');
  exerciseActive.src = "assets/exercise-active.svg";
  study.classList.remove('study-btn-selected');
  studyActive.src = "assets/study.svg";
}

function changeStudyBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.remove('exercise-btn-selected');
  exerciseActive.src = "assets/exercise.svg";
  study.classList.add('study-btn-selected');
  studyActive.src = "assets/study-active.svg";
}

// error messages if no input

userGoalInput = document.querySelector('.goal-input')
minutesInput = document.querySelector('.minutes')
secondsInput = document.querySelector('.seconds')
hiddenError = document.querySelector('.hidden-error')
startButton = document.querySelector('.start-button')

startButton.addEventListener('click', checkInputValues)

function checkInputValues() {
// this was breaking changeColor function
  // var categorySelected = true;
  // if (categorySelected==='study' || categorySelected==='meditate' || categorySelected==='exercise') {
  //   categorySelected = true;
  // } else {
  //   document.querySelector('.category-error').hidden = false;
  // }
  // }
  var goal = true;
  if (userGoalInput.value==='') {
    document.querySelector('.goal-error').hidden = false;
    goal = false;
  }
  var minutes = true;
  if (minutesInput.value==='') {
    document.querySelector('.minutes-error').hidden = false;
    minutes = false;
  }
  var seconds = true;
  if (secondsInput.value==='') {
    document.querySelector('.seconds-error').hidden = false;
    seconds = false;
  }
  if (goal && minutes && seconds) {
    newActivityPage = document.querySelector('.new-activity-page')
    currentActivityPage = document.querySelector('.current-activity-page')
    newActivityPage.classList.add('hide')
    currentActivityPage.classList.remove('hide')
var goal = Text(document.getElementById('goal').value)
var minutes = Number(document.getElementById('minutes').value)
var seconds = Number(document.getElementById('seconds').value)
}
