const { SlashCommandBuilder, ChannelType } = require("discord.js");
const data = new SlashCommandBuilder()
	.setName("advVal")
	.setDescription("desc")
	.addStringOption(option => option
		.setName("input")
		.setDescription("description")
		.setMinLength(3)
		// 2000 is the default discord max
		.setMaxLength(2000))
	.addChannelOption(option => option.setName("channel")
		.setDescription("description")
		.addChannelTypes(ChannelType.GuildText))
	.addIntegerOption(option => option.serName("int")
		.setDescription("description")
		.setMaxValue(100)
		.setMinValue(1))
	.addNumberOption(option => option.serName("num")
		.setDescription("description")
		.setMaxValue(100)
		.setMinValue(1));
module.exports = {
	cooldown: 5,
	data: data,
	async execute(interaction) {
		console.log("interaction in command: ", interaction);
		await interaction.reply({ content: "Secret Pong!", ephemeral: true });
	}
};