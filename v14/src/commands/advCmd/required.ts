import command from "../../utilities/command";
import path from "path";
const data = command({ name: path.basename(__filename), description: "ppooop" })
	.addStringOption(option => option.setName("input").setDescription("required option").setRequired(true));
module.exports = {
	data: data,
	async fox(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};