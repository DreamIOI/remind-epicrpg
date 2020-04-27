const discord = require('discord.js');
const bot = new discord.Client();
const regex = /found and killed/;
const regexchop = /log/;
const regexfish = /fish/;
const regexC = /coins|ruby/i;
const regexA = /apple|banana/;
const regexTr = /is training/;
const regexLB = /successfully bought/;
const regexP = /stop there|seems fine/;


bot.on('message', message => {
    if(message.author.bot) return;
	// ----------------------- Hunt Command Below ------------------------
    if(message.content.toLowerCase().startsWith('rpg hunt')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regex)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**HUNT**__ is ready");}, 60000*Donator);
            }
        });
		return;
    }
    // ----------------------- Wood Command Below ------------------------
    if(message.content.toLowerCase().startsWith('rpg chop') || message.content.toLowerCase().startsWith('rpg axe') || message.content.toLowerCase().startsWith('rpg bowsaw') || message.content.toLowerCase().startsWith('rpg chainsaw')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexchop)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Log command**__ is ready");}, 300000*Donator);
            }
        });
		return;
    }
    //----------------------- Fish Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg fish') || message.content.toLowerCase().startsWith('rpg net') || message.content.toLowerCase().startsWith('rpg boat') || message.content.toLowerCase().startsWith('rpg bigboat')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexfish)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Fish command**__ is ready");}, 300000*Donator);
            }
        });
		return;
    }
    //---------------------- Fruit Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg pickup') || message.content.toLowerCase().startsWith('rpg ladder') || message.content.toLowerCase().startsWith('rpg tractor') || message.content.toLowerCase().startsWith('rpg greenhouse')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexA)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Fruit command**__ is ready");}, 300000*Donator);
            }
        });
		return;
    }
    //---------------------- Money Command Below -------------------
    if(message.content.toLowerCase().startsWith('rpg mine') || message.content.toLowerCase().startsWith('rpg pickaxe') || message.content.toLowerCase().startsWith('rpg drill') || message.content.toLowerCase().startsWith('rpg dynamite')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexC)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Money command**__ is ready");}, 300000*Donator);
            }
        });
		return;
    }
    //------------------ Training Command Below ----------------
    if(message.content.toLowerCase().startsWith('rpg tr')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexTr)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**Training Command**__ is ready");}, 900000*Donator);
            }
        });
		return;
    }
    //------------------ Adventure Command Below -----------------------
    if(message.content.toLowerCase() === 'rpg adv') {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regex)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**ADVENTURE**__ is ready");}, 3600000*Donator);
            }
        });
		return;
    }
    //----------------------- Lootbox Command Below ----------------
    if(message.content.toLowerCase().startsWith('rpg buy ed lb')) {
        let counter = 0;
        let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        let Donator = 1;
        if(message.author.id === '223068702122311680')Donator=0.9;
        else if (message.author.id === '357358335982567427')Donator=0.65;
        collector.on('collect', (m, col) => {
            counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
            if(collected.content.match(regexLB)) {
                setTimeout(() => {message.channel.send("<@" + message.author + ">" + " your __**LOOTBOX**__ is ready");}, 10800000*Donator);
            }
        });
		return;
    }
    //------------------------ Guild Command -----------------------------
    /*if(message.content.toLowerCase().startsWith('rpg guild')) {
     	let counter = 0;
     	let filter = m => m.author.bot && !m.content.match(regexP);
        let collector = new discord.MessageCollector(message.channel, filter);
        collector.on('collect', (m, col) => {
			counter++;
            if(counter === 1) collector.stop();
        });
        collector.on('end', collected => {
        	for(var i = 0; i < collected.embeds.length; i++) {
        		if(collected.embeds[0].fields[i].value.includes('Level:')) {
                    setTimeout(() => {message.channel.send("<@" + message.author + ">" + " <:wangSomething:651696545598799873>");}, 1);
                    break;
                }
            }
        });
		return;
    }*/

});
bot.login(process.env.BOT_TOKEN);
