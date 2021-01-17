const { ShardingManager } = require("discord.js");
const { Token } = require("./Config.json");

const shardingManager = new ShardingManager("./Bot.js", {
	token: Token
});

shardingManager.spawn();