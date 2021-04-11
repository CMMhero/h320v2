const Commando = require('discord.js-commando')
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class KpopCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'kpop',
        group: 'fun',
        memberName: 'kpop',
        description: 'Random Kpop pics',
      })
    }
  
    async run(message, args) {
        let data = await random.getKpop()
        message.channel.send(data)
    }
  }