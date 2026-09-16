const { Client, RichPresence } = require("discord.js-selfbot-v13");
const config = require("./config.js");

const client = new Client({
    checkUpdate: false,
    presence: {
        status: config.status || "online",
        afk: true
    }
});

client.on("ready", async () => {
    console.log(`Logged in successfully as ${client.user.tag}!`);

    const updateActivity = async () => {
        try {
            if (config.mode === "game" && config.game) {
                const gameConfig = config.game;
                
                const rpc = new RichPresence(client)
                    .setApplicationId(gameConfig.applicationID)
                    .setType("PLAYING")
                    .setName(gameConfig.name)
                    .setDetails(gameConfig.details)
                    .setState(gameConfig.state);

                if (gameConfig.largeImageKey) {
                    rpc.setAssetsLargeImage(gameConfig.largeImageKey);
                    if (gameConfig.largeImageText) {
                        rpc.setAssetsLargeText(gameConfig.largeImageText);
                    }
                }

                if (gameConfig.smallImageKey) {
                    rpc.setAssetsSmallImage(gameConfig.smallImageKey);
                    if (gameConfig.smallImageText) {
                        rpc.setAssetsSmallImageText(gameConfig.smallImageText);
                    }
                }

                if (gameConfig.startTimestamp) {
                    rpc.setStartTimestamp(gameConfig.startTimestamp);
                }

                await client.user.setActivity(rpc);
            }
        } catch (e) {
            console.error("Error updating presence:", e);
        }
    };

    await updateActivity();
    setInterval(updateActivity, 15000);

    console.log("Rich Presence is active and running with config mode:", config.mode);
});

client.login(config.token);
