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
        .setStartTimestamp(Date.now());

    client.user.setActivity(rpc);

    console.log('تم تفعيل الحالة بنجاح وبدون أخطاء!');
});

client.login(process.env.USER_TOKEN);
