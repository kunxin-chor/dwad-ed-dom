
let movies = [
    {
        "title":"The Lord of the Rings",
        "genre":"Fantasy",
        "duration": 180
    },
    {
        "title":"Dune",
        "genre":"Science-Fic",
        "duration":120
    },
    {
        "title":"Dr. Strange",
        "genre":"Superheroes",
        "duration":150
    }
]

// for (let m of movies) {
//     let html = `<tr>
//             <td>${m.title}</td>
//             <td>${m.genre}</td>
//             <td>${m.duration}</td>
//         </tr>`

//     let tableBody = document.querySelector('#movie-rows');
//     tableBody.innerHTML += html;
// }

for (let m of movies) {
    let rowElement = document.createElement('tr');

    // title column
    let titleElement = document.createElement('td');
    titleElement.innerHTML = m.title;

    // genre column
    let genreElement = document.createElement('td');
    genreElement.innerHTML = m.genre; 

    // duration column
    let durationElement = document.createElement('td');
    durationElement.innerHTML = m.duration;

    rowElement.appendChild(titleElement);
    rowElement.appendChild(genreElement);
    rowElement.appendChild(durationElement);

    let tableBody = document.querySelector('#movie-rows');
    tableBody.appendChild(rowElement);

}