const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("commenu")
		.setDescription("poop"),
	async execute(interaction) {
		const select = new StringSelectMenuBuilder()
			.setCustomId("starter")
			.setPlaceholder("Make selection!")
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
					.setValue("pikachu")
					.setEmoji('😍')
					.setDefault(true),
		);
		// We also have UserSelectMenuBuilder, RoleSelectMenuBuilder, MentionableSelectMenuBuilder and ChannelSelectMenuBuilder.
		// they are build like this:
		// const user = new UserSelectMenuBuilder()
		// .setCusromId("users")
		// .setPlaceholder("select a user")
		// typescript will require <StringSelectMenuBuilder>
		const row = new ActionRowBuilder()
			.addComponents(select);
		await interaction.reply({ content: "Choose a starter!", components: [row] });
	}
};