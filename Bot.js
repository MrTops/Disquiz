const { Client } = require("discord.js");
const { Token } = require("./Config.json");

const client = new Client({
	disableMentions: 'everyone'
});

client.on('ready', () => {
	client.user.setPresence({
		activity: {
			name: "dq!help | ping me 4 prefix",
			type: "PLAYING",
			url: "https://github.com/MrTops/Disquiz"
		},
		status: "online"
	});
	console.log("done!")
});

client.login(Token);