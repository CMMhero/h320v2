const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'clear',
      aliases: ['c'],
      group: 'moderation',
      memberName: 'clear',
      description: 'Clears certain amount of lines',
    })
  }

  async run(message, args) {
    let a = +args
    a = a + 1
    message.channel.bulkDelete(a)
  }
}
