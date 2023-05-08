import command from "../../utilities/command";
import path from "path";
function findEmoji(c, { nameOrId }) {
	return c.emojis.cache.get[nameOrId] || c.emojis.cache.find((e) => e.name.toLowerCase() === nameOrId.toLowerCase());
}
module.exports = {
	data: command({ name: path.basename(__filename), description: "Using functions extended" })
		.addStringOption(option => option.setName("poop").setDescription("Get emoji")),
	async fox(interaction, client) {
		const emoji = interaction.options.getString("poop");
		return client.shard.broadcastEval(findEmoji, { context: { nameOrId: emoji } })
			.then(console.log);
	}
};