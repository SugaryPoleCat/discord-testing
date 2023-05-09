import command from "../../utilities/command";
import path from "path";
function findEmoji(c, { nameOrId }) {
	const emoji = c.emojis.cache.get[nameOrId] || c.emojis.cache.find((e) => e.name.toLowerCase() === nameOrId.toLowerCase());
	if (!emoji) { return null; }
	// you can delete the emioji too.
	// emoji.delete();
	return emoji;
}
module.exports = {
	data: command({ name: path.basename(__filename), description: "Using functions extended" })
		.addStringOption(option => option.setName("poop").setDescription("Get emoji")),
	async fox(interaction, client) {
		const emoji = interaction.options.getString("poop");
		return client.shard.broadcastEval(findEmoji, { context: { nameOrId: emoji } })
			.then((emojiArray) => {
				const foundEmoji = emojiArray.find((emoji) => emoji);
				if (!foundEmoji) { return interaction.reply("couldnt find your emoji nerd"); }
				return interaction.reply(`found your emoji nerd: ${foundEmoji.animated ? `<${foundEmoji.identifier}>` : `<:${foundEmoji.identifier}> emoji!`}!`);
			});
	}
};