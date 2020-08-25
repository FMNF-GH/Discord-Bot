const Discord = require("discord.js");

module.exports = {
    run: async function (message) {
        let member = message.mentions.members.first() || message.member;
        var embed = new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .addField("ID:", member.id, true)
            .addField("Nickname:", member.nickname, true)
            .addField("Discriminator:", member.discriminator)
            .addField('Status', message.author.presence.status)
            .addField("Joined Server",  message.member.joinedAt, true);
            const createdAt = message.author.user.createdAt();
            embed.addField("Account Created",  `${createdAt.getUTCMonth()}/${createdAt.getUTCDay()}/${createdAt.getUTCFullYear()}, ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`, true)
            .addField("Highest Role", message.member.highestRole)
	        .setTitle('User Info')
	        .setAuthor(message.author.tag, member.displayAvatarURL)
	        .setThumbnail(member.displayAvatarURL)
	        .setTimestamp()
        message.channel.send(embed);
    }
};