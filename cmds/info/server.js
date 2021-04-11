const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class ServerCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'server',
      aliases: ['si','serverinfo'],
      group: 'info',
      memberName: 'server',
      description: 'Server info',
    })
  }

  async run(message, args) {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for **${name}**`)
      .setThumbnail(icon)
      .setColor("#A059FA")
      .setTimestamp(Date.now())
      .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
      .addFields(
        {
          name: 'Server Name',
          value: message.guild.name,
        },
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Owner',
          value: message.guild.owner,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Created on',
          value: message.guild.createdAt,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60 + `minutes`,
        }
      )

    message.channel.send(embed)
  }
}