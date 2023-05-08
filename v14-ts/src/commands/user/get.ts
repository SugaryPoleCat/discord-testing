import command from "../../utilities/command";
import path from "path";
module.exports = {
	data: command({ name: path.basename(__filename), description: "get a user info" }),
	async fox(interaction) { console.log(interaction); }
};