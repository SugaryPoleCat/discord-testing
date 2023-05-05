const { SlashCommandBuilder } = require("discord.js");
module.exports = {
	// ideally create a rule here that says only admin can do this.
	data: new SlashCommandBuilder()
		.setName("reload")
		.setDescription("Reloads a command.")
		.addStringOption(option =>
			option.setName("command")
				.setDescription("The command to reload.")
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString("command", true).toLowerCase();
		const command = interaction.client.commands.get(commandName);
		if (!command) { return interaction.reply({ content: `There is no command with the name \`${commandName}\`!`, ephemeral: true }); }
		// in guide, it basically tells you to do that in the index due to the guide not being as far forward as,
		// moving the commands to their own files.
		// I will fix this later, right now I'm too lazy.
	},
};
