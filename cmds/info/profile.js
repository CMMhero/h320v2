const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class ProfileCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'profile',
      aliases: ['me','user'],
      group: 'info',
      memberName: 'profile',
      description: 'User info',
    })
  }

  run = async (message) => {
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    console.log(member)

    const icon = user.displayAvatarURL()
    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .setColor("#DDA0DD")
      .setTimestamp(Date.now())
      .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
      .setThumbnail(icon)
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        }
      )

    channel.send(embed)
  }
}
