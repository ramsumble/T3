const { downloadPokemonPicture } = require("./downloader.js")

downloadPokemonPicture().then(savedFileOutput => {
    console.log("new image is saved to: " + savedFileOutput)
}).catch(error => {
    console.log(error);
}) 

async function exampleDownload() {
    let savedFileOutput = await downloadPokemonPicture();
    console.log("new image is saved to: " + savedFileOutput)
}

exampleDownload();