const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class PollCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'poll',
      group: 'misc',
      memberName: 'poll',
      description: 'Yes/no poll',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
    .setTitle("📋 [Poll] " + args)
    .setColor("#78D0AA")
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    message.channel.send(embed)
    .then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete().catch(console.error);
        message.channel.send("@everyone");
      })
    }
}