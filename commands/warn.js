const Discord = require("discord.js");

module.exports = {
    run: async function (message, args, client) {
        const member = message.mentions.members.first();
        var warnLogChannel = client.channels.get("747891712495452212");
        const moderatorNickname = message.guild.members.get(message.author.id).nickname;
        var reason = args.slice(1).join(' ');
        if (!reason) {
            reason === "None";
        }

        var embed = new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .addField("Name", member.displayName, true)
            .addField("Moderator", moderatorNickname, true)
            .addField("When", moment(member.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
            .addField("Reason", reason)
            .setTitle("Warn")
            .setAuthor(message.guild.name, message.guild.iconURL)
            //.setThumbnail(message.mentions.members.first().displayAvatarURL)
            .setTimestamp()
        warnLogChannel.send(embed);
    }
};