// im not going to do specific commands to delte, becasue each guild has specific command id.
// so this will handle deleting all the commands in all guilds and global
require("dotenv").config();
const { REST, Routes } = require("discord.js");
const CLIENT = String(process.env.CLIENT);
const TOKEN = String(process.env.TOKEN);
const DEVGUILD = String(process.env.DEVGUILD);
const rest = new REST().setToken(TOKEN);
(async () => {
	try {
		console.log(`${new Date().toUTCString()}\nStarted deleting application commands.`);
		await rest.put(
			Routes.applicationGuildCommands(CLIENT, DEVGUILD),
			{ body: [] },
		);
		console.log(`${new Date().toUTCString()}\nSuccessfully deleted application commands.`);
	} catch (err) { console.error(err); }
})();