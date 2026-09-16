const { Client, RichPresence } = require('discord.js-selfbot-v13');

const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.username} متصل بنجاح!`);

    const rpc = new RichPresence(client)
        .setApplicationId(process.env.APPLICATION_ID)
        .setType('PLAYING')
        .setName('Minecraft')
        .setDetails('Playing Bedrock Edition')
        .setState('Survival Mode')
        .setAssetsLargeImage('https://i.imgur.com/YlZ8O3j.png') // تجربة وضع الرابط المباشر مباشرة للتأكد
        .setAssetsLargeText('Minecraft')
        .setStartTimestamp(Date.now());

    // محاولة فرض إرسال الصورة عبر الـ assets الداخلية إذا لم يتقبل الرابط
    client.user.setActivity(rpc);

    console.log('تم محاولة تطبيق الصورة المربعة بنجاح!');
});

client.login(process.env.USER_TOKEN);
