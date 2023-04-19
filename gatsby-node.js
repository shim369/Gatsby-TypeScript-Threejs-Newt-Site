const os = require('os');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    cache: {
      type: 'filesystem',
      cacheDirectory: path.join(os.tmpdir(), 'gatsby-webpack-cache'),
    },
  });
};