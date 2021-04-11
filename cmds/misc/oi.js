const Commando = require('discord.js-commando')

module.exports = class OiCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'oi',
      aliases: ["on", "test", "abc"],
      group: 'misc',
      memberName: 'oi',
      description: 'oi',
    })
  }

  async run(message, args) {
    message.channel.send(`oi`)
  }
}
