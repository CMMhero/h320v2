require('module-alias/register')

//const Discord = require('discord.js')
//const client = new Discord.Client()
//const WOKCommands = require('wokcommands')

const { MongoClient } = require('mongodb')
const MongoDBProvider = require('commando-provider-mongo') 
const path = require('path')
const Commando = require('discord.js-commando')

const config = require('@root/config.json')
const { prefix } = require('@root/config.json')
//const loadCommands = require('@root/commands/load-commands')
//const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')
const mongo = require('@util/mongo')

const client = new Commando.CommandoClient({
  owner: '361365554860392461',
  commandPrefix: config.prefix,
})

client.setProvider(
  MongoClient.connect(config.mongoPath, {
    useUnifiedTopology: true,
  })
    .then((client) => {
      return new MongoDBProvider(client, 'cmmhero')
    })
    .catch((err) => {
      console.error(err)
    })
)

client.on('ready', async () => {
  console.log('The client is ready!')
  
  await mongo()

  client.user.setPresence({
    activity: {
      name: `${prefix}help`,
    }
  })
  
client.registry
  .registerGroups([
    ['info', 'Info commands'],
    ['fun', 'Fun commands'],
    ['moderation', 'Moderation commands'],
    ['math', 'Math commands'],
    ['misc', 'Misc commands'],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'cmds'))

  //commandBase.loadPrefixes(client)
  //loadCommands(client)
  loadFeatures(client)

})

client.login(config.token)
