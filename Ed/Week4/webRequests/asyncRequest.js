
async function getRandomPokemon() {
    let id = Math.floor(Math.random() * 1016) + 1;
    let response = await fetch(API_BASE_URL + id); 
    let data =  await response.json();
    console.log(data.name)

    
    let pkmName = document.getElementById("pokemonName");
    let pkmImage = document.getElementById("pokemonImage");

    pkmImage.src = data.sprites.other["official-artwork"].front_default;
    pkmName.innerText = data.name;
    pkmImage.alt = "Image Showing" + data.name;
}