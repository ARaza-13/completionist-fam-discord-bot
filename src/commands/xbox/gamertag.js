const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "register-gamertag",
  description: "Register your Xbox Gamertag.",
  options: [
    {
      name: "gamertag",
      description: "Enter your Xbox Gamertag.",
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],
  channelOnly: true,
  // devOnly: Boolean,
  // testOnly: Boolean,
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(
      `Your Gamertag '${interaction.options.get("gamertag")}' has been successfully registered.`,
    );
  },
};
