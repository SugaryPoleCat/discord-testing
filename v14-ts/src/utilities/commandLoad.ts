import fs from "fs";
import path from "path";
export function load() {
	const cmds = {
		data: [],
		filePaths: []
	};
	const commandsPath = path.join(__dirname, "../commands");
	const commandsFolder = fs.readdirSync(commandsPath);
	for (const folder of commandsFolder) {
		const commandFolder = path.join(commandsPath, folder);
		const commands = fs.readdirSync(commandFolder).filter((f) => f.endsWith(".js"));
		for (const file of commands) {
			const filePath = path.join(commandFolder, file);
			cmds.filePaths.push(filePath);
			cmds.data.push(file);
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
	}
	return cmds;
}