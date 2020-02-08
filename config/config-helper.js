const { getCapabilities }    = require('./capabilities.js');
const { getCucumberOptions } = require('./cucumber-options.js');
const { getDockerOptions }   = require('./docker-options.js');
const logger                 = require('logger');

const log = logger.createLogger();
log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
log.setLevel('debug');


const configHelper = {

    platform: process.env.npm_config_platform ? process.env.npm_config_platform : 'android',

    fullPlatform: process.env.npm_config_fullPlatform ? process.env.npm_config_fullPlatform : 'android-10.0-api-29',

    device: process.env.npm_config_device ? process.env.npm_config_device : 'Samsung Galaxy S10',

    adbDeviceName: process.env.npm_config_adbDeviceName ? process.env.npm_config_adbDeviceName : 'emulator-5554',

    logger: log,


    getCapabilities() {

        const requiredCapabilities = [];

        const platforms = this.fullPlatform.split(',');

        platforms.forEach((platform) => {

            const [pltfmName, pltfmVersion] = platform.split('-');

            requiredCapabilities.push(getCapabilities(pltfmName, pltfmVersion, this.adbDeviceName));

        });           

        return requiredCapabilities;

    },

    getCucumberOptions() {

        const expression = this.getTagWithExcluding();

        return Object.assign(
            {
                tagExpression: expression
            },
            getCucumberOptions()
        );

    },

    getDockerOptions() {

        const [pltfmName, pltfmVersion] = this.fullPlatform.split('-');
        const dockerOptions = getDockerOptions(pltfmVersion, this.device); 
        
        this.logger.info(`docker options :: ${JSON.stringify(dockerOptions)}`);     

        return dockerOptions;

    },

    /**
     *
     * more info: https://cucumber.io/docs/cucumber/api/#tag-expressions
     */
    getTagWithExcluding() {

        let testsToRun = String(process.env.npm_config_tags).replace(/,/g, ' or ');

        if (!this.fullPlatform.includes('api-29')) {
            testsToRun = `(${testsToRun}) and (not @only-api-29)`;
        }

        this.logger.info(`tests to be run :: ${testsToRun}`);

        return testsToRun;
    }

};

module.exports = configHelper;