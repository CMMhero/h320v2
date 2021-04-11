const figlet = require('figlet');
const Discord = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class AsciiCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ascii',
      group: 'fun',
      memberName: 'ascii',
      description: 'Convert text to ascii',
    })
  }

  async run(message, args) {
    if (!args[1]){
      return message.channel.send('Please insert a text to convert.')
    }
    else 
    {
      figlet(args, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        message.channel.send("\`\`\`"+data+"\`\`\`").then(message.delete())
    });
    }
    
  }
}