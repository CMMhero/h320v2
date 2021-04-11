const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name:"avatar",
            aliases: ["pp"],
            group: 'misc',
            memberName: 'avatar',
            description: 'Sends the avatar of a user.',
            args: [
                {
                    type:"user",
                    prompt:"Which user would you like to get the avatar of?",
                    key:"user",
                    default: message => message.author
                }
            ]
        })
    }
    run(message, { user }) {

        let embed = new MessageEmbed()
        .setTitle(`${user.tag}'s profile picture!`)
        .setURL(user.displayAvatarURL())
        .setImage(user.displayAvatarURL())
        .setColor("#59BDFA")
        .setTimestamp(Date.now())
        .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
      
        message.embed(embed)
    
    }
}