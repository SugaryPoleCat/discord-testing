import fs from "fs";
import path from "path";
import { Collection } from "discord.js";
export function load() {
	const cmds = {
		JSON: [],
		commands: new Collection(),
		cooldowns: new Collection(),
		count: 0,
		total: 0,
	};
	const commandsPath = path.join(__dirname, "../commands");
	const commandsFolder = fs.readdirSync(commandsPath);
	for (const folder of commandsFolder) {
		const commandFolder = path.join(commandsPath, folder);
		const commands = fs.readdirSync(commandFolder).filter((f) => f.endsWith(".js"));
		for (const file of commands) {
			cmds.total++;
			const filePath = path.join(commandFolder, file);
			const command = require(filePath);
			if ("data" in command && "fox" in command) {
				cmds.count++;
				cmds.commands.set(command.data.name, command);
				cmds.JSON.push(command.data.toJSON());
			}
			else if ("data" in command && "dog" in command) {
				cmds.count++;
				cmds.commands.set(command.data.name, command);
				cmds.JSON.push(command.data.toJSON());
			}
			else { console.error(`[WARNING] at$ ${new Date().toUTCString()}\nThe command ${command.name} at ${filePath} is missing "data" or "fox" or "dog" property.`); break; }
		}
	}
	return cmds;
}