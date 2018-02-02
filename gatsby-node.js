const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

// Modify Webpack Config
exports.modifyWebpackConfig = ({ config }) => {
  // add this to have absolute imports
  config.merge(function(current) {
    current.resolve.root = path.resolve('./src')
    return current
  })

  return config
}
