const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "js"),
  entry: "./main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
