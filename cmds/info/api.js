const Commando = require('discord.js-commando')

module.exports = class APICommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'api',
      aliases: ['client','discord.js','commando'],
      group: 'info',
      memberName: 'api',
      description: 'Discord.js',
    })
  }

  async run(message, args) {
    message.channel.send(`Guide: https://discordjs.guide/commando/`)
  }
}
