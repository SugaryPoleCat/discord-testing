import { Events } from "discord.js";
module.exports = {
	name: Events.ClientReady,
	once: true,
	cat(interaction) {
		console.log("[INTERACTION]", interaction);
		console.log(`[READY] at ${new Date().toUTCString()}\nReady as ${interaction.user.tag}!`);
	}
};