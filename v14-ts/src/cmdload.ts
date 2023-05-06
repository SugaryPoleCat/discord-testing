import fs from "fs";
import path from "path";
module.exports = {
	load() {
		const commandsPath = path.join(__dirname, "commands");
		const commandsFolder = fs.readdirSync(commandsPath);
		for (const folder of commandsFolder) {
			const commandFolder = path.join(commandsPath, folder);
			console.log(commandFolder);
		}
	}
};

// later figure it out to reuse it.