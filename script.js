function findLargest()
 {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);

  var resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultElement.innerText = "Please enter valid numbers.";
  } else {
    var largest = Math.max(num1, num2, num3);
    resultElement.innerText = "The largest number is: " + largest;
  }
}
