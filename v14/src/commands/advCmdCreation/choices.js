const { SlashCommandBuilder } = require("discord.js");
const data = new SlashCommandBuilder()
	.setName("advChoices")
	.setDescription("idk")
	.addStringOption(option => option
		.setName("input")
		.setDescription("required option")
		.addChoices(
			{ name: "Funny", value: "funny" },
			{ name: "Nice", value: "nice" },
			{ name: "Gay", value: "gay" },
		)
	);
module.exports = {
	cooldown: 5,
	data: data,
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};