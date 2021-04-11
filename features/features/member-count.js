const Discord = require('discord.js')

module.exports = (client) => {
  const channelId = '773747417065193493'

  const updateMembers = (guild) => {
    if (guild) {
      const channel = guild.channels.cache.get(channelId)
      if (channel) {
        channel.setName(`👥 Members: ${guild.memberCount}`)
      }
    }
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('391953657416908802')
  updateMembers(guild)
}