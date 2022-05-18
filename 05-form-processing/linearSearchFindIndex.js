let fruits = ['apples', 'bananas', 'cherries', 'figs', 'durians'];
let wanted = 'strawberries';
// state variable: we use a state variable to remember some information or if some event has happened
let index = -1;  // assume index is -1 because we haven't start looking yet
for (let i = 0; i < fruits.length; i++) {
    // if fruits at index i is the fruit that we are looking for
    if (fruits[i] == wanted) {
        index = i;
        break;
    }
}
console.log("The fruit is at index", index);