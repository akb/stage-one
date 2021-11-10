// This script generates code to include values calculated at build-time into
// the application. Values pulled from sensitive files, such as package.json,
// should be here, as well as environment variables that may be set at deploy
// time.

const { version }  = require("./package.json")

const buildVariables = { version }

for (const [key, value] of Object.entries(buildVariables)) {
  console.log(`module.exports.${key} = ${JSON.stringify(value)}`)
}
