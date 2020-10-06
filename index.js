const Cathy = require("cathy.js");
const bot = new Cathy();
const Discord = require("discord.js");
const client = new Discord.Client({
    disableMentions: "all"
});
const config = require("./config.json");

client.on("ready", () => console.log("ready"));

client.on("message", message => {
    if (message.author.bot || !message.guild) return;
    if (!message.content) return;

    if (message.channel.id === config.CHANNEL_ID) {
        const response = bot.chat(message.cleanContent);
        message.channel.send(response);
    }
});

client.login(config.TOKEN);