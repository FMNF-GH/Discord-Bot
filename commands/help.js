const Discord = require("discord.js");

module.exports = {
    run: async function (message) {
      message.react("✅");
      const embed = new Discord.RichEmbed()
        .setColor(message.member.highestRole.color)
        .addField('Fun', '- `meme`, - `day`, - `avatar`, - `weather`', false)
        .addField('Info', '- `help`, - `server`, - `user`', false)
        .addField('Moderation', '- `ban`, - `clear`, - `kick`, - `lockdown`, - `mute`, - `tempmute`, - `unmute`, - `warn`', false)
        .setTimestamp();
      message.channel.send(embed);
    }
};