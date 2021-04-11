const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class EmbedCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'embed',
      group: 'misc',
      memberName: 'embed',
      description: 'Sends an embed message',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
    .setColor("#00FFFF")
    .setDescription(args)
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    .setDescription(args)
    message.channel.send(embed).then(message.delete());
  }
}
