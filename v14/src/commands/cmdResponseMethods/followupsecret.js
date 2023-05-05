const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("cmdFlwScrt").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!");
		await wait(4000);
		await interaction.followUp({ content: "Pong again!", ephemeral: true });
	}
};