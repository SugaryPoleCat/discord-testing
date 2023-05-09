import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" })
		.addStringOption(option => option
			.setName("query")
			.setDescription("search for stuff")
			.setAutocomplete(true)),
	async dog(interaction) {
		const string = interaction.options.getString("query").value;
		await interaction.reply(string);
	},
};