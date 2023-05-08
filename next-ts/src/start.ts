require("dotenv").config();
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { GatewayIntentBits, Client, GatewayDispatchEvents, InteractionType, MessageFlags } from "@discordjs/core";
const TOKEN = String(process.env.NEXTTOKEN);
const rest = new REST({ version: "10" }).setToken(TOKEN);
const gateway = new WebSocketManager({
	token: TOKEN,
	intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
	rest: rest,
});
const client = new Client({ rest: rest, gateway: gateway });

//events
client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
	if (interaction.type !== InteractionType.ApplicationCommand) { return; }

	// event.action
	await api.interactions.reply(interaction.id, interaction.token, { content: "pong!", flags: MessageFlags.Ephemeral });
});
client.once(GatewayDispatchEvents.Ready, () => { console.log("READY"); });
gateway.connect();