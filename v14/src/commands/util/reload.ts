import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "Reload commands" })
		.addStringOption(option =>
			option.setName("command")
				.setDescription("The command to reload.")
				.setRequired(true)),
	async fox(interaction) {
		const commandName = interaction.options.getString("command", true).toLowerCase();
		const command = interaction.client.commands.get(commandName);
		if (!command) { return interaction.reply({ content: `There is no command with the name \`${commandName}\`!`, ephemeral: true }); }
	},
};
