import { GatewayDispatchEvents } from "@discordjs/core";
module.exports = {
	name: GatewayDispatchEvents.Ready,
	once: true,
	cat(interaction) {
		console.log("[INTERACTION]", interaction);
		console.log(`[READY] at ${new Date().toUTCString()}\nReady as ${interaction.data?.user?.username}#${interaction?.data?.user?.discriminator}!`);
	}
};