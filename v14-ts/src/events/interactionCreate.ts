import { Events } from "discord.js";
module.exports = {
	name: Events.InteractionCreate,
	// commands = commands.commands as  in cmds.commands
	async cat(interaction, commands) {
		if (!interaction.isChatInputCommand() && !interaction.isAutocomplete()) { return; }
		const command = commands.get(interaction.commandName);
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found`);
			return;
		}
		if (!commands.cooldowns.has(command.data.name)) { commands.cooldowns.set(command.data.name, new Map()); }
		const now = Date.now();
		const timestamps = commands.cooldowns.get(command.data.name);
		const defaultCooldownDuration = 3;
		const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;
		if (timestamps.has(interaction.user.id)) {
			const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
			if (now < expirationTime) {
				const expiredTimestamp = Math.round(expirationTime / 1000);
				return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>`, ephemeral: true });
			}
		}
		timestamps.set(interaction.user.id, now);
		setTimeout(() => { timestamps.delete(interaction.user.id, cooldownAmount); });
		try {
			if (interaction.isChatInputCommand()) { await command.fox(interaction, interaction.client); }
			else if (interaction.isAutocomplete()) { await command.dog(interaction, interaction.client); }
		} catch (err) { console.error(`[WARNING] at ${new Date().toUTCString()}\n` + err); }
	}
};