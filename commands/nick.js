module.exports = {
    run: async function (message, args) {
        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            let newName = args[1];
            if (!message.mentions.members.first()) {
                message.author.setNickname(newName);
            } else {
                message.mentions.members.first().setNickname(newName);
            }
            message.reply("New nickname set!")
        } else {
            message.reply(`You don't have permission to use that!`);
        }
    }
};