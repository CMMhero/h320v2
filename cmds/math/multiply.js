const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'multiply',
      aliases: ['*'],
      group: 'math',
      memberName: 'multiply',
      description: 'Multiplies numbers together',
      argsType: 'multiple',
    })
  }

  async run(message, args) {
    const num1 = +args[0]
    const num2 = +args[1]

    message.reply(`${num1}`+`*`+`${num2} = ${num1 * num2}`)
  }
}
