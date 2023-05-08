import { Events } from "discord.js";
module.exports = {
	name: Events.InteractionCreate,
	cat(interaction, command) {
		console.log("[INTERACTION]", interaction);
		console.log("[COMMAND]", command);
		// this will do things when commands are called.
	}
};