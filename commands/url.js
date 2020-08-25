const Discord = require("discord.js");
  
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("# Put your YouTube API key here!");

module.exports = {
    run: async function (message, args) {
      youtube.searchVideos(args).then(results => {
            const embed = new Discord.RichEmbed();
                embed.setColor("#CB0000");
                embed.setTitle(results[0].title);
                embed.setURL(results[0].url);
            message.channel.send(embed);
        });
    }
};
