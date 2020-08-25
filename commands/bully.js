const Discord = require("discord.js");
const { config } = require("process");

module.exports = {
    run: async function (message) {
      if (message.author.id === config.owner_id || message.author.id === "705814419845677098") {
        const member = message.mentions.members.first();
        message.delete();
        for (var i = 0; i < 50; i++) {
          member.send("ur gay");
        }
      } else {
        message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
      }
    }
};