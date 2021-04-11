const weather = require('weather-js');
const discord = require('discord.js')
const Commando = require('discord.js-commando')


module.exports = class WeatherCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'weather',
        group: 'info',
        memberName: 'weather',
        description: 'Weather info',
      })
    }
  
    async run(message, args) {
        if(!args.length) {
            return message.channel.send("Please give the weather location")
          }
          
       weather.find({search: message.content.split(/\s+/g).slice(1).join(" "), degreeType: 'C'}, function(err, result) {
      try {
       
      let embed = new discord.MessageEmbed()
      .setTitle(`Weather - ${result[0].location.name}`)
      .setColor("#ff2050")
      .setDescription("Temperature units can may be differ some time")
      .addField("Temperature", `${result[0].current.temperature} Celcius`, true)
      .addField("Sky Text", result[0].current.skytext, true)
      .addField("Humidity", result[0].current.humidity, true)
      .addField("Wind Speed", result[0].current.windspeed, true)//What about image
      .addField("Observation Time", result[0].current.observationtime, true)
      .addField("Wind Display", result[0].current.winddisplay, true)
      .setThumbnail(result[0].current.imageUrl)
      .setTimestamp(Date.now())
      .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
         message.channel.send(embed)
      } catch(err) {
        return message.channel.send("Unable To Get the data of Given location")
      }
      });
    }
  }
