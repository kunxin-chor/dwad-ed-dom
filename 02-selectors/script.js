let subtitle = document.querySelector('#subtitle');

// two things to take note when changing the
// style of an element

// 1. use camel case for the CSS property name
// 2. the value must be a string
subtitle.style.backgroundColor = 'pink'; 
subtitle.style.fontSize = '48px';

// select by class
// IMPORTANT: document.querySelector only
// returns the first element found
// in this case, we have three li with the class
// menu-item but only the first one will be found
let singleMenuItem = document.querySelector('.menu-item');
console.dir(singleMenuItem);

// use querySelectorAll if we want ALL the possible
// results
let menuItems = document.querySelectorAll('.menu-item');
// when using querySelectorAll, the result  will be
// an array of all the matches
console.dir(menuItems);

// the following WILL NOT WORK
// because menuItems is AN ARRAY
// menuItems.style.color = 'red'; 

// use a for loop to iterate through the array
// and for each element make the changes
for (let item of menuItems) {
    item.style.color = 'red';
}