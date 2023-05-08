import { SlashCommandBuilder } from "discord.js";
module.exports = {
	data: new SlashCommandBuilder().setName("serverstats").setDescription("Gets the server"),
	async fox(interaction) { await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`); }
};