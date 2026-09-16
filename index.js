const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  const r = new Discord.CustomStatus()
    .setState('Playing Minecraft')
    .setDetails('Singleplayer')
    .setApplicationId(process.env.APPLICATION_ID)
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY);

  client.user.setActivity(r);
});

client.login(process.env.USER_TOKEN);
