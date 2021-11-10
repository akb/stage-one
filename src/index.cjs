const { version } = require("./build-variables.cjs")

module.exports.version = version

if (require.main === module) {
  console.log('Hello world')
}