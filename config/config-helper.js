const capabilities = require('./capabilities.js');
const logger = require('logger');

const log = logger.createLogger();
log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
log.setLevel('debug');

const configHelper = {

    platform: process.env.npm_config_platform ? process.env.npm_config_platform : 'android',

    logger: log,

    getCapabilities() {

        const devices = process.env.npm_config_device
            ? process.env.npm_config_device.split(',')
            : ['android-10-api-29'];

        const requiredCapabilities = [];
        devices.forEach((device) => requiredCapabilities.push(capabilities[device]));

        return requiredCapabilities;
    },

    getTagWithExcluding() {
        let tagExpression = `${process.env.npm_config_tag}`;

        /*if (!process.env.npm_config_device.includes('api-29')) {
            tagExpression = `${tagExpression} not @only-api-29`;
        }*/

        return tagExpression;
    }

};

module.exports = configHelper;