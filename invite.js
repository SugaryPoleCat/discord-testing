require("dotenv").config();
const { CLIENTID, NEXTID } = require("./config.json");
const clientID = process.env.CLIENTID ? String(process.env.CLIENTID) : CLIENTID;
const nextID = process.env.NEXTID ? String(process.env.NEXTID) : NEXTID;
if (!clientID && !nextID) { return console.error("you havent provided any id."); }
switch (clientID) {
	case undefined:
		console.error("your clinetID is undefined");
		break;
	default:
		console.log("[INVITE FOR v14]");
		console.log(`https://discord.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot%20applications.commands\n`);
		break;
}
switch (nextID) {
	case undefined:
		console.error("your NEXTID is undefined");
		break;
	default:
		console.log("[INVITE FOR NEXT]");
		console.log(`https://discord.com/api/oauth2/authorize?client_id=${nextID}&permissions=8&scope=bot%20applications.commands\n`);
		break;
}