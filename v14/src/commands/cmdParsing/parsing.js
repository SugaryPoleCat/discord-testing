const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("parsecmd")
		.setDescription("descrioption")
		.addUserOption(option => option
			.setName("target")
			.setDescription("the member to bananana")
			.setRequired(true))
		.addStringOption(option => option
			.setName("reason")
			.setDescription("the reason for bannanning"))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
	async execute(interaction) {
		const target = interaction.option.getUser("taret");
		const reason = interaction.options.getString("reason");
		await interaction.reply(`Giving banana to ${target.username} for reason ${reason}`);
		// i dont actually wanna bananana this is just testing. 
		// await interaction.guild.members.ban(target);
	}
};