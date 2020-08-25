module.exports = {
    run: async function (message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send(`Sorry ${message.author}, you don't have permission to use that!`);
        } else {
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
            if (!member) {
                message.reply("Please mention a valid member of this server");
            } else {
                if (!member.kickable) {
                    message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
                } else {
                    let reason = args.slice(1).join(' ');
                    if (!reason) {
                        reason = "No reason provided";
                    }
                    await member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick ${member} because ${error}`));
                    message.reply(`${member.user.tag} was kicked.`);
                }
            }
        }
    }
};