const { zokou } = require("../framework/zokou");
const axios = require("axios");

/**
 * Command to upload an image to Catbox and get the URL.
 */
zokou({
    nomCom: "url4",
    categorie: "SHADOW",
    reaction: "🌐",
    desc: "Téléverse une image vers Catbox et obtient l'URL",
    alias: ["up"]
}, async (origineMessage, zk, commandeOptions) => {
    const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

    // Validate input
    if (!arg[0]) {
        return repondre("Veuillez fournir une URL d'image.");
    }

    const imageUrl = arg[0];

    try {
        // Upload the image to Catbox
        const response = await axios.post("https://catbox.moe/user/api.php", {
            fileToUpload: imageUrl,
            reqtype: "urlupload"
        });

        // Check if the response contains the uploaded image URL
        const uploadedImageUrl = response.data;

        // Respond with the URL of the uploaded image
        repondre(`Voici l'URL de votre image téléversée : ${uploadedImageUrl}`);

    } catch (error) {
        console.error("Erreur lors du téléversement de l'image :", error);
        repondre("Échec du téléversement de l'image. Veuillez réessayer.");
    }
});
