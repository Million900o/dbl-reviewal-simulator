const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
  id: { type: String, unique: true, required: true },
  prefix: { type: String, default: '@' },
  weeb: { type: String, default: null },
  stinky: { type: String, default: null },
  mute_role: { type: String, default: null },
})

module.exports = model('guilds', guildSchema)
