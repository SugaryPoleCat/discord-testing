const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName("cmdLcls").setDescription("Replies wiht pong!"),
	async execute(interaction) {
		const locales = {
			pl: "Witaj Świecie!",
			de: "Hallo Welt!",
		};
		// default is english
		await interaction.reply(locales[interaction.locale] ?? "Hellow World!");
	}
};