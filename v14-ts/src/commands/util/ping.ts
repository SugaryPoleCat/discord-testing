import cmd from "../../utilities/cmd";
import path from "path";
module.exports = {
	data: cmd({ name: path.basename(__filename), description: "PING!" }),
	async fox(interaction) {
		console.log(interaction);
		await interaction.reply("pong");
	}
};