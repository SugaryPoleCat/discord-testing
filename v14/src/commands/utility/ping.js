const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder().setName("ping").setDescription("Replies wiht pong!"),
	async execute(interaction) { await interaction.reply("Pong!"); }
};