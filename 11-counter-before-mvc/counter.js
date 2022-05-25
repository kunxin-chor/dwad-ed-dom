let box = document.querySelector('#box');
let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');

incrementBtn.addEventListener('click', function(){ 
    box.innerHTML = parseInt(box.innerHTML) + 1;
    if (box.innerHTML % 2 == 0) {
        box.style.color = 'green'
    } else {
        box.style.color = 'red';
    }
})

decrementBtn.addEventListener('click', function(){
    box.innerHTML = parseInt(box.innerHTML) - 1;
    if (box.innerHTML % 2 == 0) {
        box.style.color = 'green'
    } else {
        box.style.color = 'red';
    }
})

document.querySelector('#setBtn')
    .addEventListener('click',function() {
        let newNumber= document.querySelector('#number').value;
        box.innerHTML = newNumber;
        if (box.innerHTML % 2 == 0) {
            box.style.color = 'green'
        } else {
            box.style.color = 'red';
        }
    });