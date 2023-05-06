import { SlashCommandBuilder } from "discord.js";
module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("description"),
	async fox(interaction) {
		console.log(interaction);
		await interaction.reply("pong");
	}
};