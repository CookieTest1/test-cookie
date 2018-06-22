const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;

  let starting = new Discord.RichEmbed()
  .setColor("#898989")
  .addField("***Creating...***", "Hold on, this shouldn't take long")
  .setThumbnail("https://cdn.discordapp.com/attachments/456005521863081984/456233538342223882/Cookiebot.png");

  let CategoryDone = new Discord.RichEmbed()
  .setTitle(":white_check_mark: ***Created Categories, moving onto permissions.***")
  .setColor("#4286f4")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80");

  let PermsDone = new Discord.RichEmbed()
  .setTitle(":white_check_mark: ***Permissions are done, making sure everything is ready to go.***")
  .setColor("#4286f4")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80");


  let MakingOver = new Discord.RichEmbed()
  .setColor("#4286f4")
  .addField(":white_check_mark: ***I have finished!***", "Now do __***/setuptext!***__")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80")
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

message.channel.send(CategoryDone)
//set Permissions
  let infoCategory = message.guild.channels.find(`name`, "📰 ● Information")
  let voiceCategory = message.guild.channels.find(`name`, "👑 ● Community")
  let chatCategory = message.guild.channels.find(`name`, "💬 ● Chats")
  let staffCategory = message.guild.channels.find(`name`, "🔓 ● Staff Chats")
  let communityCategory = message.guild.channels.find(`name`, "🔊 ● Voice Channels")

  let adminChat = message.guild.channels.find(`name`, "admin-chat")
  let media = message.guild.channels.find(`name`, "media")
  let memes = message.guild.channels.find(`name`, "memes")
  let musicText = message.guild.channels.find(`name`, "music")

  let afk = message.guild.channels.find(`name`, "💤 Lobby / AFK")
  let music = message.guild.channels.find(`name`, "🎧 Music Room")
  let PrivateQuads = message.guild.channels.find(`name`, "🔓 Private Quads")
  let PrivateTrios = message.guild.channels.find(`name`, "🔓 Private Trios")
  let PrivateDuos = message.guild.channels.find(`name`, "🔓 Private Duos")

  let tmodRole = message.guild.roles.find("name", "♧ | Trial-Mod");
  let modRole = message.guild.roles.find("name", "♣ | Moderator");
  let adminRole = message.guild.roles.find("name", "♠ | Administrator");
  let ownerRole = message.guild.roles.find("name", "♛ | Owner");

  PrivateDuos.edit({
    userLimit:2
  })

  PrivateTrios.edit({
    userLimit:3
  })

  PrivateQuads.edit({
    userLimit: 4
  })

  staffCategory.overwritePermissions(message.guild.defaultRole, {
    READ_MESSAGES: false,
    SEND_MESSAGES: false
  })

  staffCategory.overwritePermissions(ownerRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  staffCategory.overwritePermissions(adminRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  staffCategory.overwritePermissions(modRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  staffCategory.overwritePermissions(tmodRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  adminChat.overwritePermissions(modRole,{
    READ_MESSAGES: false,
    SEND_MESSAGES: false
  })

  adminChat.overwritePermissions(tmodRole,{
    READ_MESSAGES: false,
    SEND_MESSAGES: false
  })

  adminChat.overwritePermissions(adminRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  adminChat.overwritePermissions(ownerRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  infoCategory.overwritePermissions(message.guild.defaultRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: false
  })

  infoCategory.overwritePermissions(adminRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  infoCategory.overwritePermissions(ownerRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  communityCategory.overwritePermissions(message.guild.defaultRole, {
    READ_MESSAGES: true,
    SEND_MESSAGES: false
  })

  communityCategory.overwritePermissions(adminRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  communityCategory.overwritePermissions(ownerRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  media.overwritePermissions(message.guild.defaultRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true
  })

  memes.overwritePermissions(message.guild.defaultRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true,
    EMBED_LINKS: true,
    ATTACH_FILES: true
  })

  musicText.overwritePermissions(message.guild.defaultRole,{
    READ_MESSAGES: true,
    SEND_MESSAGES: true,
    EMBED_LINKS: true
  })

  music.overwritePermissions(message.guild.defaultRole,{
    CONNECT: true,
    SPEAK: false
  })

  afk.overwritePermissions(message.guild.defaultRole,{
    CONNECT: true,
    SPEAK: false
  })





  message.channel.send(PermsDone)




  message.channel.send(MakingOver)

}

module.exports.help = {
  name: "testsetup"
}
