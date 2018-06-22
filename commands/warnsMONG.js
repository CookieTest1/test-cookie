const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose")
//let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
mongoose.connect('')

module.exports.run = async (bot, message, args) => {

  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /warn")
  .setColor("#999999")
  .setDescription("**Description:** warns the user!\n**Usage:** /warn [user] [reason]\n**Examples:**\n  /warn @Nystrex Too Cool");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(infoEmbed);
  let reason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(!reason) return message.channel.send(infoEmbed);
  let sender = message.author;
  if(wUser.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't warn a member who is higher or has the same role as you!").then(msg => msg.delete(5000));


  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };


  if(!warns[wUser.id]) reason[wUser.id] = {
    reason: "Reason"
  };


  if(!warns[wUser.id]) date[wUser.id] = {
    date: "day/month/year"
  };


  warns[wUser.id].reason = `${reason}`;

  warns[wUser.id].warns++;

  warns[wUser.id].date = Date.now();


   fs.writeFile("./warnings.json", JSON.stringify(warns, null, 4), (err) => {
     if(err) console.log(err);
   });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Watchdog")
  .setDescription("**Punishment Type:** Warning")
  .setColor("#F3FF1C")
  .addField("Warned User", `<@${wUser.id}>`, true)
  .addField("Warned By", `<@${sender.id}>`, true)
  .addField("Warned In", message.channel, true)
  .addField("Time", message.createdAt, true)
  .addField("Number of Warnings", warns[wUser.id].warns, true)
  .addField("Reason", reason, true)
  .setFooter(`User ID: ${wUser.id}`);

  let warnchannel = message.guild.channels.find(`name`, "warnings");
  if(!warnchannel) return message.reply("Couldn't Find Required Channel!")

  warnchannel.send(warnEmbed);
  message.channel.send(`${wUser} has been warned!`)


    wUser.send(`You have been warned on TapL's Discord V2 for: ${reason}`).then(()=> {



    if(warns[wUser.id].warns == 4)
      wUser.send(`You are on your final warning! Please be careful!`);

    if(warns[wUser.id].warns == 5)
      message.guild.member(bUser).ban(`5 Warns!`);

    });
  }

module.exports.help = {
  name: "testwarn"
}
