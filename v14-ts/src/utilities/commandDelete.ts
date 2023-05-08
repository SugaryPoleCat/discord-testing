require("dotenv").config();
import { REST, Routes } from "discord.js";
const CLIENT = String(process.env.CLIENT);
const DEVGUILD = String(process.env.DEVGUILD);
const TOKEN = String(process.env.TOKEN);
const rest = new REST().setToken(TOKEN);
(async () => {
	try {
		console.log(`${new Date().toUTCString()}\nStarted deleting application commands`);
		await rest.put(Routes.applicationGuildCommands(CLIENT, DEVGUILD),
			{ body: [] });
		console.log(`${new Date().toUTCString()}\nFinished deleting application commands`);
	} catch (err) { throw new Error(err); }
})();