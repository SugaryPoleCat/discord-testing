import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		await interaction.reply("Public Pong!");
	}
};