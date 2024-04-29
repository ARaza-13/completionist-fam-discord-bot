module.exports = {
  name: "gamerscore",
  description: "Update your GamerScore.",
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (client, interaction) => {
    interaction.reply("Your GamerScore has been successfully updated.");
  },
};
