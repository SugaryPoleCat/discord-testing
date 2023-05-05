const { REST } = require("@discordjs/rest");
const { WebSocketManager } = require("@discordjs/ws");
const { GatewayDispatchEvents, GatewayIntentBits, InteractionType, MessageFlags, Client } = require("@discordjs/core");
const TOKEN = String(process.env.TOKEN) || "BAD_TOKEN";
if (TOKEN == "BAD_TOKEN") { throw new Error("bad token"); }
const rest = new REST({ version: "10" }).setToken(String(process.env.TOKEN));
const gateway = new WebSocketManager({
	token: TOKEN,
	intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
	rest: rest,
});
const client = new Client({ rest: rest, gateway: gateway });
client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
	if (interaction.type !== InteractionType.ApplicationCommand || interaction.data.name !== "ping") { return; }
	await api.interactions.reply(interaction.id, interaction.token, { content: "Pong!", flags: MessageFlags.Ephemeral });
});
client.once(GatewayDispatchEvents.Ready, () => { console.log("Ready!"); });
gateway.connect();