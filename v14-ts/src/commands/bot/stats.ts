import { SlashCommandBuilder } from "discord.js";
module.exports = {
	data: new SlashCommandBuilder().setName("stats").setDescription("Gets the server"),
	async fox(interaction, client) {
		// this could be rewritten as try/catch for await, but f that for now
		const promises = [
			// get the appropriate client values.
			client.shard.fetchClientValues("guilds.cache.size"),
			// this evaluates all shards.
			client.shard.broadcastEval((c) => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
		];
		Promise.all(promises)
			.then((result) => {
				const totalGuilds = result[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = result[1].reduce((acc, memberCount) => acc + memberCount, 0);
				return interaction.reply(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
			})
			.catch(console.error);
	}
};