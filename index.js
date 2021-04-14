const { Master } = require('discord-rose')
const { config } = require('dotenv')
const { resolve } = require('path')

config()

const master = new Master(resolve(__dirname, 'worker/worker.js'), {
  token: process.env.TOKEN,
  intents: 32767,
  cache: {
    channels: true,
    guilds: true,
    members: true,
    messages: true,
    roles: true,
    self: true,
    users: true
  }
});

master.spawnProcess('WEB', resolve(__dirname, 'api/index.js'))

master.start();
