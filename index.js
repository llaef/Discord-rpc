const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.username} متصل بنجاح!`);

    // إعداد نشاط شبيه بتكامل سبوتيفاي أو اللعبة مع صورة مربعة
    client.user.setActivity({
        type: 'PLAYING',
        name: 'Minecraft',
        details: 'Playing Bedrock Edition',
        state: 'Survival Mode',
        assets: {
            largeImage: 'https://i.imgur.com/YlZ8O3j.png', // الرابط المباشر لتصويرة Minecraft المربعة
            largeText: 'Minecraft Bedrock'
        }
    });

    console.log('تم تفعيل النشاط بـ التصويرة المربعة بنجاح!');
});

client.login(process.env.USER_TOKEN);
