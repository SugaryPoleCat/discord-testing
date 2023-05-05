const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("pong").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.reply("Public Pong!");
	}
};