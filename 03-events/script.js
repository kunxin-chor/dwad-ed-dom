let box = document.querySelector('#box');
box.addEventListener('click', function(){
    box.style.backgroundColor = 'yellow';
})

box.addEventListener('mouseenter', function(){
    box.style.fontSize = "32px";
    box.style.width = "100px";
    box.style.height = "100px";
})

box.addEventListener('mouseleave', function(){
    box.style.fontSize = "12px";
    box.style.width = "50px";
    box.style.height = "50px";
})