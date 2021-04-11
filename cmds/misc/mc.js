const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class IPCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'mc',
      aliases: ['ip', 'mc'],
      group: 'misc',
      memberName: 'mc',
      description: 'Minecraft server',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
    .setTitle("H320Craft")
    .setColor("#7ec7a5")
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    .addFields(
    {
      name: "Server IP",
      value:"\`h320mc.ddns.net\`",
    },
    {
      name: "Version",
      value: "1.7 - 1.16.5",  
    },
    {
      name: "Website",
      value: "http://www.h320.unaux.com/minecraftserver",  
    },
    )
    message.channel.send(embed)
  }
}
