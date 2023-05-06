const { SlashCommandBuilder, ActionRowBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("comactionrow")
		.setDescription("Replies wiht pong!"),
	async execute(interaction) {
		// this is how you build action row, it is used by for example buttons.
		// so on its own it wont work.
		// in TS you need to add <ButtonBuilder> or similar to actionbuilder, you need to provide what action row we building.
		const row = new ActionRowBuilder()
			.addComponents("stuff");
		// you need to create components to pass into it.
		console.log(row);
	}
};