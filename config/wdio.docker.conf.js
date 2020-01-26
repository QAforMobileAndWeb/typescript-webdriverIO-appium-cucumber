const { config } = require('./wdio.conf.js');
const configHelper = require('./config-helper.js');

/**
 * Configs for running tests within Dockerized emulators
 * more information: https://webdriver.io/docs/wdio-docker-service.html
 *                   http://v4.webdriver.io/guide/services/docker.html
 */

config.services = [
    'appium',
    'docker'
];

config.dockerLogs = './temp/dockerLogs';

config.dockerOptions = configHelper.getDockerOptions();

config.onDockerReady = () => {
    configHelper.logger.info('Dockerized emulator up and running, see http://localhost:6080');                
};

exports.config = config;