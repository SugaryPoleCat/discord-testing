// import the command then create new command data based on the input provided.
import { SlashCommandBuilder } from "discord.js";
import path from "path";
export default (data: { name: string, description: string; }): SlashCommandBuilder => {
	const fileName = data.name.replace(/\.[^/.]+$/, '');
	return new SlashCommandBuilder()
		.setName(fileName.toLowerCase())
		.setDescription(data.description);
};