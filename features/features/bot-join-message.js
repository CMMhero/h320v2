//const client = require("@root/index.js");
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { prefix } = require('@root/config.json')

module.exports = (client) => {
    
    client.on("guildCreate", (guild) => {
        let channelToSend;
    
        guild.channels.cache.forEach((channel) => {
            if (
                channel.type === "text" &&
                !channelToSend &&
                channel.permissionsFor(guild.me).has("SEND_MESSAGES")
            )
            channelToSend = channel;
        });
    
        if (!channelToSend) return;
    
        channelToSend.send(
            new MessageEmbed()
                .setTitle("Hero Two Bot")
                .setThumbnail(this.client.user.displayAvatarURL())
                .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
                .setDescription(
                    
                    `Thanks for inviting me to the server! my default prefix is \`${prefix}\`. To see the list of commands, type \`${prefix}help\`.`
                )
                .setColor("#efc6c9")
                .setTimestamp(Date.now())
                .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
        );
    });
};