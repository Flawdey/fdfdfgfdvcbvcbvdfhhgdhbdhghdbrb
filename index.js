const { Client, Collection } = require("discord.js");
const bot = new Client();





["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));




bot.login('NTk1NjU1NTA2NzExMDE5NTMy.XR8t7w.K6BmpBXQrkMkhf3vEZ9HC5dYfLgs');