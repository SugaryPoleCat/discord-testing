const { Events } = require("discord.js");
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) { console.log(`${new Date().toUTCString()}\nReady as ${client.user.tag}`); },
};