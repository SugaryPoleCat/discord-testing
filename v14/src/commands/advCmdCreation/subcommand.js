const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()
	.setName('advSub')
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
	cooldown: 5,
	data: data,
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};