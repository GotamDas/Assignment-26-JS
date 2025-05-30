function append(value) {
    document.getElementById('result').value += value;
}
function backspace() {
    let current = document.getElementById('result').value
    document.getElementById('result').value = current.slice(0, -1);
}
function clearResult() {
    document.getElementById('result').value = '';
}
function calculate() {
    let input = document.getElementById('result').value;
    try {
      // Replace ^ with Math.pow(a,b)
    input = input.replace(/(\d+(\.\d+)?)(\^)(\d+(\.\d+)?)/g, 'Math.pow($1,$4)');
    
    // Evaluate safely using Function constructor
    const result = new Function('return ' + input)();
    document.getElementById('result').value = result;
    } catch (e) {
      document.getElementById('result').value = "Error";
    }
}