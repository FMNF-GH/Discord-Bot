module.exports = {
    run: async function (message, client) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${Math.round(seconds)} seconds`);
    }
};