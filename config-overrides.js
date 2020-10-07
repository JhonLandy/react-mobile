const {injectBabelPlugin} = require('react-app-rewired');
 

module.exports = function override(config, env) {
    const path = require('path');
    const paths = require('react-scripts/config/paths');
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');

    config.output.path = path.join(path.dirname(config.output.path), 'docs');
  
    return config;
};