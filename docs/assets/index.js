document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("number-input");
  const numberText = document.getElementById("number-text");
  const evenOdd = document.getElementById("even-odd");

  const events = [
    "focus",
    "blur",
    "keydown",
    "keyup",
    "keypress",
    "change",
    "touchstart",
  ];
  events.forEach((eventName) =>
    numberInput.addEventListener(eventName, checkInput)
  );

  function checkInput(event) {
    const inputValue = sanitizeInput(event.target.value);
    numberText.textContent = inputValue;
    numberText.text = inputValue;
    if (isEven(inputValue)) {
      evenOdd.textContent = "偶数";
      evenOdd.classList.add("even");
    } else {
      evenOdd.textContent = "奇数";
      evenOdd.classList.remove("even");
    }
  }

  function sanitizeInput(inputValue) {
    let parsed = parseInt(inputValue);
    if (isNaN(parsed)) {
      parsed = 0;
    }
    return parsed;
  }

  function isEven(value) {
    return value % 2 === 0;
  }
});
