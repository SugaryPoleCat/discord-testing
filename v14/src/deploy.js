require("dotenv").config();
const { REST, Routes } = require("discord.js");
const CLIENT = String(process.env.CLIENT);
const TOKEN = String(process.env.TOKEN);
const DEVGUILD = String(process.env.DEVGUILD);
const fs = require("node:fs");
const path = require("node:path");
const commands = [];
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter((f) => f.endsWith(".js"));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ("data" in command && "execute" in command) { commands.push(command.data.toJSON()); }
		else { console.error(`[WARNING] at ${new Date().toUTCString()}\nThe command at ${filePath} is missing a required "data" or "execute" property.`); }
	}
}
const rest = new REST().setToken(TOKEN);
(async () => {
	try {
		console.log(`${new Date().toUTCString()}\nStarted refreshing ${commands.length} application commands.`);
		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT, DEVGUILD),
			{ body: commands },
		);
		console.log(`${new Date().toUTCString()}\nSuccessfully reloaded ${data.length} application commands.`);
	} catch (err) { console.error(err); }
})();