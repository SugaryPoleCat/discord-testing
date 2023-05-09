// import the command then create new command data based on the input provided.
import { SlashCommandBuilder } from "@discordjs/core";
export default (data: { name: string, description: string; }): SlashCommandBuilder => {
	const fileName = data.name.replace(/\.[^/.]+$/, '');
	return new SlashCommandBuilder()
		.setName(fileName.toLowerCase())
		.setDescription(data.description);
};