async function run() {
    // instruct JS to wait the information from
    // the file or from the API endpoint is sent
    // back before going on to the next instruction
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    console.log(response);
    console.log(response.data.name, response.data.base_experience, response.data.weight);

    let taxiResponse = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    console.log(taxiResponse.data);
    console.log("Number of available taxis right now =",
                taxiResponse.data.features[0].geometry.coordinates.length)
    console.log(taxiResponse.data.features[0].geometry.coordinates);
}
run();
