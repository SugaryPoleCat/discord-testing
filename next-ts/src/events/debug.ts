import { GatewayDispatchEvents } from "@discordjs/core";
module.exports = {
	// TJHRE IS NO DEBUG WHAT
	name: GatewayDispatchEvents.Debug,
	cat(interaction) {
		console.log("[INTERACTION]", interaction);
	}
};