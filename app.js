var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) //because typescript doesn't know if button already exist or not we must be check that
 {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5, 2));
