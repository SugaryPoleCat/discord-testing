// const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName("cmdflw")
		.setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!");
		// essentlly would be better with a wait, BUT now just following waht hte guide says to learn.
		await interaction.followUp("Pong again!");
	}
};