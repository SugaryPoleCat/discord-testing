require("dotenv").config();
import path from "path";
import fs from "fs";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { GatewayIntentBits, Client, GatewayDispatchEvents, InteractionType, MessageFlags } from "@discordjs/core";
import { load } from "./utilities/commandLoad";
const TOKEN = String(process.env.NEXTTOKEN);
const rest = new REST({ version: "10" }).setToken(TOKEN);
// accodring to my mind, this is just the normal client thingy.
const gateway = new WebSocketManager({
	token: TOKEN,
	intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
	rest: rest,
});
const client = new Client({ rest: rest, gateway: gateway });
const commands = load();
const eventsPath = path.join(__dirname, "events");
const eventsFolder = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));
for (const file of eventsFolder) {
	const eventFilePath = path.join(eventsPath, file);
	const event = require(eventFilePath);
	switch (event.once) {
		case true:
			client.once(GatewayDispatchEvents.Ready, async (...args) => { event.cat(...args); });
			break;
		default:
			client.on(event.name, async (...args) => { event.cat(...args); });
			break;
	}
}
gateway.connect();