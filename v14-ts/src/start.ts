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
const d_Commands = new Collection();
const eventsPath = path.join(__dirname, "events");
const eventsFolder = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));
for (const file of eventsFolder) {
	const eventFilepath = path.join(eventsPath, file);
	const event = require(eventFilepath);
	switch (event.once) {
		case true:
			client.once(event.name, async (...args) => { await event.cat(...args, d_Commands); });
			break;
		default:
			client.on(event.name, async (...args) => { await event.cat(...args, d_Commands); });
			break;
	}
}
const commands = load();
let cmds: number = 0, totcmds: number = 0;
for (const cmd of commands.filePaths) {
	totcmds++;
	const command = require(cmd);
	if ("data" in command && "fox" in command) {
		cmds++;
		d_Commands.set(command.data.name, command);
	}
	else if ("data" in command && "dog" in command) {
		cmds++;
		d_Commands.set(command.data.name, command);
	}
	else { console.error(`[WARNING] at$ ${new Date().toUTCString()}\nThe command ${command.name} at ${cmd.filePath} is missing "data" or "fox" or "dog" property.`); }
}
console.log(`Cmds loaded: ${cmds} out of ${totcmds}`);
// client.login(TOKEN);