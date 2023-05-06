const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("commenu")
		.setDescription("poop"),
	async execute(interaction) {
		const select = new StringSelectMenuBuilder()
			.setCustomId("starter")
			.setPlaceholder("Select up to 2 startes!")
			// they are required for multi selection
			.setMinValues(1)
			.setMaxValues(2)
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel("Bulbasaur")
					.setDescription("Grass/poison")
					.setValue("bulbasaur"),
				new StringSelectMenuOptionBuilder()
					.setLabel("Charmander")
					.setDescription("Fire")
					.setValue("charmander"),
				new StringSelectMenuOptionBuilder()
					.setLabel("Squirtle")
					.setDescription("Water")
					.setValue("squirtle"),
				new StringSelectMenuOptionBuilder()
					.setLabel("Pikachu")
					.setDescription("Lightning")
					.setValue("pikachu"),
			);
		const row = new ActionRowBuilder()
			.addComponents(select);
		await interaction.reply({ content: "Choose a starter!", components: [row] });
	}
};