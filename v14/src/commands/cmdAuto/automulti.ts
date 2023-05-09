import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" })
		.addStringOption(option => option
			.setName("query")
			.setDescription("search for stuff")
			.setAutocomplete(true))
		.addStringOption(option => option
			.setName("version")
			.setDescription("description")
			.setAutocomplete(true)),
	async dog(interaction) {
		const focusedOption = interaction.options.getFocused();
		let choices;
		if (focusedOption.name === "query") { choices = ["Poop: Good for health?", "Piss: Why drink it?"]; }
		if (focusedOption.name === "version") { choices = ["v9", "v10", "v11", "v12"]; }
		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
		await interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
	},
};