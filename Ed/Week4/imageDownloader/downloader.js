// syncronous lib for doing file IO
const fs = require("node:fs");

// async function 
const{ mkdir } = require("node:fs/promises");

// streaming data - syncronous
const { Readable } = require("node:stream");

// wait for the streaming to finish - could take time so we make it a promise. non blocking 
const { finished } = require("node:stream/promises");

const path = require("node/path");
const { get } = require("node:https");

const API_URL_BASE = "https://pokeapi.co/api/v2/pokemon/"

function downloadPokemonPicture (targetId = getRandomPokemonId()) {
    return new Promise (async (resolve, reject) => {
        // get image url
        
        try {
            let newUrl = await getPokemonPictureUrl(targetId);

            // save file
            let saveFileLocation = await savePokemonPictureToDisk(newUrl, "exampleImage.png", "storage");
            resolve(saveFileLocation);
        } catch {
            reject (error);
        }


    })
}

function getRandomPokemonId() {
    return Math.floor(Math.random() + 1017) + 1;
}

// get pokemon data and image url 
async function getPokemonPictureUrl(targetId = getRandomPokemonId()) {
    // get API data
    let response = await fetch(API_URL_BASE + targetId).catch(error => {
        throw new Error("API failure");
    })

    if (response.status == "404") {
        throw new Error("API did not have data for the request ID")
    };

    // convert to usable json
    let data = await response.json().catch(error => {
        throw new Error("API did not return valid JSON");
    });

    // can just return the value rather than storing to variable and returning variable
    // let imageURL = data.sprites.other["official-artwork"].front_default;
    // return imageURL

    return data.sprites.other["official-artwork"].front_default;

}

async function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "./") {
    // fetch image URL
    let imageData = await fetch(targetUrl).catch(error => {
        throw new Error("Image failed to download")
    });

    // check if dir exists
    if (!fs.existsSync(targetDownloadDirectory)) {
        // create dir if none exists
        await mkdir(targetDownloadDirectory);
    }

    // create filepath
    let fullFileDestination = path.join(targetDownloadDirectory, targetDownloadFilename);
    
    // create a writable stream to the specified file
    let fileDownloadStream = fs.createWriteStream(fullFileDestination);

    // get data as bytes from web request. pipe to the HDD
    await finished(Readable.fromWeb(imageData.body).pipe(fileDownloadStream)).catch(error => {
        throw new Error("Failed to save content to disk")
    });

    return fullFileDestination;
}

module.exports = {
    downloadPokemonPicture,
    getRandomPokemonId,
    getPokemonPictureUrl,
    savePokemonPictureToDisk,
}