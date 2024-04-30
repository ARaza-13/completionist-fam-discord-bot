const { devs, channelId, testServer } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands();

  try {
    // check if the command matches local commands
    // if it does, use the object that it gets
    const commandObject = localCommands.find(
      (cmd) => cmd.name === interaction.commandName,
    );

    // check if the command exists
    if (!commandObject) return;

    // check if the person running the command is a developer
    if (!commandObject.devOnly) {
      if (!devs.includes(interaction.member.id)) {
        interaction.reply({
          content: "Only developers are allowed to run this command.",
          ephemeral: true,
        });
        return;
      }
    }
  } catch (error) {
    console.log(`There was an error running this command: ${error}`);
  }
};
