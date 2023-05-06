require("dotenv").config();
import { Client, GatewayIntentBits, Collection } from "discord.js";
// import load from "./cmdload.js";
import path from "path";
import fs from "fs";
const TOKEN = String(process.env.TOKEN) || "BAD_TOKEN";
switch (TOKEN) {
	case "BAD_TOKEN":
		throw new Error("Invalid token");
	default: break;
}
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds] });
// must figure out a way for this to work.
client.commands = new Collection();
const eventsPath = path.join(__dirname, "events");
const eventsFolder = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));
for (const file of eventsFolder) {
	const eventFilepath = path.join(eventsPath, file);
	const event = require(eventFilepath);
	switch (event.once) {
		case true:
			client.once(event.name, async (...args) => { await event.fox(...args); });
			break;
		default:
			client.on(event.name, async (...args) => { await event.fox(...args); });
			break;
	}
}
// load();
const commandsFolder = path.join(__dirname, "commands");
const commandsPath = fs.readdirSync(commandsFolder);
for (const folder of commandsPath) {
	const commandFolderPath = path.join(commandsFolder, folder);
	const commandFolderFiles = fs.readdirSync(commandFolderPath).filter((f) => f.endsWith(".js"));
	for (const file of commandFolderFiles) {
		const filePath = path.join(commandFolderPath, file);
		const command = require(filePath);
		console.log("[COMMAND]", command);
		if ("data" in command && "fox" in command) { client.commands.set(command.data.name, command); }
	}
}
console.log("DONE");
// client.login(TOKEN);