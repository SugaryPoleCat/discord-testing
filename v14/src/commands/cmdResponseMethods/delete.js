const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("cmdDel").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!");
		const message = await interaction.fetchReply();
		await wait(4000);
		console.log(message);
		await interaction.deleteReply();
	}
};