const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("autocmdmulti")
		.setDescription("description")
		.addStringOption(option => option
			.setName("query")
			.setDescription("search for stuff")
			.setAutocomplete(true))
		.addStringOption(option => option
			.setName("version")
			.setDescription("description")
			.autocomplete(true)),
	async autocomplete(interaction) {
		const focusedOption = interaction.options.getFocused();
		let choices;
		if (focusedOption.name === "query") { choices = ["Poop: Good for health?", "Piss: Why drink it?"]; }
		if (focusedOption.name === "version") { choices = ["v9", "v10", "v11", "v12"]; }
		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
		await interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
	},
};