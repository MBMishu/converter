function convert() {
  var weightInput = document.getElementById("weight");
  var conversionType = document.getElementById("conversionType");
  var resultSpan = document.getElementById("result");

  var weight = parseFloat(weightInput.value);

  if (isNaN(weight)) {
    resultSpan.innerText = "Please enter a valid weight.";
    return;
  }

  var conversionValue;
  if (conversionType.value === "kgToLb") {
    // Convert from kilograms to pounds
    conversionValue = weight * 2.2046;
    resultSpan.innerText = conversionValue.toFixed(4) + " pounds.";
  } else {
    // Convert from pounds to kilograms
    conversionValue = weight * 0.4536;
    resultSpan.innerText = conversionValue.toFixed(4) + " kilograms.";
  }
}

function processInput() {
  var numbersInput = document.getElementById("numbers").value;
  var numbersArray = numbersInput.split(",").map(Number);

  if (numbersArray.length > 0) {
    var max = Math.max(...numbersArray);
    var min = Math.min(...numbersArray);
    var sum = numbersArray.reduce((a, b) => a + b, 0);
    var average = sum / numbersArray.length;
    var reverseOrder = numbersArray.slice().reverse();

    document.getElementById("max").innerText = max;
    document.getElementById("min").innerText = min;
    document.getElementById("sum").innerText = sum;
    document.getElementById("average").innerText = average;
    document.getElementById("reverse").innerText = reverseOrder.join(", ");
  } else {
    // Clear the results if no numbers are provided
    document.getElementById("max").innerText = "";
    document.getElementById("min").innerText = "";
    document.getElementById("sum").innerText = "";
    document.getElementById("average").innerText = "";
    document.getElementById("reverse").innerText = "";
  }
}

// part 3
function clearTextArea() {
  alert("clear");
  document.getElementById("textArea").value = "";
}

function capitalizeText() {
  alert("capital");
  var text = document.getElementById("textArea").value;
  var result = "";

  if (text === "") {
    document.getElementById("result").innerText = "";
    return;
  }

  if (isAllUpperCase(text)) {
    result = text.toLowerCase();
  } else {
    result = text.toUpperCase();
  }

  document.getElementById("textArea").value = result;
}

function sortLines() {
  alert("sort");
  var text = document.getElementById("textArea").value;
  var lines = text.split("\n");
  lines = lines.filter((line) => line.trim() !== "");
  lines.sort();
  var result = lines.join("\n");
  document.getElementById("textArea").value = result;
}

function reverseLines() {
  alert("reverse");
  var text = document.getElementById("textArea").value;
  var lines = text.split("\n");
  var reversedLines = lines.map((line) => line.split("").reverse().join(""));
  var result = reversedLines.join("\n");
  document.getElementById("textArea").value = result;
}

function stripBlankLines() {
  alert("strip");
  var text = document.getElementById("textArea").value;
  var lines = text.split("\n");
  lines = lines.filter((line) => line.trim() !== "");
  var result = lines.join("\n");
  document.getElementById("textArea").value = result;
}

function addLineNumbers() {
  alert("add  number");
  var text = document.getElementById("textArea").value;
  var lines = text.split("\n");
  var numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
  var result = numberedLines.join("\n");
  document.getElementById("textArea").value = result;
}

function shuffleLines() {
  alert("shuffle");
  var text = document.getElementById("textArea").value;
  var lines = text.split("\n");
  lines = lines.filter((line) => line.trim() !== "");

  for (var i = lines.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }

  var result = lines.join("\n");
  document.getElementById("textArea").value = result;
}

function isAllUpperCase(text) {
  return /^[A-Z\s]+$/.test(text);
}
