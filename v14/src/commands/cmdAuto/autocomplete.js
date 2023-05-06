const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("autocmd")
		.setDescription("description")
		.addStringOption(option => option
			.setName("guide")
			.setDescription("description")
			.setAutocomplete(true)),
	async exectue(interaction) {

	}
};