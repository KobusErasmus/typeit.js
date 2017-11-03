var typingSpeed = 70, blinkingSpeed = 400;
var elements = document.getElementsByClassName("typeit");

typeElement(0);

function typeElement(index) {
  if (elements == null || index >= elements.length) return;
  var element = elements[index];
  var elementString = element.textContent;
  element.innerHTML = "";
  typeStringInside(element, elementString);
  typeElement(index + 1);
}

function typeStringInside(element, elementString) {
  if (elementString == null || elementString == "") return;
  typeCharacterInsideElement(0, element, elementString);
}

function typeCharacterInsideElement(index, element, elementString) {
  if (index >= elementString.length) {
    typeBlinkingPipe(element);
    return;
  }
  var character = elementString[index];
  setTimeout(function() {
      element.innerHTML = element.innerHTML + character;
      typeCharacterInsideElement(index + 1, element, elementString); },
    typingSpeed);
}

function typeBlinkingPipe(element) {
  var newElementString = element.innerHTML +
    "<span class=\"blinking\" style=\"visibility: visible;\">|</span>";
  setTimeout(function() {
    element.innerHTML = newElementString;
    var blinkingElement = element.getElementsByClassName("blinking")[0];
    startBlinkingElement(blinkingElement);
  }, typingSpeed);
}

function startBlinkingElement(element) {
  setInterval(function() {
    var visibility = element.style.visibility;
    element.style.visibility = (visibility == "hidden" ? "visible" : "hidden");
  }, blinkingSpeed);
}
