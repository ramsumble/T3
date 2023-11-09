const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

function getRandomPokemon() {
    // let result = fetch("https://pokeapi.co/api/v2/pokemon/25");
    // let result = fetch("https://pokeapi.co/api/v2/pokemon/"+25);
    let id = Math.floor(Math.random() * 1016) + 1;
    // let result = fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    let result = fetch(API_BASE_URL + id)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data.name);
            console.log(data.sprites.other["official-artwork"].front_default);

            let pkmName = document.getElementById("pokemonName");
            let pkmImage = document.getElementById("pokemonImage");

            pkmImage.src = data.sprites.other["official-artwork"].front_default;
            pkmName.innerText = data.name;
            pkmImage.alt = "Image Showing" + data.name;

            return data;
    })
    .catch(error => {
        console.log("Error: " + error);
    })

    // console.log(result);
}