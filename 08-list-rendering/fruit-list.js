let fruits = ['Apples', 'Bananas', 'Oranges', 'Durians', 'Pears'];
let fruitList = document.querySelector('#fruits');

for (let eachFruit of fruits) {
    fruitList.innerHTML += '<li>' + eachFruit + '</li>';
}