import command from "../../utilities/command";
import path from "path";
import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } from "discord.js";
module.exports = {
	data: command({ name: path.basename(__filename), description: "poop" }),
	async fox(interaction) {
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
		const row = new ActionRowBuilder<StringSelectMenuBuilder>()
			.addComponents(select);
		await interaction.reply({ content: "Choose a starter!", components: [row] });
	}
};