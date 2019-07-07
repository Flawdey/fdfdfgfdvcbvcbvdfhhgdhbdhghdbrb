const { Client, Collection } = require("discord.js");
const { token } = process.env.TOKEN;
const bot = new Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);




["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.on('error', err => {
    console.log(err);
});

bot.login(token);