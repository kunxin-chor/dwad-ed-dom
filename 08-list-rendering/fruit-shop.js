let fruits = [
    {
        'value':'pear',
        'name':'Pear'
    },
    {
        'value':'apple',
        'name':'Apple'
    },
    {
        'value':'orange',
        'name':'Orange'
    },
    {
        'value':'durian',
        'name':'Durian'
    }
]

let selectFruit = document.querySelector('#selectedFruit');
for(let eachFruit of fruits) {
    selectFruit.innerHTML += `
        <option value="${eachFruit.value}">${eachFruit.name}</option>
    `
}