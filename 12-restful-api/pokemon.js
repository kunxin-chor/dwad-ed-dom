let BASE_API_URL = "https://pokeapi.co/api/v2";



document.querySelector("#btnSearch")
    .addEventListener('click', async function () {
        let pokemonToSearchFor = document.querySelector('#txtSearch').value;
        let endpointURL = BASE_API_URL + '/pokemon/' + pokemonToSearchFor.toLowerCase();
        try {

            let response = await axios.get(endpointURL);

            let resultDiv = document.querySelector('#results');
            resultDiv.innerHTML = `
            <img src="${response.data.sprites.front_shiny}"/>
            <ul>
                <li>Base Experience: ${response.data.base_experience}</li>
                <li>Weight: ${response.data.weight}</li>            
            </ul>`
        } catch (e) {
            alert("Sorry! Pokemon is not found!");
        }


    })