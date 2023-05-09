const wait = require("node:timers/promises").setTimeout;
import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		await interaction.reply("Pong!");
		await wait(4000);
		await interaction.followUp({ content: "Pong again!", ephemeral: true });
	}
};