function appendNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
  }
  
  function appendOperator(operator) {
    var result = document.getElementById("result");
    result.value += operator;
  }
  
  function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  