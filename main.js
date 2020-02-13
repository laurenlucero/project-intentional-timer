console.log("JavaScript test")

// variables

var minutesInput = document.querySelector('.minutes')
var secondsInput = document.querySelector('.seconds')
var meditate = document.querySelector('.meditate-btn');
var exercise = document.querySelector('.exercise-btn');
var study = document.querySelector('.study-btn');
var medActive = document.querySelector('#meditate-btn');
var studyActive = document.querySelector('#study-btn');
var exerciseActive = document.querySelector('#exercise-btn');
var startTimerBtn = document.querySelector('.start-timer-btn')
var userGoalInput = document.querySelector('.goal-input')
var hiddenError = document.querySelector('.hidden-error')
var startButton = document.querySelector('.start-button')
var goalDisplay = document.querySelector('.goal-display')
var minutesDisplay = document.querySelector('.time-in-mins')
var secondsDisplay = document.querySelector('.time-in-secs')
var form = document.querySelector('.form-details')
var startTimerBtn = document.querySelector('.start-timer-btn')

// time input numbers only

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
    minutes = Number(minutesInput.value)
    seconds = Number(secondsInput.value)
  }
  displayTimer()
}

// set timer

var minutes = 0
var seconds = 0

function displayTimer() {
  goalDisplay.innerText = userGoalInput.value;
  minutesDisplay.innerText = minutesInput.value;
  minutes = parseInt(minutesInput.value);
    if (minutes < 10) {
      minutesDisplay.innerText = '0' + minutes;
    }
  seconds = parseInt(secondsInput.value);
  secondsDisplay.innerText = secondsInput.value;
    if (seconds < 10) {
      secondsDisplay.innerText = '0' + seconds;
    }
}

// start Timer

startTimerBtn.addEventListener('click', startTimer)

function startTimer() {
  function timer() {
    setTimeout(function() {
      if (seconds > 0) {
        seconds--;
        secondsDisplay.innerText = seconds;
        minutesDisplay.innerText = minutes;
        if (seconds < 10) {
          secondsDisplay.innerText = '0' + seconds;
        }
        if (minutes < 10) {
          minutesDisplay.innerText = '0' + minutes;
        }
        return timer();
      } else if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 59;
        secondsDisplay.innerText = seconds;
        minutesDisplay.innerText = minutes;
        if (minutes < 10) {
          minutesDisplay.innerText = '0' + minutes;
        }
        return timer();
      } else if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
        console.log('done');
        window.alert('Time is up!');
      }
    }, 1000)
  }
  timer();
}

// prevents form from refreshing by default

form.addEventListener('submit', handleForm)

function handleForm(event) {
  event.preventDefault();
}
