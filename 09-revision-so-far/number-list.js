/*
1. Create a textbox which allows the user to add in a number to an unordered list
2. As the user adds in numbers, display the total after the list
3. Challenge: Add in a textbox; when the user type in a number, highlight all the numbers in the list 
 which is equal or higher than the number in the textbox.


*/

// The DOM is in the object named `document`
// This document object as long as your JavaScript is running
// in a browser

// step 1: select the button and retrieve the object
// that represents it
let btn = document.querySelector('#addBtn');

// this is a state variable
// a state variable represents or remembers certain facts
// about our program
let total = 0;

// step 2: add the event listener to the button
btn.addEventListener('click', function(){
    // step 3: select the textbox element
    let textbox = document.querySelector('#new-number');
    // retrieve the vaue in the textbox
    let number = Number(textbox.value); // can also use parseInt or parseFloat if we prefer

    // increase the total by the number added by the user
    total += number;  

    let unorderedList = document.querySelector("#number-list");
    // approach 1: using innerHTML (append using +=)
    // unorderedList.innerHTML += `<li>${number}</li>

    // approach 2: createElement
    let listElement = document.createElement('li');
    listElement.innerHTML = number;
    unorderedList.appendChild(listElement);

    let totalSpan = document.querySelector("#total");
    totalSpan.innerHTML = total; // changing innerHTML of the totalSpan to something new
    
})