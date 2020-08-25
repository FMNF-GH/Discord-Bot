const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports = {
    run: async function (message) {
      try {
        const { body } = await snekfetch
              .get('https://www.reddit.com/r/dankmemes.json')
              .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
            const randomnumber = Math.floor(Math.random() * allowed.length);
            const embed = new Discord.RichEmbed()
              .setColor("#CB0000")
              .setImage(allowed[randomnumber].data.url)
              .setFooter(`Requested by ${message.author.tag} | Provided by r/dankmemes`)
              .setTimestamp();
            message.channel.send(embed);
      } catch(error) {
        console.log(error);
      }
    }
};