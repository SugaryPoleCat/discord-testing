import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "server stats thing, idk." }),
	async fox(interaction) { await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`); }
};