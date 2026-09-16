module.exports = {
    // جلب التوكن من متغيرات البيئة في Railway
    "token": process.env.USER_TOKEN,
    // spotify/game/twitch
    "mode": "game", 
    // dnd/online/idle
    "status": "online",

    "game": {
        // جلب معرف التطبيق من متغيرات البيئة في Railway
        "applicationID": process.env.APPLICATION_ID,

        "name": "Minecraft", // title
        "details": "Playing Bedrock Edition", // first row below title
        "state": "Survival Mode - Multiplayer", // row below first row

        "largeImageKey": "minecraft_logo", // اسم الصورة المرفوعة في Discord Developer Portal
        "largeImageText": "Minecraft Bedrock", // the text when img surrounded

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": Date.now(), // time elapsed since this timestamp
        "endTimestamp": "" 
    },
    "twitch": {
        "applicationID": "",
        "url": "",
        "details": "",
        "state": "",
        "largeImageKey": "",
        "largeImageText": "",
        "smallImageKey": "",
        "smallImageText": "",
        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "",
        "details": "",
        "state": "",
        "largeImageKey": "",
        "largeImageText": "",
        "smallImageKey": "",
        "smallImageText": "",
        "startTimestamp": "",
        "endTimestamp": ""
    }
}
