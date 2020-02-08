/**
 * more information:
 * https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-cucumber-framework#cucumberopts-options
 */
function getCucumberOptions() {

  return {
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
      tagsInTitle: false,
      timeout: 180000,
      ignoreUndefinedDefinitions: false,
  };
           
};

module.exports.getCucumberOptions = getCucumberOptions;