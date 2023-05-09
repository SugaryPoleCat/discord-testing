import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "gets a user info" }),
	async fox(interaction) { await interaction.reply(`This command was run by ${interaction.user.username}, who joined at ${interaction.member.joinedAt}`); }
};