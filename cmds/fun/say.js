const Commando = require('discord.js-commando')

module.exports = class SayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'fun',
      memberName: 'say',
      description: 'Say something',
    })
  }

  async run(message, args) {
    if (!args[0]) {
      return message.channel.send("Please say something"); 
     }
    message.channel.send(args).then
        message.delete().catch(console.error);
    }
}