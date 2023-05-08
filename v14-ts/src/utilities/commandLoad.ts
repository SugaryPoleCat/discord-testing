import fs from "fs";
import path from "path";
import { Collection } from "discord.js";
export function load() {
	const cmds = {
		data: [],
		filePaths: [],
		commands: new Collection(),
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
			}
			else if ("data" in command && "dog" in command) {
				cmds.count++;
				cmds.commands.set(command.data.name, command);
			}
			else { console.error(`[WARNING] at$ ${new Date().toUTCString()}\nThe command ${command.name} at ${filePath} is missing "data" or "fox" or "dog" property.`); break; }
			cmds.filePaths.push(filePath);
			cmds.data.push(file);
		}
	}
	return cmds;
}