console.log("JavaScript test");

minutesInput = document.querySelector('.minutes');

secondsInput = document.querySelector('.seconds');

minutesInput.addEventListener('input', restrictNumber);
function restrictNumber (e) {
  var newValue = this.value.replace();
  this.value = newValue;
}

secondsInput.addEventListener('input', restrictNumber);
function restrictNumber (e) {
  var newValue = this.value.replace();
  this.value = newValue;
}
