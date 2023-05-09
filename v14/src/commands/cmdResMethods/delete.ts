const wait = require("node:timers/promises").setTimeout;
import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		await interaction.reply("Pong!");
		const message = await interaction.fetchReply();
		await wait(4000);
		console.log(message);
		await interaction.deleteReply();
	}
};