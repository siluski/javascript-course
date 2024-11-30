let length;
let width;

function calculateArea(){
    length = pareseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    document.getElementById('result').innerText = `The area of the rectangle is ${lenght*width}`;
}