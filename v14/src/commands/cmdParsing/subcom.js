const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()
	.setName('parsesub')
	.setDescription('Get info about a user or a server!')
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
	async execute(interaction) {
		if (interaction.options.getSubcommand() === "user") {
			const user = interaction.options.getUser("target");
			if (user) { await interaction.reply(`Username: ${user.username}`); }
			else { interaction.reply(`Your username: ${user.username}`); }
		} else if (interaction.options.getSubcommand() === "server") { await interaction.reply(`Server name: ${interaction.guild.name}`); }
	}
};