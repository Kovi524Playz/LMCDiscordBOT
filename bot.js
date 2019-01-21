const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Sziasztok, én kovi524 csicskája vagyok.') {
    	message.reply('És szeretek lmczni.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.JrO-_w0HKnb2ywg_LJIXar4CWBsKVxFi);
