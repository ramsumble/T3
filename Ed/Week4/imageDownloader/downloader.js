// syncronous lib for doing file IO
const fs = require("node:fs");

// async function 
const{ mkdir } = require("node:fs/promises");

// streaming data - syncronous
const { Readable } = require("node:stream");

// wait for the streaming to finish - could take time so we make it a promise. non blocking 
const { finished } = require("node:stream/promises");

const path = require("node/path");

function downloadPokemonPicture (targetId = getRandomPokemonId()) {

}

function getRandomPokemonId() {

}

// get pokemon data and image url 
function getPokemonPictureUrl(targetId = getRandomPokemonId()) {

}

function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "./") {

}

module.exports = {
    downloadPokemonPicture,
    getRandomPokemonId,
    getPokemonPictureUrl,
    savePokemonPictureToDisk,
}