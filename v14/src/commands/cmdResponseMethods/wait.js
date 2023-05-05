const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("cmdWait").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
		// valid for 15 minutes. This is in milliseconds
		await wait(2000);
		await interaction.editReply({ content: "Secret Pong again!", ephemeral: true });
	}
};