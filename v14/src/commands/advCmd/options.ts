import path from "path";
import command from "../../utilities/command";
const data = command({ name: path.basename(__filename), description: "option things" })
	// a string
	.addStringOption(option => option.setName("input").setDescription("the input to echo back"))
	.addBooleanOption(option => option.setName("bool").setDescription("this is a bool"))
	// mentionable channel
	.addChannelOption(option => option.setName("channel").setDescription("this is channel"))
	//  only accepts whole numbers
	.addIntegerOption(option => option.setName("integer").setDescription("this is integer"))
	// any number
	.addNumberOption(option => option.setName("number").setDescription("this is number"))
	// mentionable role
	.addRoleOption(option => option.setName("role").setDescription("this is role"))
	// mentionable user
	.addUserOption(option => option.setName("user").setDescription("this is user"))
	// any mentionable
	.addMentionableOption(option => option.setName("mention").setDescription("this is a mentionable"))
	// requires the user to upload an attachment following the command
	.addAttachmentOption(option => option.setName("attachemnt").setDescription("description"));
module.exports = {
	data: data,
	async fox(interaction) { await interaction.reply("gay"); }
};