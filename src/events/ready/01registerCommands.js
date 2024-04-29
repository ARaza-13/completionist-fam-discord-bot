const { testServer } = require("../../../config.json");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(
      client,
      testServer,
    );

    // compare between local and application commands
    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      // check if command exists on the bot,
      // if so, check if local command is set to delete
      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name,
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`🗑 Deleted command "${name}".`);
          continue;
        }
      }
    }
  } catch (error) {
    console.log(`There was an error: ${error.stack}`);
  }
};
