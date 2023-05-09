import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" })
		.addStringOption(option => option
			.setName("query")
			.setDescription("search for stuff")
			.setAutocomplete(true)),
	async dog(interaction) {
		const focusedValue = interaction.options.getFocused();
		const choices = ["popular topics: Threads", "Sharding: Getting started", "Pooping: Good for health?"];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		// cannot be defered.
		// maximum of 25 choices.
		await interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
	},
};