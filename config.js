module.exports = {
    "token": process.env.USER_TOKEN,
    "mode": "game", 
    "status": "online",

    "game": {
        "applicationID": process.env.APPLICATION_ID,
        "name": "Minecraft",
        "details": "Playing Bedrock Edition",
        "state": "Survival Mode - Multiplayer",
        "startTimestamp": Date.now(),
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
