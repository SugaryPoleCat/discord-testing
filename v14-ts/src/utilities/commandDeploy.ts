require("dotenv").config();
import { REST, Routes } from "discord.js";
import { load } from "./commandLoad";
const CLIENT = String(process.env.CLIENT);
const DEVGUILD = String(process.env.DEVGUILD);
const TOKEN = String(process.env.TOKEN);
const cmds = load();
for (const cmd of cmds.filePaths) {

}