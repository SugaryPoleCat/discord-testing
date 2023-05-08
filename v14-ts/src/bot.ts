require("dotenv").config();
import { Client, GatewayIntentBits, Collection } from "discord.js";
import path from "path";
import fs from "fs";
import { load } from "./utilities/commandLoad";
const TOKEN = String(process.env.TOKEN) || "BAD_TOKEN";
switch (TOKEN) {
	case "BAD_TOKEN":
		throw new Error("Invalid token");
	default: break;
}
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds] });
const commands = load();
const cooldowns = new Collection();
const eventsPath = path.join(__dirname, "events");
const eventsFolder = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));
for (const file of eventsFolder) {
	const eventFilepath = path.join(eventsPath, file);
	const event = require(eventFilepath);
	switch (event.once) {
		case true:
			client.once(event.name, async (...args) => { await event.cat(...args, commands.commands); });
			break;
		default:
			client.on(event.name, async (...args) => { await event.cat(...args, commands.commands, cooldowns); });
			break;
	}
}
console.log(`Loaded ${commands.count} commands out of ${commands.total}`);
client.login(TOKEN);