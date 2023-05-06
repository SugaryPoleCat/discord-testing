import path from "path";
import cmd from "../../utilities/cmd";
module.exports = {
	data: cmd({ name: path.basename(__filename), description: "User" }),
	async execute(interaction) {
		console.log(interaction);
	}
};