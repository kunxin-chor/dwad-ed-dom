const API_KEY="1891b5a6";
const BASE_API_URL=`https://www.omdbapi.com`;
// const BASE_API_URL=`https://www.omdbapi.com/?apikey=${API_KEY}&`

document.querySelector("#btnSearch")
.addEventListener('click', async function(){
    let searchTerms = document.querySelector('#txtSearch').value;
    // let endpointURL = BASE_API_URL + "s=" + searchTerms + "&t=movie";
    // let endpointURL = BASE_API_URL + `s=${searchTerms}&t=movie`;
    let response = await axios.get(BASE_API_URL,{
        'params': {
            'apikey': API_KEY,
            's': searchTerms,
            't':'movie'
        }
    });
    let resultsDiv = document.querySelector('#results');
    for (let eachMovie of response.data.Search) {
        resultsDiv.innerHTML += `<li class="list-group-item">
        <img src="${eachMovie.Poster}"/>
            ${eachMovie.Title}
        </li>}`
    }
    
})