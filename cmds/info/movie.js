const discord = require("discord.js");
const imdb = require("imdb-api");
const Commando = require('discord.js-commando')

module.exports = class MovieCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'movie',
        group: 'info',
        memberName: 'movie',
        description: 'Movie info',
      })
    }
  
    async run(message, args) {
    if(!args.length) {
      return message.channel.send("Please give the name of movie or series")
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': message.content.split(/\s+/g).slice(1).join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#ff2050")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true)
    .setTimestamp(Date.now())
    .setFooter(`Hero Two | Created by CMMhero`,this.client.user.displayAvatarURL())
    
    message.channel.send(embed)
    
  }

}