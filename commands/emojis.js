const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.author.send(`Emojis From TapL Discord V2 ${emojiList}`);
}

module.exports.help = {
  name: "emojis"
}