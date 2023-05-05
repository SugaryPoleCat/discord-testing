require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
// const TOKEN = String(process.env.TOKEN);
const { TOKEN } = require("../config.json");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) { client.once(event.name, async (...args) => { await event.execute(...args); }); }
	else { client.on(event.name, async (...args) => { await event.execute(...args); }); }
}
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter((f) => f.endsWith(".js"));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		console.log(command);
		if ("data" in command && "execute" in command) { client.commands.set(command.data.name, command); }
		else { console.error(`[WARNING] at ${new Date().toUTCString()}\nThe command at ${filePath} is missing a required "data" or "execute" property`); }
	}
}
client.login(TOKEN);