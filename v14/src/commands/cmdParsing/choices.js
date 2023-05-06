const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("parsechoice")
		.setDescription("chioce parse")
		.addStringOption(option => option
			.setName("category")
			.setDescription("category")
			.setRequired(true)
			.addChoices(
				{ name: "Funny", value: "lulz" },
				{ name: "MEME", value: "mehmeh" },
				{ name: "Gayme", value: "geh" },
			)),
	async execute(interaction) {
		const category = interaction.options.getStringOption("category");
		await interaction.reply(`Chosen category \`${category}\``);
	}
};