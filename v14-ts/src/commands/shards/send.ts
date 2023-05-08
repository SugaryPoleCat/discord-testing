import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "Send message across shards" })
		.addStringOption(option => option.setName("poop").setDescription("Send to this channel")),
	async fox(interaction, client) {
		// the basic.
		// const chID = interaction.options.getString("poop");
		// const channel = client.channels.cache.get(chID);
		// if (!channel) { return interaction.reply("Channel doesnt exist"); }
		// channel.send("hello!");
		// return interaction.reply("Message sent successfully");

		const chID = interaction.options.getString("poop");
		return client.shard.broadcastEval(async (c, { channelId }) => {
			const channel = c.channels.cache.get(channelId);
			if (channel) {
				await channel.send(`this is amessage from shard ${c.shard.ids.join(',')}`);
				return true;
			}
			return false;
		}, { context: { channelId: chID } })
			.then((sentArray) => {
				console.log("sentArray:", sentArray);
				if (!sentArray.includes(true)) {
					return interaction.reply("Channel does not exist");
				}
				return interaction.reply("message sent");
			});
	}
};