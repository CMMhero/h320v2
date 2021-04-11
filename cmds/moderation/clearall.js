const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'clearall',
      aliases: ['cc'],
      group: 'moderation',
      memberName: 'clearall',
      description: 'Clears the channel',
      userPermissions: ['MANAGE_MESSAGES'],
    })
  }

  async run(message) {
    message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
  }
}
