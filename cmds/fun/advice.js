const Commando = require('discord.js-commando')
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class AdviceCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'advice',
        group: 'fun',
        memberName: 'advice',
        description: 'Gives an awesome advice',
      })
    }
  
    async run(message, args) {
        let data = await random.getAdvice()
        message.channel.send(data)
    }
  }