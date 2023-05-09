const wait = require("node:timers/promises").setTimeout;
import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		// for ephemeral, we nbeed to set deferReply as ephemeral
		await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply({ content: "Secret Pong!", ephemeral: true });
	}
};