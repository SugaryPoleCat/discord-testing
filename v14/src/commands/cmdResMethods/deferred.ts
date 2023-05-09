import command from "../../utilities/command";
import path from "path";
const wait = require("node:timers/promises").setTimeout;
module.exports = {
	cooldown: 5,
	data: command({ name: path.basename(__filename), description: "deferred" }),
	async fox(interaction) {
		// defer basically means it --- yueah waht does it do?
		await interaction.deferReply();
		await wait(4000);
		await interaction.editReply("Pong!");
	}
};