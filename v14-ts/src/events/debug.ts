import { Events } from "discord.js";
module.exports = {
	name: Events.Debug,
	cat(interaction) {
		console.log("[INTERACTION]", interaction);
	}
};