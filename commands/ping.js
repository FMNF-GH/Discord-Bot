module.exports = {
    run: async function (message, client) {
        const messawait = await message.channel.send("Ping?");
        messawait.edit(`Pong! Latency is ${messawait.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
};