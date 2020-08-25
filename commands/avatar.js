const Discord = require("discord.js");

module.exports = {
    run: function (message) {
        let member = message.mentions.members.first();
        if (!member) {
            message.reply("You must specify a user!")
        } else {
            let embed = new Discord.RichEmbed();
                embed.setImage(member.user.displayAvatarURL)
                embed.setColor("#CB0000")
                embed.setTitle(`${member.user.tag}'s Avatar`);
            message.channel.send(embed);
        }
    }
};