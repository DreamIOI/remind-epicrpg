const discord = require('discord.js');
const bot = new discord.Client();
const regex = /found and killed/;
const regexchop = /log/;
const regexfish = /fish/;
const regexC = /coins|ruby/i;
const regexA = /apple|banana/;
const regexTr = /is training/;
const regexLB = /successfully bought/;


bot.on('message', message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith('rpg hunt')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regex)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**HUNT**__ is ready");}, 60000*Donator);
                    collector.stop();
                }
                    collector.stop();
        });
        collector.on('end', collected => {
        });
    }
    // ----------------------- Wood Command Below ------------------------
    if(message.content.toLowerCase().startsWith('rpg chop') || message.content.toLowerCase().startsWith('rpg axe') || message.content.toLowerCase().startsWith('rpg bowsaw') || message.content.toLowerCase().startsWith('rpg chainsaw')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexchop)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Log command**__ is ready");}, 300000*Donator);
                    collector.stop();
                }
                
                    collector.stop();
                
        });
        collector.on('end', collected => {
        });
    }
    //------------------ Fish Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg fish') || message.content.toLowerCase().startsWith('rpg net') || message.content.toLowerCase().startsWith('rpg boat') || message.content.toLowerCase().startsWith('rpg bigboat')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexfish)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Fish command**__ is ready");}, 300000*Donator);
                    collector.stop();
                }
                
                    collector.stop();
                
        });
        collector.on('end', collected => {
        });
    }
    //------------------ Fruit Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg pickup') || message.content.toLowerCase().startsWith('rpg ladder') || message.content.toLowerCase().startsWith('rpg tractor') || message.content.toLowerCase().startsWith('rpg greenhouse')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexA)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Fruit command**__ is ready");}, 300000*Donator);
                    collector.stop();
                }
                
                    collector.stop();
                
        });
        collector.on('end', collected => {
        });
    }
    //------------------ Money Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg mine') || message.content.toLowerCase().startsWith('rpg pickaxe') || message.content.toLowerCase().startsWith('rpg drill') || message.content.toLowerCase().startsWith('rpg dynamite')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexC)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Money command**__ is ready");}, 300000*Donator);
                    collector.stop();
                }
                
                    collector.stop();
                
        });
        collector.on('end', collected => {
        });
    }
    //------------------ Training Command Below ----------------
    if(message.content.toLowerCase().startsWith('rpg tr')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexTr)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Training Command**__ is ready");}, 900000*Donator);
                    collector.stop();
                }
                    collector.stop();
        });
        collector.on('end', collected => {
        });
    }
    //------------------ Adventure Below -----------------------
    if(message.content.toLowerCase() === 'rpg adv') {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regex)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**ADVENTURE**__ is ready");}, 3600000*Donator);
                    collector.stop();
                }
                
                    collector.stop();
                
        });
        collector.on('end', collected => {
        });
    }
    //----------------------- Lootbox command Below ----------------
    if(message.content.toLowerCase().startsWith('rpg buy ed lb')) {
        let counter = 0;
        let filter = m => m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 0.65;
        if(message.author.id === '223068702122311680')Donator=0.9;
        collector.on('collect', (m, col) => {
                if(m.content.match(regexLB)) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**LOOTBOX**__ is ready");}, 10800000*Donator);
                    collector.stop();
                }
                    collector.stop();
        });
        collector.on('end', collected => {
        });
    }
});

bot.login(process.env.BOT_TOKEN);
