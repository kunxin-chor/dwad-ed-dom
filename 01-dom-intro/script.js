// test console.log to show that the script is working
console.log("Hello World");

// we can add an event listener to DOM elements
// such that when an event happens to the element
// a function will be activated
let button = document.querySelector('#button');

// addEventListener takes into two arugments/parameters
// the first parameter is the event to listen for
// the second parameter is the function to call
// (i.e to activate) when the event is detected
// on the HTML element
button.addEventListener('click', function(){
    // select the header element from the DOM    
    let header = document.querySelector('h1');
    // change it style such that its color is red
    header.style.color = 'red';
})




