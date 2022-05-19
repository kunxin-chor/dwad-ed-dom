document.querySelector("#addBtn")
    .addEventListener('click', function(){
        let number = Math.floor(Math.random() * 1000 + 1);
        let numberList = document.querySelector('#numbers');

        // create a new <li> element
        // it is not part of the DOM
        let listElement = document.createElement('li');
        listElement.innerHTML = number;
        listElement.addEventListener('click', function(){
            alert(number);
        })

        numberList.appendChild(listElement);
    })