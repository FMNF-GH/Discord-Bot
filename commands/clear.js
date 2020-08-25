module.exports = {
    run: async function (message, args) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            var deleteCount = parseInt(args[0], 10);
            deleteCount++;
            if (!deleteCount || deleteCount < 2 || deleteCount > 101) {
                message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
            }
            const fetched = await message.channel.fetchMessages({limit: deleteCount});
            message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
            console.log(`Cleared ${deleteCount} messages from #${message.channel}.`)
        } else {
            message.reply("You don't have permission to use this!")
        }
    }
};
