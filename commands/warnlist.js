const Discord = require("discord.js");
const fs = require("fs");

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /warnlist")
  .setColor("#999999")
  .setDescription("**Description:** shows a list of the warned users!\n**Usage:** /warnlist\n**Examples:**\n  /warnlist");

  //store all the warns in an array
  var botmsg = "**Warns:**\n\n";
  var warnarray = []
  for (key in warns) warnawway.push(key.warns);
  //sore into descending order
  warnarray.sort((a,b ) => b - a);
  //build a string of users
  //loop through each amount of warns (now in descending order)
  for (warnamount in warnarray) {
    //loop through each userID in warnings.json until we find the one that belongs to that amount of bans.
    for (key in warns) {
      if (key.warns === warnamount) botmsg = botmsg + "@<" + key + "> :  " + warnamount + "\n";
}
}
message.channel.send(botmsg);


}

module.exports.help = {
  name: "warnlist"
}
