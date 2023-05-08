require("dotenv").config();
import { ShardingManager } from "discord.js";
import path from "path";
const TOKEN = String(process.env.TOKEN);
console.log("lauinching");
const shardManager = new ShardingManager(path.join(__dirname, "bot.js"), {
	token: TOKEN,
	execArgv: ["--trace-warnings"],
	shardArgs: ["--ansi", "--color"]
});
console.log("launching");
// first create a shard
shardManager.on("shardCreate", (shard) => { console.log(`Launched shard ${shard.id}`); });
// then spawn it.
shardManager
	.spawn()
	.then((shards) => {
		// this looks for what messages the shards send between each otehr.
		shards.forEach((shard) => {
			shard.on("message", (message) => {
				// _eval = shard is attempting to evaluate it
				// _result = obviouisly the result ov eval.
				console.log("[SHARD ", shard.id, "]\n");
				console.log("[MESSAGE EVAL]\n", message._eval, "\n\n")
				console.log("[MESSAGE RESULT]\n", message._result, "\n\n");
			});
		});
	})
	.catch(console.error);

	// this will kill a shard in case it behaves bad
	// client.shard.broadcastEval(c => {
	// 	if (c.shard.ids.includes(0)) process.exit();
	// });

	// this will pass arguments into a .broadcasteval on a shard.
	// function funcName(c, { arg }) {
	// 	// ...
	// }
	
	// client.shard.broadcastEval(funcName, { context: { arg: 'arg' } });