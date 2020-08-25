const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyA1uym-BXaxP6vC6LR0LHdljrSAYyCsQic");

module.exports = {
    run: async function (message, args) {
        youtube.searchVideos(args).then(results => {
            const embed = new Discord.RichEmbed();
            for (var i = 0; i < results.length; i++) {
              embed.addField(`${i + 1}. ${results[i].title}`, results[i].url);
            }
            embed.setTitle(`Showing song results for '${args}'`);
            message.channel.send(embed);
          }).catch(console.error);
    }
};
