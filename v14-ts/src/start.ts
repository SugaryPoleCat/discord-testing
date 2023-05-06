import { Client, GatewayIntentBits, Events } from "discord.js";
import { TOKEN } from "../config.json";
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });
client.once(Events.ClientReady, (c) => { console.log(`${new Date().getUTCDate()} client ready as ${c.user?.tag}`); });
client.login(TOKEN);