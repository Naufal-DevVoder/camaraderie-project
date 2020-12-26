const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

require('./server.js');

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login('TOKEN');
