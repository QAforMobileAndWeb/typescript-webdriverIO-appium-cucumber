const configHelper = require('./config-helper.js');

/**
 * more information: https://webdriver.io/docs/configurationfile.html
 *                   https://webdriver.io/docs/options.html
 */
exports.config = {

    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally / remote machine).
    runner: 'local',    
    
    specs: ['./src/test-layer/features/*.feature'],

    // Patterns to exclude.    
    exclude: [
        // 'path/to/excluded/files'
    ],    

    host: '0.0.0.0',

    port: 4723,

    maxInstances: 1,

    capabilities: configHelper.getCapabilities(),

    services: [ 
        // https://webdriver.io/docs/appium-service.html
        'appium'        
    ],

    // http://appium.io/docs/en/writing-running-appium/server-args/index.html
    appium: {
        args: {
            address: '0.0.0.0',
            port: 4723,
            commandTimeout: 1800000,
            sessionOverride: true,
            debugLogSpacing: true
        },
        command: 'appium',
        logFileName: './temp/appium.log',
        waitforTimeout: 1800000,
        waitStartTime: 6000
    },

    logLevel: process.env.npm_config_wdioLogging ? process.env.npm_config_wdioLogging : 'silent',

    coloredLogs: true,

    waitforTimeout: 10000,

    // default timeout in milliseconds for request if Selenium doesn't send response
    connectionRetryTimeout: 300000,    

    connectionRetryCount: 3,

    framework: 'cucumber',

    cucumberOpts: configHelper.getCucumberOptions(),

    // more info: https://webdriver.io/docs/allure-reporter.html#configuration
    reporters: [ 
        [
            'allure',
            {
                outputDir: './temp/allure-results',
                useCucumberStepReporter: true,
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    // =====
    // Hooks
    // =====
    
    // Runs after a Cucumber step
    afterStep: function (uri, feature, { error, result, duration, passed }, stepData, context) {

        const stepResult = !!passed && !error ? 'passed' : 'failed';

        configHelper.logger.info(`AFTER STEP :: ${stepData.step.text} :: ${stepResult}`);

        browser.takeScreenshot();
    },

    // Runs after a Cucumber scenario
    afterScenario: async function (uri, feature, scenario, result, sourceLocation) {

      // TODO
      //  await browser.hideDeviceKeyboard('pressKey', 'Done');
      //  configHelper.logger.info(`AFTER SCENARIO :: keyboard hidden`);

        await browser.closeApp();
        configHelper.logger.info(`AFTER SCENARIO :: app closed`);

    },

    
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: function (config, capabilities) {
        configHelper.logger.info('ON_PREPARE :: ');
     },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     beforeSession: function (config, capabilities, specs) {
        configHelper.logger.info('BEFORE_SESSION :: ');
     },

    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function() {
        configHelper.logger.info('before hook');    
     
        /**
       * Setup the Chai assertion framework
       */
     // const chai    = require('chai');
    //  global.timeUnits = 
    //  global.expect = chai.expect;
     // global.assert = chai.assert;
     // global.should = chai.should();
     //configHelper.logger.info(`isDisplayed :: ${element.selector} :: result "${visibility}"`);
    },  

    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     */
    // beforeFeature: function (uri, feature, scenarios) {
    //    
    // },
    /**
     * Runs before a Cucumber scenario
     */
    // beforeScenario: function (uri, feature, scenario, sourceLocation) {
    // },
    /**
     * Runs before a Cucumber step
     */
    // beforeStep: function (uri, feature, stepData, context) {
    // },
    /**
     * Runs after a Cucumber feature
     */
    // afterFeature: function (uri, feature, scenarios) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
