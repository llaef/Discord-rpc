const { Client, RichPresence } = require('discord.js-selfbot-v13');

const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} متصل بنجاح وجاهز!`);

    // جلب الرابط الخارجي وتحويله إلى مسار صالح تلقائياً دون مشاكل الـ INVALID_URL
    let externalAsset = null;
    try {
        const fetched = await RichPresence.getExternal(
            client, 
            process.env.APPLICATION_ID, 
            'https://i.imgur.com/YlZ8O3j.png' // رابط الصورة المربعة المباشر
        );
        externalAsset = fetched?.[0]?.external_asset_path;
    } catch (e) {
        console.log('خطأ في جلب الصورة، سيتم الاستمرار بدونها:', e);
    }

    const rpc = new RichPresence(client)
        .setApplicationId(process.env.APPLICATION_ID)
        .setType('PLAYING')
        .setName('Minecraft')
        .setDetails('Playing Bedrock Edition')
        .setState('Survival Mode');

    if (externalAsset) {
        rpc.setAssetsLargeImage(externalAsset);
        rpc.setAssetsLargeText('Minecraft Bedrock');
    }

    rpc.setStartTimestamp(Date.now());

    // تحديث الحالة بشكل دوري باش ما تروحش
    setInterval(() => {
        client.user.setActivity(rpc);
    }, 15000);

    console.log('تم تفعيل الحالة والنشاط بنجاح تام!');
});

client.login(process.env.USER_TOKEN);
