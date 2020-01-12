const merge = require('deepmerge');
const config = require('./wdio.conf.js');
const dockerOptions = require('./config/docker-options.js');

/**
 * Docker service added
 * https://webdriver.io/docs/wdio-docker-service.html
 * http://v4.webdriver.io/guide/services/docker.html
 * https://github.com/stsvilik/wdio-docker-service
 */

process.env.npm_config_dockerDevice ? process.env.npm_config_dockerDevice : 'samsung galaxy s6';

exports.config.services.push('docker');

exports.config = merge(config, {

    dockerLogs: './temp/dockerLogs',

    dockerOptions: dockerOptions[process.env.npm_config_dockerDevice]

}, { clone: false });

// https://webdriver.io/docs/organizingsuites.html