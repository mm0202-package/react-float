const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['~'] = path.resolve(rootPath,'src')

  return config
}
