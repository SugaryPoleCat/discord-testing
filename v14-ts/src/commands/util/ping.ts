import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "PING! See if the bot is working" }),
	async fox(interaction) { await interaction.reply("pong"); }
};