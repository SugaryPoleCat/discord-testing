import command from "../../";
const data = new SlashCommandBuilder()
	.setName("advchoices")
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
	async fox(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};