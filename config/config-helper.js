const { getCapabilities } = require('./capabilities.js');
const { getDockerOptions } = require('./docker-options.js');
// const cp = require('child-process-es6-promise');
const logger = require('logger');

const log = logger.createLogger();
log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
log.setLevel('debug');


const configHelper = {

    platform: process.env.npm_config_platform ? process.env.npm_config_platform : 'android',

    fullPlatform: process.env.npm_config_fullPlatform ? process.env.npm_config_fullPlatform : 'android-10.0-api-29',

    device: process.env.npm_config_device ? process.env.npm_config_device : 'Samsung Galaxy S10',

    logger: log,


    getCapabilities() {

        const requiredCapabilities = [];

        const platforms = this.fullPlatform.split(',');

        platforms.forEach((platform) => {

            const [pltfmName, pltfmVersion] = platform.split('-');

            requiredCapabilities.push(getCapabilities(pltfmName, pltfmVersion));

        });           

        return requiredCapabilities;

    },

    getDockerOptions() {

        const [pltfmName, pltfmVersion] = this.fullPlatform.split('-');
        const dockerOptions = getDockerOptions(pltfmVersion, this.device); 
        
        this.logger.info(`docker options :: ${JSON.stringify(dockerOptions)}`);     

        return dockerOptions;

    },



    getTagWithExcluding() {
        let tagExpression = `${process.env.npm_config_tag}`;

        /*if (!process.env.npm_config_device.includes('api-29')) {
            tagExpression = `${tagExpression} not @only-api-29`;
        }*/

        return tagExpression;
    },

    /*
    installAppBeforeAppiumSession() {
        cp.exec('adb install ./docker/ru.yandex.weatherplugin_6.5.12_9341.apk')
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }
    */
};

module.exports = configHelper;