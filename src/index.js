require("dotenv").config(); // access the bot token from .env
const { Client, IntentsBitField } = require("discord.js");

// create a bot instance
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers, // bot will have access to members inside the server
    IntentsBitField.Flags.GuildMessages, // bot will have access to messages inside the server
    IntentsBitField.Flags.MessageContent, // bot will be able to read messages inside the server
  ],
});

// listens when bot is ready and logs to the console
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.login(process.env.TOKEN);
