const { SlashCommandBuilder } = require("discord.js");
const data = new SlashCommandBuilder()
	.setName("advRequired")
	.setDescription("idk")
	.addStringOption(option => option.setName("input").setDescription("required option").setRequired(true));
module.exports = {
	cooldown: 5,
	data: data,
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};