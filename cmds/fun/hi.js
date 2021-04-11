const Commando = require('discord.js-commando')

module.exports = class HiCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'hi',
      group: 'fun',
      memberName: 'hi',
      description: 'Hi',
    })
  }

  async run(message, args) {
    message.reply(`Hello!`)
  }
}
