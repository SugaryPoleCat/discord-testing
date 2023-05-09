import path from "path";
import command from "../../utilities/command";
import { PermissionFlagsBits } from "discord.js";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" })
		.addUserOption(option => option
			.setName("target")
			.setDescription("the member to bananana")
			.setRequired(true))
		.addStringOption(option => option
			.setName("reason")
			.setDescription("the reason for bannanning"))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
	async fox(interaction) {
		const target = interaction.option.getUser("taret");
		const reason = interaction.options.getString("reason");
		await interaction.reply(`Giving banana to ${target.username} for reason ${reason}`);
		// i dont actually wanna bananana this is just testing. 
		// await interaction.guild.members.ban(target);
	}
};