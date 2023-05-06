import { Events } from "discord.js";
module.exports = {
	name: Events.ClientReady,
	once: true,
	fox(interaction) {
		console.log("ready", interaction);
	}
};