import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: {
		name: "ping",
		description: "PING!"
	},
	async fox(interaction) { await interaction.reply("pong"); }
};