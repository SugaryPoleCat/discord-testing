import path from "path";
import command from "../../utilities/command";
module.exports = {
	data: command({ name: path.basename(__filename), description: "no" }),
	async fox(interaction) {
		const locales = {
			pl: "Witaj Świecie!",
			de: "Hallo Welt!",
		};
		// default is english
		await interaction.reply(locales[interaction.locale] ?? "Hellow World!");
	}
};