import command from "../../utilities/command";
import path from "path";
import { ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits } from "discord.js";
module.exports = {
	data: command({ name: path.basename(__filename), description: "a show of what buttons do plus some permissions1" })
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
		const confirm = new ButtonBuilder()
			.setCustomId("confirm")
			.setLabel("Confirm ban")
			.setStyle(ButtonStyle.Danger);
		const cancel = new ButtonBuilder()
			.setCustomId("cancel")
			.setLabel("Cancel ban")
			.setStyle(ButtonStyle.Secondary);
		const info = new ButtonBuilder()
			.setCustomId("info")
			.setLabel("Info ban")
			.setURL("https://google.com/")
			.setStyle(ButtonStyle.Link);
		const disabled = new ButtonBuilder()
			.setCustomId("disabled")
			.setLabel("disabled")
			.setStyle(ButtonStyle.Primary)
			.setDisabled(true);
		const emoji = new ButtonBuilder()
			.setCustomId("emoji")
			.setLabel("Emoji")
			.setStyle(ButtonStyle.Primary)
			.setEmoji('😃');
		const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents(cancel, confirm, info, disabled, emoji);
		// button styles: Secondary, Primary, Danger, Success, Link
		await interaction.reply({ content: `Giving banana to ${target.username} for reason ${reason}`, components: [row] });
		// the guide doesnt go through how to do the actual logic when a button is pressed.
		// ill figure that out myself later.
		// wait no, its there, its called component interaction, im dumb.
	}
};