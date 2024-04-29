const path = require("path");
const getAllFiles = require("../utils/getAllFiles");

module.exports = (client) => {
  // get all folders inside the 'events' folder
  const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true);

  // import all files inside each respective event folder
  for (const eventFolder of eventFolders) {
    const eventFiles = getAllFiles(eventFolder);
    eventFiles.sort((a, b) => a > b); // sorts the files in order

    // get the name of the event based on the folder name
    const eventName = eventFolder.replace(/\\/g, "/").split("/").pop(); // gets the last array element, which will be the folder name

    // add an event listener and pass in all the event files
    // loop through all eventFiles and extract the function from each file
    client.on(eventName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg); // run the function inside the respective event file
      }
    });
  }
};
