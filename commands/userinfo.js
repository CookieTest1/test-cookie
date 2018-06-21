const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    message.delete();
            let user = message.mentions.users.first() || message.guild.members.get(args[0]);



            let UserInfo = new Discord.RichEmbed()
            .setAuthor(user.username) //Heading With Username & Their Avatar
            .setTitle('UserInfo')
            .setColor('RANDOM') //You Can Use HexColour Ex:- #000000
            .addField('Created At', user.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
            .addField('ID', user.id) //The ID of the User/author
            .addField('Tag', user.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
            .addField('Username', user.username) //The username of the user || Ex:- Sai Chinna
            .addField('Nickname', message.guild.member(user).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top
            .setTimestamp() //The timestamp of this embed
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

        message.channel.send(UserInfo).then(msg => msg.delete(5000));

    }

    module.exports.help = {
      name: "userinfo"
    }
