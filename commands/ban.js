module.exports = {
    run: async function (message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
        } else {
            let member = message.mentions.members.first();
            if (!member) {
                message.reply("Please mention a valid member of this server.");
            } else {
                if (!member.bannable) {
                    message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
                } else {
                    let reason = args.slice(1).join(' ');
                    if (!reason) {
                        reason = "No reason provided";
                    }
                    await member.ban(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't ban ${member} because ${error}`));
                    message.reply(`${member.user.tag} was banned. Reason: "${reason}"`);
                }
            }
        }
    }
};
