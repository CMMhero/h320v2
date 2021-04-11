const Commando = require('discord.js-commando')
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class JokeCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'joke',
        group: 'fun',
        memberName: 'joke',
        description: 'Sends a fresh joke',
      })
    }
  
    async run(message, args) {
        let data = await random.getJoke()
        message.channel.send(data)
    }
  }