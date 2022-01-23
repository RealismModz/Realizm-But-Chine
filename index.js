const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS, Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING, Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_SCHEDULED_EVENTS
  ], 
  partials: [
    "CHANNEL"
    ]
});

/* Api */
const express = require("express");
const app = express();
require("./api/express.js")(express, app);

const config = require("./config.json");

/* Databse */
const mongoose = require('mongoose');

mongoose.connect(config.mongoose.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async() => {
  console.log("Database Online")
});

["command_handler", "event_handler", "slash_handler"].forEach(async handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(config.bot.token);