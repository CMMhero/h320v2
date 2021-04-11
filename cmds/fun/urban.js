const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const urban = require("urban")

module.exports = class UrbanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      group: 'fun',
      memberName: 'urban',
      description: 'Urban Dictionary',
    })
  }

  async run(message, args) {
    if (!args[0]) {
        return message.channel.send("Please type a word"); 
       }
    urban(args).first(json => {

        if (!json) return message.channel.send({
          embed: {
            "description": "Nothing found :sweat: ",
            "color": 0xFF2222
          }
        });
    
        let embed = new Discord.MessageEmbed()
          .setColor(0x56aaff)
          .setDescription(json.definition)
          .addField('Example', json.example)
          .addField(`Upvotes`, json.thumbs_up, true)
          .addField(`Downvotes`, json.thumbs_down, true)
          .setFooter(`Written by ${json.author}`)
          .setTitle(json.word)
          .setTimestamp(Date.now())
          .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    
        message.channel.send(embed);
    });
  }
}
