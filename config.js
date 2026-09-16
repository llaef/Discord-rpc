module.exports = {
    // جلب التوكن ومعرف التطبيق من متغيرات البيئة في Railway
    token: process.env.USER_TOKEN,
    applicationId: process.env.APPLICATION_ID,
    
    // إعدادات الـ Rich Presence الخاصة بلعبة Minecraft
    rpc: {
        name: "Minecraft",
        type: "PLAYING", // أو STREAMING, LISTENING, WATCHING
        details: "Playing Bedrock Edition",
        state: "Survival Mode - Multiplayer",
        assets: {
            largeImage: "https://i.imgur.com/YlZ8O3j.png", // رابط الصورة المربعة
            largeText: "Minecraft Bedrock",
            smallImage: "", // اختياري
            smallText: ""    // اختياري
        },
        buttons: [
            { label: "Join Server", url: "https://aternos.org" }
        ],
        timestamps: {
            start: Date.now()
        }
    }
};
