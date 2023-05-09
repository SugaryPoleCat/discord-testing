require("dotenv").config();
import { REST, Routes } from "discord.js";
import { load } from "./commandLoad";
const CLIENT = String(process.env.CLIENT);
const DEVGUILD = String(process.env.DEVGUILD);
const TOKEN = String(process.env.TOKEN);
const commands = load();
const rest = new REST().setToken(TOKEN);
(async () => {
	try {
		console.log(`${new Date().toUTCString()}\nStarted refreshing ${commands.count} application (/) commands`);
		const data: any = await rest.put(
			Routes.applicationGuildCommands(CLIENT, DEVGUILD),
			{ body: commands.JSON },
		);
		console.log(`${new Date().toUTCString()}\nFinished refreshing ${data.length} application (/) commands`);
	} catch (err) { return console.error(err); }
})();