const Discord = require("discord.js");

module.exports = {
    run: function (message) { 
        var weekday = new Date().toLocaleString('en-us', {  weekday: 'long' });

        var color = "";
        var cohort = "";

        if (weekday === "Monday") {
            color = "Orange";
            cohort = "A";
        } else if (weekday === "Tuesday") {
            color = "Orange";
            cohort = "B";
        } else if (weekday === "Wednesday") {
            color = "Black";
            cohort = "A";
        } else if (weekday === "Thursday") {
            color = "Black";
            cohort = "B";
        } else if (weekday === "Friday") {
            color = "Online";
            cohort = "Both";
        }

        if (weekday === "Monday" || weekday === "Tuesday" || weekday === "Wednesday" || weekday === "Thursday") {
            message.reply(`Today is ${weekday}! (${color} day, Cohort ${cohort})`);
        } else if (weekday === "Friday") {
            message.reply(`Today is ${weekday}! (Online, Both Cohorts)`);
        } else if (weekday === "Saturday" || weekday === "Sunday"){
            message.reply(`Today is ${weekday}!`);
        }
    }
};
