//bot info

const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const { version } = require('@root/package.json')

module.exports = class BotInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ["bot","stat","info","i"],
      group: 'info',
      memberName: 'botinfo',
      description: 'Bot info',
    })
  }

  run = async (message) => {

//    for (const guild of this.client.guilds.cache) {
//      totalMembers += (await guild[1].members.fetch()).size
//    }

    let runtime = (`${process.uptime()}`)

    let h = Math.floor(runtime / 3600);
    runtime %= 3600;
    let m = Math.floor(runtime / 60);
    let s = (runtime % 60).toFixed();

    const embed = new MessageEmbed()
      .setAuthor(
        `${this.client.user.username}`,
        this.client.user.displayAvatarURL()
      )
      .setColor("#efc6c9")
      .setThumbnail(this.client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setFooter(
        `Hero Two | Created by CMMhero`, 
        this.client.user.displayAvatarURL()
      )
      .addFields(
        {
          name: 'Bot tag',
          value: this.client.user.tag,
        },
        {
          name: 'Version',
          value: version,
        },
        {
          name: "Server's command prefix",
          value: `\`${message.guild.commandPrefix}\``,
        },
        {
          name: 'Uptime',
          value: `${h}h ${m}m ${s}s`,
        },
        {
          name: 'Server count',
          value: this.client.guilds.cache.size,
        },
        {
          name: 'Total members',
          value: message.guild.memberCount,
        }
      )

    message.channel.send(embed)
  }
}
