var enabled = false;

module.exports = {
    run: function (message) {
        if (message.member.hasPermission("MUTE_MEMBERS")) {
            if (enabled === false) {
                message.channel.overwritePermissions("745722617696223363", {
                    SEND_MESSAGES: false,
                });
                message.channel.overwritePermissions("745795255638425701", {
                    SEND_MESSAGES: true,
                });
                enabled = true;
                message.reply("Enabled lockdown!");
            } else if (enabled === true) {
                message.channel.overwritePermissions("745722617696223363", {
                    SEND_MESSAGES: null,
                });
                message.channel.overwritePermissions("745795255638425701", {
                    SEND_MESSAGES: null,
                });
                enabled = false;
                message.reply("Disabled lockdown!");
            }
        } else {
            message.reply("Sorry, you don't have permission to use that!");
        }
    }
};