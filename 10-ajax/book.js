document.querySelector("#loadBtn")
    .addEventListener('click', async function(){
        // if we use axios to get a JSON file
        // then response.data will be an object
        let response = await axios.get('book.json');
        document.querySelector('#title').innerHTML = response.data.title;
        document.querySelector('#author').innerHTML = response.data.author;
        document.querySelector('#isbn').innerHTML = response.data.ISBN;
        document.querySelector('#pages').innerHTML = response.data.pages;

    })