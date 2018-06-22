const { RichEmbed } = require("discord.js");
const warns = require("../index");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const infoEmbed = new RichEmbed()
  .setTitle("Command: /warn")
  .setColor("#999999")
  .setDescription("**Description:** warns the user!\n**Usage:** /warn [user] [reason]\n**Examples:**\n  /warn @Nystrex Too Cool");

  const member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member) return message.channel.send('I could not find a user with that ID! Try mentioning them or providing a valid ID.').then(msg => msg.delete(10000));

  const reason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(!reason) {
    return message.channel.send(infoEmbed);
  }
  if(member.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't warn a member who is higher or has the same role as you!");

  const warnChannel = message.guild.channels.find(`name`, "warnings");
  if(!warnChannel) return message.reply("Couldn't Find Required Channel!");

  const loading = await message.channel.send("Warning user...");
  const userWarns = await warns.findAll({ where: { user_id: member.id } });
  await member.send(`You have been warned on TapL's Discord Server V2 for: ${reason}\n${userWarns.length === 4 ? 'You are on your final warning! Please be careful!' : (userWarns.length === 5 ? ('This is your 5th warning, so you are banned from the discord server!' && member.ban('Reached maximum amount of warnings.')) : '')}`);
  await warnChannel.send(new RichEmbed()
    .setTitle("Watchdog")
    .setDescription("**Punishment Type:** Warning")
    .setColor(0xF3FF1c)
    .addField("Warned User", member.toString(), true)
    .addField("Warned By", message.author.toString(), true)
    .addField("Warned In", message.channel.toString(), true)
    .addField("Number of Warnings this user has", userWarns.length, true)
    .addField("Reason", reason, true)
    .setFooter(`User ID: ${member.id}`)
    .setTimestamp());

  loading.edit(`${member.toString()} has been warned!`);
};

module.exports.help = {
  name: "warn0",
};
