const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando')
const randomPuppy = require("random-puppy")

module.exports = class MemeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'meme',
      group: 'fun',
      memberName: 'meme',
      description: 'Sends an epic meme',
    })
  }

  async run(message, args) {
    const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const image = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(image)
            .setTimestamp(Date.now())
            .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())

        message.channel.send(embed);
  }
}
