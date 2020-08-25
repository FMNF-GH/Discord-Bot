const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message) {
      const member = message.mentions.members.first();

      if (message.member.hasPermission("MUTE_MEMBERS")) {
        if (!member) {
          message.reply("Please mention a valid member of this server!");
        } else {
          var muteRole = message.guild.roles.find(muteRole => muteRole.name === "Muted");
          if (member.roles.has(muteRole.id)) {
            member.removeRole(muteRole);

            const moderatorNickname = message.guild.members.get(message.author.id).nickname;

            var embed = new Discord.RichEmbed()
              .setColor(message.member.highestRole.color)
              .addField("Name", member.displayName, true)
              .addField("Moderator", moderatorNickname, true)
              .addField("When", moment(member.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
              .setTitle("Unmute")
              .setAuthor(message.guild.name, message.guild.iconURL)
              //.setThumbnail(message.mentions.members.first().displayAvatarURL)
              .setTimestamp()
            message.channel.send(embed);
          } else {
            message.channel.send(`${member} is not muted!`);
          }
        }
      } else {
        message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
      }
    }
};