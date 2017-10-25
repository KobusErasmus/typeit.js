var typingSpeed = 70, blinkingSpeed = 400;

function typeit() {
  var elements = document.getElementsByClassName("typeit");
  typeElementStrings(elements.length, elements);
}

function typeElementStrings(index, elements) {
  if (elements == null || index <= 0 || index > elements.length) return;
  var nextIndex = elements.length - index;
  typeNextElementString(nextIndex, elements);
  typeElementStrings(index - 1);
}

function typeNextElementString(nextIndex, elements) {
  var element = elements[nextIndex];
  var elementString = element.innerHTML;
  element.innerHTML = "";
  if (elementString == null || elementString == "") return;
  typeNextElementCharacter(element, elementString, elementString.length);
}

function typeNextElementCharacter(element, elementString, index) {
  if (index <= 0 || index > elementString.length) {
    renderBlinkingPipeForElement(element);
    return;
  }
  var nextIndex = elementString.length - index;
  var newElementString = element.innerHTML + elementString[nextIndex];
  setTimeout(function() {
    element.innerHTML = newElementString;
    typeNextElementCharacter(element, elementString, index - 1);
  }, typingSpeed);
}

function renderBlinkingPipeForElement(element) {
  var newElementString = element.innerHTML +
    "<span class=\"blinking\" style=\"visibility: visible;\">|</span>";
  setTimeout(function() {
    element.innerHTML = newElementString;
    blinkPipeInElement(element);
  }, typingSpeed);
}

function blinkPipeInElement(element) {
  var blinkingElement = element.getElementsByClassName("blinking")[0];
  setInterval(function() {
    var visibility = blinkingElement.style.visibility;
    blinkingElement.style.visibility = (visibility == "hidden" ? "visible" : "hidden");
  }, blinkingSpeed);
}

typeit();
