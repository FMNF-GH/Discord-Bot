const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
    run: async function (message, args) {
        weather.find({search:args.join(" "), degreeType:'F'}, function(err, result) {
            if (result === undefined || result.length === 0) {
              message.channel.send(`${message.author}, Please provide a valid location!`);
              return;
            }
            
            var current = result[0].current;
            //var location = result[0].location;

            const embed = new Discord.RichEmbed();
              embed.setDescription(`__**${current.skytext}**__`);
              embed.setAuthor(`Weather for ${current.observationpoint}`);
              embed.setThumbnail(current.imageUrl);
              embed.setColor(message.member.highestRole.color);
              embed.addField("Temperature", `${current.temperature} Degrees`, false);
              embed.addField("Feels Like", `${current.feelslike} Degrees`, false);
              embed.addField("Winds", current.winddisplay, false);
              embed.addField("Humidity", `${current.humidity}%`, false);
            message.channel.send(embed);
          });
    }
};