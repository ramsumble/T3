// Synchronous library for file IO
const fs = require("node:fs");

// Asynchronous function, making directory can take time
const {mkdir} = require("node:fs/promises");

// Streaming data, safer than traditional downloading
// Synchronous
const {Readable} = require("node:stream");

// Wait for streaming to finish, can take time.
const {finished} = require("node:stream/promises");

// Node file & directory path helper 
// ./folder/subfolder/filename.extension
const path = require("node:path")

const API_URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

// return random number 1-1017
function getRandomPokemonId() {
    return Math.floor(Math.random() * 1017) + 1;
}

// Get Pokemon data for the id
// Get image url from that data
async function getPokemonPictureUrl(targetId = getRandomPokemonId()){
    let response = await fetch(API_URL_BASE + targetId).catch(error => {
        throw new Error("API failure");
    });

    if (response.status == "404") {
        throw new Error("API did not have data for the request ID");
    };

    let data = await response.json().catch(error => {
        throw new Error("API did not return valid JSON");
    });

    return data.sprites.other["official-artwork"].front_default;
}

// Download the image and save to computer
// Return the image file path
async function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "./images"){
    // fetch request to the image URL
    let imageData = await fetch(targetUrl).catch(error => {
        throw new Error("Image failed to load");
    });
    // Check if target directory exists
    if (!fs.existsSync(targetDownloadDirectory)) {
        // make a directory if we need to
        await mkdir(targetDownloadDirectory);
    }

    let fullFileDestination = path.join(targetDownloadDirectory, targetDownloadFilename);
    // Stream image from fetch to target directory
    let fileDownloadStream = fs.createWriteStream(fullFileDestination);

    // get data as bytes from web request, pipe the bytes to HDD
    await finished(Readable.fromWeb(imageData.body).pipe(fileDownloadStream)).catch(error => {
        throw new Error("Failed to save to disk")
    })
    
    // return saved image location
    return fullFileDestination;
}

function downloadPokemonPicture(targetId = getRandomPokemonId()){
    return new Promise(async (resolve, reject) => {
        try {
            let newUrl = await getPokemonPictureUrl(targetId);
      
            let saveFileLocation = await savePokemonPictureToDisk(newUrl, "ExampleImage.png", "storage");
            resolve(saveFileLocation);
        } catch(error) {
            reject(error);
        }


    })
}

module.exports = {
    downloadPokemonPicture,
    getRandomPokemonId,
    getPokemonPictureUrl,
    savePokemonPictureToDisk
}