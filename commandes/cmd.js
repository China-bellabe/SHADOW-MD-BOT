const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format, styletext } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// Command to display bot information and commands
zokou({ nomCom: "cmd", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE.toLocaleLowerCase() !== "yes") ? "private" : "public";

    // Organize commands by category
    cm.map(async (com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");

    // Create a date and time in GMT
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Information message
    let infoMsg = `
Hey🖐️ ${nomAuteurMessage}

SHADOW MD IS RUNNING WITH [${cm.length}] COMMANDS

More commands will be out soon

🌟🌟🌟
`;

    // Menu message
    let menuMsg = `
⏲️ ᴛɪᴍᴇ: ${temps}
📅 ᴅᴀᴛᴇ: ${date}

Made by : ©SHADOW-WRLD
`;

    var lien = mybotpic();

    // Check the type of the link and send appropriate message
    if (lien.match(/.(mp4|gif)$/i)) {
        try {
            await zk.sendMessage(dest, {
                video: { url: lien },
                caption: infoMsg + menuMsg,
                footer: "Je suis shadow, développeur Shadow Tech",
                gifPlayback: true
            }, { quoted: ms });
        } catch (e) {
            console.error("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else if (lien.match(/.(jpeg|png|jpg)$/i)) {
        try {
            await zk.sendMessage(dest, {
                image: { url: lien },
                caption: infoMsg + menuMsg,
                footer: "Je suis shadow, développeur Shadow Tech"
            }, { quoted: ms });
        } catch (e) {
            console.error("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else {
        repondre(infoMsg + menuMsg);
    }
});
