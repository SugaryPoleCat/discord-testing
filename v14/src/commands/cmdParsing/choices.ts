import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" })
		.addStringOption(option => option
			.setName("category")
			.setDescription("category")
			.setRequired(true)
			.addChoices(
				{ name: "Funny", value: "lulz" },
				{ name: "MEME", value: "mehmeh" },
				{ name: "Gayme", value: "geh" },
			)),
	async fox(interaction) {
		const category = interaction.options.getStringOption("category");
		await interaction.reply(`Chosen category \`${category}\``);
	}
};