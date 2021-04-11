const Commando = require('discord.js-commando')

module.exports = class RateCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'rate',
      group: 'fun',
      memberName: 'rate',
      description: 'Rates someone out of 100',
    })
  }

  async run(message, args) {
    let number = Math.floor(Math.random() * 101);
    if (!args[1]){
        return message.channel.send('I would rate you a '+number+'/100  ')
    }
    else
    {
        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send('Please mention who you are rating.')
        }
        return message.channel.send('I would rate '+user.username+' a '+number+'/100')
    }
  }
}
