const configHelper = require('./config/config-helper.js');

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;
const cucumberStepTimeout = 3 * 60000;

const appiumHost = '0.0.0.0';
const appiumPort = 4723;

exports.config = {
    runner: 'local',
    debug: false,

    specs: ['./src/test-layer/features/*.feature'],

    suites: {
        launch: [
            './src/test-layer/features/launch-application.feature'
        ],
        pages: [
            './src/test-layer/features/main-view.feature'
        ]
    },

    /*
    exclude: [
        // 'path/to/excluded/files'
    ],
    */
    host: appiumHost,
    port: appiumPort,

    maxInstances: 1,
    capabilities: configHelper.getCapabilities(),

    services: [
        'appium' // https://webdriver.io/docs/appium-service.html
    ],
    // http://appium.io/docs/en/writing-running-appium/server-args/index.html
    appium: {
        args: {
            address: appiumHost,
            port: appiumPort,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        },
        command: 'appium',
        logFileName: './temp/appium.log',
        waitforTimeout: waitforTimeout,
        waitStartTime: 6000
    },

    logLevel: process.env.npm_config_wdioLogging ? process.env.npm_config_wdioLogging : 'silent',

    coloredLogs: true,

    waitforTimeout: 10000,

    connectionRetryCount: 3,

    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './compiled-output/test-layer/step_definitions/common_steps.js'
        ],
        backtrace: true,
        requireModule: [],
        dryRun: process.env.npm_config_dryRun ? !!process.env.npm_config_dryRun : false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tagExpression: configHelper.getTagWithExcluding(),
        timeout: cucumberStepTimeout,
        ignoreUndefinedDefinitions: false,
    },

    reporters: [ // https://webdriver.io/docs/allure-reporter.html#configuration
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

    // Runs after a Cucumber step
    afterStep: function (uri, feature, { error, result, duration, passed }, stepData, context) {
        const stepResult = !!passed ? 'passed' : 'failed';

        configHelper.logger.info(`STEP :: ${stepData.step.text} :: ${stepResult}`);

        browser.takeScreenshot();
    },

    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    // before: function () {
    // },
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
     * Runs after a Cucumber scenario
     */
    // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
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
