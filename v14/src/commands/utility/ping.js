const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		// all names and values, even in options, must be lowercase.
		.setName("ping")
		.setDescription("Replies wiht pong!"),
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};