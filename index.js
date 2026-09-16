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
        .setAssetsLargeImage('img_0604')
        .setAssetsLargeText('Minecraft')
        .setStartTimestamp(Date.now());

    client.user.setActivity(rpc);

    console.log('Minecraft Rich Presence مفعّل!');
});

client.login(process.env.USER_TOKEN);
