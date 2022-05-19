// document.querySelector('#addBtn').addEventListener('')
let btn = document.querySelector("#addBtn");
btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    let numberList = document.querySelector('#numbers');
    numberList.innerHTML += '<li>' + randomNumber + '</li>';
    // numberList.innerHTML = numberList.innerHTML = ""
})