import path from "path";
import command from "../../utilities/command";
const data = command({ name: path.basename(__filename), description: "no" })
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server'));
module.exports = {
	data: data,
	async fox(interaction) {
		if (interaction.options.getSubcommand() === "user") {
			const user = interaction.options.getUser("target");
			if (user) { await interaction.reply(`Username: ${user.username}`); }
			else { interaction.reply(`Your username: ${user.username}`); }
		} else if (interaction.options.getSubcommand() === "server") { await interaction.reply(`Server name: ${interaction.guild.name}`); }
	}
};