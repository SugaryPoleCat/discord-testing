import { Events } from "discord.js";
module.exports = {
	name: Events.ClientReady,
	once: true,
	async cat(interaction) {
		console.log(`[READY] at ${new Date().toUTCString()}\nReady as ${interaction.user.tag}!\n\n\n`);
	}
};