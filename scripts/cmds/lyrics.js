const axios = require("axios");

module.exports = {
 config: {
 name: "lyrics",
 version: "1.0",
 author: "modified by yukinori",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: "Get lyrics for a song",
 },
 longDescription: {
 en: "This command allows you to get the lyrics for a song. Usage: !lyrics <song name>",
 },
 category: "music",
 guide: {
 en: "{prefix}lyrics <song name>",
 },
 },

 onStart: async function ({ api, event, args }) {
 const songName = args.join(" ");
 if (!songName) {
 api.sendMessage("Le nom de la chanson 🎶", event.threadID, event.messageID);
 return;
 }

 const apiUrl = `https://lyrist.vercel.app/api/${encodeURIComponent(songName)}`;
 try {
 const response = await axios.get(apiUrl);
 const lyrics = response.data.lyrics;
 if (!lyrics) {
 api.sendMessage("Sorry, lyrics not found!", event.threadID, event.messageID);
 return;
 }
 api.sendMessage(lyrics, event.threadID, event.messageID);
 } catch (error) {
 console.error(error);
 api.sendMessage("Sorry, there was an error getting the lyrics!", event.threadID, event.messageID);
 }
 },
}
