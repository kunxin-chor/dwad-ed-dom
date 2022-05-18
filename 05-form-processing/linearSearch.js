let fruits = ['apples', 'durians', 'bananas', 'mangosteen'];
let wanted = 'strawberries';
for (let f of fruits) {
    if (f == wanted) {
        console.log("found!")
        break;
    }
}