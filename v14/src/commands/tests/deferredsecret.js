const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("deferredsecret").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		// for ephemeral, we nbeed to set deferReply as ephemeral
		await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply({ content: "Secret Pong!", ephemeral: true });
	}
};