// syncronous lib for doing file IO
const fs = require("node:fs");

// async function 
const{ mkdir } = require("node:fs/promises");

// streaming data - syncronous
const { Readable } = require("node:stream");

// wait for the streaming to finish - could take time so we make it a promise. non blocking 
const { finished } = require("node:stream/promises");

const path = require("node/path");

const API_URL_BASE = "https://pokeapi.co/api/v2/pokemon/"

function downloadPokemonPicture (targetId = getRandomPokemonId()) {

}

function getRandomPokemonId() {
    return Math.floor(Math.random() + 1017) + 1;
}

// get pokemon data and image url 
async function getPokemonPictureUrl(targetId = getRandomPokemonId()) {
    // get API data
    let response = await fetch(API_URL_BASE + targetId);

    // convert to usable json
    let data = await response.json();

    // can just return the value rather than storing to variable and returning variable
    // let imageURL = data.sprites.other["official-artwork"].front_default;
    // return imageURL

    return data.sprites.other["official-artwork"].front_default;

}

async function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "./") {

}

module.exports = {
    downloadPokemonPicture,
    getRandomPokemonId,
    getPokemonPictureUrl,
    savePokemonPictureToDisk,
}