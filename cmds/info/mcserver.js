const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const util = require('minecraft-server-util');

module.exports = class MCSCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'mcserver',
      aliases: ['mcs','minecraft'],
      group: 'info',
      memberName: 'mcserver',
      description: 'Minecraft server info',
    })
  }

  run = async (message, args) => {
    // util.status(`h320mc.ddns.net`, {port: `25565`}).then((response) => {
    // const embed = new MessageEmbed()
    //   .setAuthor(`H320 Craft Server`)
    //   .setColor("#83B361")
    //   .setTimestamp(Date.now())
    //   .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    //   .addFields(
    //     {
    //       name: 'Server IP',
    //       value: response.host,
    //     },
    //     {
    //       name: 'Online Players',
    //       value: response.onlinePlayers,
    //     },
    //     {
    //       name: 'Max Players',
    //       value: response.maxPlayers,
    //     },
    //     {
    //       name: 'Version',
    //       value: response.version,
    //     },
    //   )

    // message.channel.send(embed)
    // })
    message.channel.send(`<@361365554860392461> MC Server`)
  }
}
