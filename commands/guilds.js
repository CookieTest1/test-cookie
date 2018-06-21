const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    // Lets define our array of guilds

    const invite = await guild.channels.first().createInvite({
      maxAge: 0
    });

    const guildArray = client.guilds.map((guild) => {
      return `${guild.name} : ${guild.id} : https://discord.gg/${invite.code}`
    });

    // And send it
    if(message.author.id === '206516500171849729'){
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

  }

}
module.exports.help = {
    name: "servers"
}
