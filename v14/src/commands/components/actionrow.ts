import command from "../../utilities/command";
import path from "path";
import { ActionRowBuilder, ButtonBuilder } from "discord.js";
module.exports = {
	data: command({ name: path.basename(__filename), description: "this does nothing in discord this is just example." }),
	async fox(interaction) {
		// this is how you build action row, it is used by for example buttons.
		// so on its own it wont work.
		// in TS you need to add <ButtonBuilder> or similar to actionbuilder, you need to provide what action row we building.
		const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents();
		// you need to create components to pass into it.
		console.log(row);
	}
};