const wait = require("node:timers/promises").setTimeout;
import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
		// valid for 15 minutes. This is in milliseconds
		await wait(2000);
		await interaction.editReply({ content: "Secret Pong again!", ephemeral: true });
	}
};