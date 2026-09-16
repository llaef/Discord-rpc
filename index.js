const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} متصل بنجاح!`);
  
  const rpc = new (require('discord.js-selfbot-v13').RichPresence)(client)
    .setType('PLAYING')
    .setApplicationId(process.env.APPLICATION_ID || '1276928955563114600')
    .setName('Minecraft')
    .setDetails('Playing Bedrock Edition')
    .setState('Survival Mode (Multiplayer)')
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY || 'minecraft')
    .setAssetsLargeText('Minecraft Bedrock')
    .setStartTimestamp(Date.now());

  client.user.setActivity(rpc);
  console.log("تم تفعيل حالة الماينكرافت بنجاح!");
});

client.login(process.env.USER_TOKEN);
