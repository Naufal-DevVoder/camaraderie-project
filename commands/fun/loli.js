module.exports= {
  name : "loli",
  run : async (client,message, args) => {
  let owo = require('@kagchi/kag-api')
  let loli = await owo.loli.kawaii()
  const Discord = require ('discord.js')
  let Embed = new Discord.MessageEmbed()
  .setTitle('Nyan Oniichan')
  .setImage(loli)
  .setColor('RANDOM')
  message.channel.send(Embed)
  }}
