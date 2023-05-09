import path from "path";
import command from "../../utilities/command";
const data = command({ name: path.basename(__filename), description: "get a cute picture of a dog." })
	.setNameLocalizations({
		pl: 'pies',
		de: 'hund',
	})
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
	async fox(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};