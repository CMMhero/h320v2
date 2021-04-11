const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class InvCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['inv'],
      group: 'info',
      memberName: 'invite',
      description: 'Hero Two Invite Link',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
    .setColor("#efc6c9")
    .setTitle(`Hero Two Invite Link`)
    .setDescription(`You can invite me to other servers using this link https://discord.com/oauth2/authorize?client_id=703617562734231624&scope=bot&permissions=8`)
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    message.channel.send(embed);
    }
}