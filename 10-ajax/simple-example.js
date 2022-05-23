document.querySelector('#loadBtn')
    .addEventListener('click', async function(){
        let response = await axios.get('data.txt');
        let area = document.querySelector('#text');
        area.value = response.data;
    })