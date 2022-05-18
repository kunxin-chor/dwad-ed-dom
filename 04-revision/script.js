let styleBtn = document.querySelector('#styleBtn');
styleBtn.addEventListener('click', function(){
    let header = document.querySelector('h1');
    header.style.color = 'red';
    
    // select by div, with #box or div#box
    document.querySelector('#box').style.backgroundColor = 'blue';
    
    let urgentParagraphs = document.querySelectorAll('.urgent');
    for (let p of urgentParagraphs) {
        p.style.backgroundColor = 'yellow';
    }
    
})

