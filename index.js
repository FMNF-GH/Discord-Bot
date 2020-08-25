const Discord = require('discord.js');
const client = new Discord.Client({
    fetchAllMembers: true,
    disableEveryone: true
});

module.exports = client;
const config = require("./config.json");

const weather = require("weather-js");
const snekfetch = require("snekfetch");

const logChannel = client.channels.get("747585757954310245");

client.on("ready", () => {
  console.log(`Client has started in ${client.guilds.size} servers.`);
  var today = new Date();
  client.user.setStatus("dnd");
  client.user.setActivity(` ${config.prefix}help`);
});

client.on("guildCreate", guild => {
  client.user.setActivity(` ${config.prefix}help`);
});

client.on("guildDelete", guild => {
  client.user.setActivity(` ${config.prefix}help`);
});

/*client.on("channelCreate", channel => {
  logChannel.send(`${memberJoined} joined, invited by ${memberJoined.invite}`);
});

client.on("guildMemberAdd", channel => {
  logChannel.send(`New channel "${channel.name}" created by ${channel.crea}`);
});

client.on("guildMemberAdd", memberJoined => {
  const inviteListChannel = client.channels.get("747585757954310245");
  inviteListChannel.send(`${memberJoined} joined, invited by ${memberJoined.invite}`);
});*/

client.on('message', async message => {

  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let messageResponse = require("./commands/" + command + ".js").run(message, args, args.slice(1, args.length).join(" "), client);
    while (typeof messageResponse === "function") {
      messageResponse = await messageResponse;
    }
  } catch (err) {
    if (!`${err}`.includes("find module")) {
      if (message.author.id !== config.owner_id) message.channel.send("Sorry, there was an error running that command. The developer was notified of this error.");
      (await client.fetchUser(config.owner_id)).send("There was an error running\n```" + message.content + "```\nran by **" + message.author.tag + "**:\n```" + err.stack + "```");
    }
  }
});

client.login(config.token);