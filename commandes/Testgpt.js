const { zokou } = require("../framework/zokou");
const axios = require("axios");

/**
 * Command to interact with a ChatGPT-like API.
 * 
 * This command allows users to send a question to the bot and receive a response.
 */
zokou({ nomCom: "gpt5", reaction: "🤔", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg } = commandeOptions;

    try {
        // Check if any arguments have been provided
        if (!arg || arg.length === 0) {
            return repondre("Veuillez poser une question.");
        }

        // Combine the arguments into a single question string
        const question = arg.join(' ');

        // Prepare the API endpoint and parameters
        const apiEndpoint = `https://test-api-apms.onrender.com/api/chatgpt`;
        const params = {
            text: question,
            name: "Kaizoku",
            prompt: "Tu seras une IA d'un bot WhatsApp tres puissant du nom SHADOW-MD",
            apikey: "BrunoSobrino"
        };

        // Call the API using Axios
        const responseApi = await axios.get(apiEndpoint, { params });

        // Process the API response
        const resultat = responseApi.data;

        if (resultat) {
            repondre(resultat.resultado);
        } else {
            repondre("Erreur lors de la génération de la réponse.");
        }

    } catch (error) {
        console.error('Erreur:', error.message || 'Une erreur s\'est produite');
        repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
    }
});
