const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class PahoaCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'aohap',
      aliases: ['pahoa'],
      group: 'misc',
      memberName: 'aohap',
      description: 'Project: Pahoa',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
    .setColor("#3F7FBE")
    .setTitle(`Project: Pahoa`)
    .addFields(
        {
            name: "Gallery",
            value: "https://photos.app.goo.gl/rtE7qkh5WrPDSTLL8",
        },
        {
            name: "Video",
            value: "https://youtu.be/lntyIa4yRVk",
        },
        {
          name: "Map Download",
          value: "https://www.mediafire.com/file/6e7l3ctptk02ods/aohap%2528extract%2529.rar/file",
        },
        {
          name: "Pahoa MC Server",
          value: "`h320.aternos.me`",
        }
    )
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    message.channel.send(embed);
    }
}