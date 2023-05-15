const Discord = require('discord.js');

// 創建機器人客戶端
const bot = new Discord.Client();

// 事件：機器人成功連接到 Discord 伺服器
bot.on('ready', () => {
    console.log(`Bot已登入為 ${bot.user.tag}`);
});

// 指令：打招呼
bot.on('message', message => {
    if (message.content === '!hello') {
        message.channel.send('你好！我是一個 Discord 機器人。');
    }
});

// 指令：顯示使用者資訊
bot.on('message', message => {
    if (message.content.startsWith('!userinfo')) {
        const member = message.mentions.members.first();
        const embed = new Discord.MessageEmbed()
            .setTitle('使用者資訊')
            .setDescription(member.toString())
            .setColor('#0000ff')
            .addField('使用者名稱', member.user.username, true)
            .addField('加入伺服器時間', member.joinedAt, true);
        message.channel.send(embed);
    }
});

// 在此添加更多指令...

// 使用你的機器人令牌啟動機器人
bot.login('YOUR_BOT_TOKEN');