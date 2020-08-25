const Discord = require("discord.js");
const script = require("./script.json");

module.exports = {
    run: async function (message) {
		message.delete();
        var i = 0;
			  var interval = setInterval (function () {
				  for (var l = 0; l < 5; l++) {
					  var line = script[i];
					  message.channel.send(line);
					  i += 1;
				  }
			  }, 5000); 
    }
};