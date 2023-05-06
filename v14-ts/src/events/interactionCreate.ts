import { Events } from "discord.js";
module.exports = {
	name: Events.InteractionCreate,
	fox(interaction) {
		console.log("InteractionCreate");
	}
};