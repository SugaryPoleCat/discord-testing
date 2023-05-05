const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()
	.setName('advLcl')
	.setNameLocalizations({
		pl: 'pies',
		de: 'hund',
	})
	.setDescription('Get a cute picture of a dog!')
	.setDescriptionLocalizations({
		pl: 'Słodkie zdjęcie pieska!',
		de: 'Poste ein niedliches Hundebild!',
	})
	.addStringOption(option =>
		option
			.setName('breed')
			.setDescription('Breed of dog')
			.setNameLocalizations({
				pl: 'rasa',
				de: 'rasse',
			})
			.setDescriptionLocalizations({
				pl: 'Rasa psa',
				de: 'Hunderasse',
			}),
	);
module.exports = {
	cooldown: 5,
	data: data,
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};