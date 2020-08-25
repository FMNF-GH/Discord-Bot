//const { config } = require("process");

module.exports = {
    run: async function (message, config) {
        if (message.author.id === config.owner_id || message.author.id === "705814419845677098") {
            message.channel.send(":arrows_counterclockwise: Successfully restarted the bot!");
            message.client.destroy();
        } else {
            message.reply(`You don't have permission to use that!`);
        }
    }
};