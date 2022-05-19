
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
let selectFruit =  document.querySelector('#selectedFruit');
for(let eachFruit of fruits) {
    // we want to create an <option> element
    let optionElement = document.createElement('option');
    // recreate <option value=${eachFruit.value}>${eachFruit.name}</option>
    optionElement.innerHTML = eachFruit.name;
    optionElement.value = eachFruit.value;
   selectFruit.appendChild(optionElement);
}