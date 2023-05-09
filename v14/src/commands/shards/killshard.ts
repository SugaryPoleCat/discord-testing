import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "PING! See if the bot is working" }),
	async fox(interaction, client) {
		// preferably you want the user to input the shard id instead of just a fucking 0
		client.shard.broadcastEval((c) => {
			if (c.shard.ids.inculdes(0)) { process.exit(); }
		});
	}
};