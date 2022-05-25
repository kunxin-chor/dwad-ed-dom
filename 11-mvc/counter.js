// MODEL
let number = 7;

function getColor() {
    if (number % 2 == 0) {
        return "green";
    } else {
        return "red";
    }
}

function runController() {
    document.querySelector("#increment").addEventListener('click',function(){
        number++;  // update the model
        render();  // refresh (or redraw) the display
    })

    document.querySelector("#decrement").addEventListener('click', function(){
        number--; // update the model
        render();

    })

    document.querySelector("#setBtn").addEventListener('click', function(){
        number = parseInt(document.querySelector('#number').value);
        render();
    })
}

function render() {
    let box = document.querySelector('#box');


    box.innerHTML = number;
    box.style.color = getColor();


}

render();
runController();

