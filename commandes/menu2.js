const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format, styletext } = require(__dirname + "/../framework/mesfonctions");
//const {police}=require(__dirname+"/../framework/mesfonctions")
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({ nomCom: "menu2", categorie: "Général" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    if (s.MODE != "oui") {
        mode = "privé";
    }
    var emoji = { "Général": "🌐", "Logo": "🎨", "Hentai": "🔥", "Weeb": "🌸", "Recherche": "🔍", "Conversion": "🌟", "Groupe": "♻️", "Autre": "🪖" };
    cm.map(async (com, index) => { if (!coms[com.categorie])
        coms[com.categorie] = []; coms[com.categorie].push(com.nomCom); });
    const temps = moment(moment()).format("HH:MM:SS");
    moment.tz.setDefault('asia/karachi ').locale("id");
    const date = moment.tz("asia/karachi").format("DD/MM/YYYY");
    console.log("date" + date);
    console.log("temps " + temps);
    let menuMsg = " *Salut🖐️* *${nomAuteurMessage}*\n\n";
    /*menuMsg+=`
    
    
    
    Owner : ${s.NOM_OWNER} \n       || Commandes : ${cm.length} \n        || Date : ${date}\n || Heure : ${temps} \n || Mémoire : ${format(os.totalmem()-os.freemem())}/${format(os.totalmem())}\n || Plateforme : ${os.platform()}\n || Developpeur : Djalega++ \n\n ╰────────────────`;
    


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

let infoMsg =  `
*Salut🖐️* *${nomAuteurMessage}*
╭─────═━┈┈━═──━┈⊷
┇ 『𝐌𝐀𝐈𝐍』
┇ 🤖 ʙᴏᴛ ɴᴀᴍᴇ: *shadow ᴍᴅ*
┇ 💢 ᴛʏᴘᴇ: *ᴠ2*
┇ 🥷 ᴅᴇᴠ: *Shadow-Wrld*
╰─────═━┈┈━═──━┈⊷
╭─────═━┈┈━═──━┈⊷
┇ 『𝐒𝐘𝐒𝐓𝐄𝐌』
┇ 📍 ᴠᴇʀꜱɪᴏɴ: *2*
┇ 💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
╰─────═━┈┈━═──━┈⊷
╭─────═━┈┈━═──━┈⊷
┇ 『𝐌𝐎𝐃𝐄』
┇ ⭕ ᴍᴏᴅᴇ: *${mode}*
┇ 💫 ᴘʀᴇғɪx: *[ ${prefixe} ]*
┇ ⏲️ ᴛɪᴍᴇ: ${temps}
┇ 📅 ᴅᴀᴛᴇ: ${date} 
╰─────═━┈┈━═──━┈⊷
╭─────═━┈┈━═──━┈⊷
  『𝐒𝐔𝐏𝐏𝐎𝐑𝐓』
  ♾️ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ
  www.youtube.com/@Shadow_wrld-f9z
  ♾️ ɪɴsᴛᴀɢʀᴀᴍ ᴘᴀɢᴇ
  https://www.instagram.com/carlydopeboii
╰─────═━┈┈━═──━┈⊷
> ©𝐒𝐡𝐚𝐝𝐨𝐰-𝐖𝐫𝐥𝐝\n\n`;
    
    
let menuMsg = `
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭─────═━┈┈━═──━┈⊷
┇ Shadow ᴍᴅ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ
╰─────═━┈┈━═──━┈⊷\n `;


for (const cat in coms) {
        menuMsg += `*╭────❒* *${cat}* *❒*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*╏* ${cmd}`;
        }
        menuMsg += `
*╰─═════════════❒* \n`
    }

    menuMsg += `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
©𝐒𝐡𝐚𝐝𝐨𝐰-𝐖𝐫𝐥𝐝 𝑷𝒓𝒐𝒋𝒆𝒄𝒕
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄ `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "*BMW MD*, déveloped Ibrahim Adams" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *BMW MD*, déveloped Ibrahim Adams" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
            
                
    }
         });
