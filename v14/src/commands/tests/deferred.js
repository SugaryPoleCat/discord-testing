const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("deferred").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(4000);
		await interaction.editReply("Pong!");
	}
};