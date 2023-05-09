import path from "path";
import command from "../../utilities/command";
import { ChannelType } from "discord.js";
const data = command({ name: path.basename(__filename), description: "poopers" })
	.addStringOption(option => option
		.setName("input")
		.setDescription("description")
		.setMinLength(3)
		// 2000 is the default discord max
		.setMaxLength(2000))
	.addChannelOption(option => option.setName("channel")
		.setDescription("description")
		.addChannelTypes(ChannelType.GuildText))
	.addIntegerOption(option => option.setName("int")
		.setDescription("description")
		.setMaxValue(100)
		.setMinValue(1))
	.addNumberOption(option => option.setName("num")
		.setDescription("description")
		.setMaxValue(100)
		.setMinValue(1));
module.exports = {
	cooldown: 5,
	data: data,
	async fox(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};