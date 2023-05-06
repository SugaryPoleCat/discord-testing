const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("autocmdother")
		.setDescription("description")
		.addStringOption(option => option
			.setName("query")
			.setDescription("search for stuff")
			.setAutocomplete(true)),
	async autocomplete(interaction) {
		const string = interaction.options.getString("query").value;
		await interaction.reply(string);
	},
};