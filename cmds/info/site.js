const Commando = require('discord.js-commando')

module.exports = class SiteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'site',
      aliases: ['website'],
      group: 'info',
      memberName: 'site',
      description: 'H320 Website',
    })
  }

  async run(message, args) {
    message.channel.send(`Website: http://h320.unaux.com`)
  }
}
