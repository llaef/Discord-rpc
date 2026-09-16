const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

console.log("--- فحص الـ Environment Variables ---");
console.log("APPLICATION_ID:", process.env.APPLICATION_ID ? "موجود ✅" : "مفقود ❌");
console.log("USER_TOKEN Length:", process.env.USER_TOKEN ? process.env.USER_TOKEN.length : "مفقود ❌");
console.log("USER_TOKEN Preview:", process.env.USER_TOKEN ? process.env.USER_TOKEN.substring(0, 5) + "..." : "فارغ");

client.on('ready', async () => {
  console.log(`${client.user.username} متصل بنجاح!`);
  
  const rpc = new (require('discord.js-selfbot-v13').RichPresence)(client)
    .setType('PLAYING')
    .setApplicationId(process.env.APPLICATION_ID || '123456789012345678')
    .setName('Minecraft')
    .setDetails('Playing Bedrock Edition')
    .setState('Survival Mode (Multiplayer)')
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY || 'minecraft')
    .setAssetsLargeText('Minecraft Bedrock')
    .setStartTimestamp(Date.now());

  client.user.setActivity(rpc);
  console.log("تم تفعيل حالة الماينكرافت بنجاح!");
});

client.login(process.env.USER_TOKEN).catch(err => {
  console.error("خطأ في تسجيل الدخول عبر التوكن:", err.message);
});
