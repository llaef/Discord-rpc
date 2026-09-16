const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} متصل بنجاح!`);

    const rpc = new (require('discord.js-selfbot-v13').RichPresence)(client)
        .setType('PLAYING')
        .setApplicationId(process.env.APPLICATION_ID)
        .setName('Minecraft')
        .setDetails('Playing Bedrock Edition')
        .setState('Survival Mode')
        .setAssetsLargeImage('img_0604')
        .setAssetsLargeText('Minecraft')
        .setStartTimestamp(Date.now());

    client.user.setActivity(rpc);
    console.log("تم تفعيل الحالة بنجاح!");
});

client.login(process.env.USER_TOKEN);
