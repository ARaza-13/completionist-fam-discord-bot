const fs = require("fs");
const path = require("path");

module.exports = (directory, foldersOnly = false) => {
  // if foldersOnly is true, then return folders from specific path
  let fileNames = [];

  const files = fs.readdirSync(directory, { withFileTypes: true }); // withFileTypes: true to distinguish between files and folders

  // loop through all files to check if it's a file or a folder
  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath);
      }
    } else {
      if (file.isFile()) {
        fileNames.push(filePath);
      }
    }
  }

  return fileNames;
};
