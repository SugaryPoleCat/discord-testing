const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder().setName("user").setDescription("Gets the client user"),
	async execute(interaction) { await interaction.reply(`This command was run by ${interaction.user.username}, who joined at ${interaction.member.joinedAt}`); }
};