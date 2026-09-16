const { Client, RichPresence } = require("discord.js-selfbot-v13");
const config = require("./config.js");

const client = new Client({
    checkUpdate: false,
    presence: {
        status: "online",
        afk: true
    }
});

client.on("ready", async () => {
    console.log(`Logged in successfully as ${client.user.tag}!`);

    let externalAssetPath = null;
    
    if (config.rpc.assets.largeImage) {
        try {
            const externalAssets = await RichPresence.getExternal(
                client,
                config.applicationId,
                config.rpc.assets.largeImage
            );
            externalAssetPath = externalAssets?.[0]?.external_asset_path;
            console.log("Successfully fetched external asset path:", externalAssetPath);
        } catch (error) {
            console.warn("Failed to fetch external asset, falling back or skipping:", error);
        }
    }

    const updateActivity = async () => {
        try {
            const rpc = new RichPresence(client)
                .setApplicationId(config.applicationId)
                .setType(config.rpc.type)
                .setName(config.rpc.name)
                .setDetails(config.rpc.details)
                .setState(config.rpc.state);

            if (externalAssetPath) {
                rpc.setAssetsLargeImage(externalAssetPath);
                if (config.rpc.assets.largeText) {
                    rpc.setAssetsLargeText(config.rpc.assets.largeText);
                }
            }

            if (config.rpc.timestamps?.start) {
                rpc.setStartTimestamp(config.rpc.timestamps.start);
            }

            if (config.rpc.buttons && config.rpc.buttons.length > 0) {
                config.rpc.buttons.forEach(button => {
                    rpc.addButton(button.label, button.url);
                });
            }

            await client.user.setActivity(rpc);
        } catch (e) {
            console.error("Error updating presence:", e);
        }
    };

    await updateActivity();
    setInterval(updateActivity, 15000);

    console.log("Minecraft Rich Presence is active and running!");
});

client.login(config.token);
