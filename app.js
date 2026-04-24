let count = 0;

const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

function updateColor() {
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}

function minusCount() {
  count--;
  value.textContent = count;
  updateColor();
}

function resetCount() {
  count = 0;
  value.textContent = count;
  updateColor();
}

function plusCount() {
  count++;
  value.textContent = count;
  updateColor();
}