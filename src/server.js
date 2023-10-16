const fs = require("fs");
const debug = require("./helpers");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

console.log("bot has been started...");

const bot = new TelegramBot(process.env.TOKEN, {
  polling: true,
  interval: 300,
  autoStart: true,
  params: {
    timeout: 10,
  },
});

bot.on('message', msg => {
  const {id} = msg.chat;
  const answer = `${msg.from.first_name} : ${msg?.text}`;
  bot.sendMessage(id, answer);
})