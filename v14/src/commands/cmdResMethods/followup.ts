import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		await interaction.reply("Pong!");
		// essentlly would be better with a wait, BUT now just following waht hte guide says to learn.
		await interaction.followUp("Pong again!");
	}
};