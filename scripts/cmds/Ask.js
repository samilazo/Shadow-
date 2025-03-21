const axios = require('axios');

const Prefixes = [
  'shadow'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡", // 
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();

      if (!prompt) {
        await message.reply("𝐒𝐚𝐥𝐮𝐭 𝐥'𝐚𝐦𝐢𝐞 🎶❤️‍🔥😸 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 ཐིི༏ཋྀ sʜᴀᴅᴏᴡ ぐき 𝐓𝐡𝐞 𝐇𝐞𝐝𝐠𝐞𝐡𝐨𝐠 𝐁𝐨𝐭 🦔 ... 𝐜𝐫𝐞́𝐞́ 𝐩𝐚𝐫 𝐥𝐞 𝐃𝐫 𝐞𝐠𝐠𝐦𝐚𝐧 𝐠𝐫𝐚𝐜𝐞 𝐚 𝐥' 𝐚𝐝𝐧 𝐝𝐮 𝐠𝐫𝐚𝐧𝐝 𝐬𝐨𝐧𝐢𝐜 𝐣𝐞 𝐬𝐮𝐢𝐬 𝐢𝐜𝐢 𝐩𝐨𝐮𝐫 𝐫𝐞𝐬𝐨𝐮𝐝𝐫𝐞 𝐭𝐞𝐬 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐞𝐬...𝐪𝐮𝐞𝐥 𝐞𝐬𝐭 𝐭𝐨𝐧 𝐬𝐨𝐮𝐜𝐢 ⁉️");
        return;
      }

      if (prompt.toLowerCase() === "qui es-tu" || prompt.toLowerCase() === "qui es tu" || prompt.toLowerCase() === "qui es tu") {
        await message.reply("Je suis une intelligence artificielle du Projet Hedgehog-Bot-V2 créé par le développeur ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡.");
        return;
      }

      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

      await message.reply({ body: `ཐིི༏ཋྀ sʜᴀᴅᴏᴡ〈 な\n━━━━━━━━━━━━━━━━\n${answer}\n━━━━━━━━━━━━━━━━`, });

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};