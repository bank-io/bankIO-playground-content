const path = require('path');

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";



exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect }
}, options) => {
};

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }, options) => {
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
};
