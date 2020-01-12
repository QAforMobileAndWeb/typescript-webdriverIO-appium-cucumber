---

### <p align="center"> [About](#about) **|** [Getting Started](#getting-started) **|** [Installation](#installation) **|** [Writing Tests](#writing-tests) **|** [Page Objects](#page-objects) **|** [Finding Elements](#finding-elements) **|** [Reports](#reports)</p>

## About

Currently this framework has been developed to run scripts in **ANDROID** platform with real device.

The tests run both on **Android Native App** and **Mobile Browser**. Chrome browser is configured currently for running browser tests.

### Tech Stack

* [Appium]() - This is the node server which interacts with the mobile devices
* [WebdriverIO](http://webdriver.io/) - It is the selenium webdriver api bindings for node.js, It has a very simple api which could be used to automate web & browser apps in a fast and scalable way.
* [Typescript(Javascript)](https://www.typescriptlang.org/) - It is the superset of javascript which has additional static typings and features like JAVA and other languaes. Now you could write your code which compiles to pure javascript.
* [Cucumber](https://cucumber.io/) - The popular BDD test framework which helps us write automated tests. 

## Getting Started

## INFORMATION

npm run test
--suites=
--tag=@launch-app-overview
--device=android-10-api-29,android-8.1-api-27 (default: android-10-api-29)
--wdioLogging (trace | debug | info | warn | error | silent, default: silent)


npm run test --tag=@main-view-overview --device=android-10-api-29 --wdioLogging=debug
npm run test --tag=@add-favorite-location --device=android-10-api-29
npm run report



### Pre-requisites

1. NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.  JAVA(jdk) installed in the system.

3. Andriod(sdk) installed in the system.

4. Set **JAVA_HOME** & **ANDROID_HOME** paths correctly in the system.

5. Chrome browser installed.

6. Text Editor/IDE (Optional) installed-->Sublime/Visual Studio Code/Brackets.

**Tip:** Install `npm install -g appium-doctor` and run it from the command-line which checks if your java jdk and android sdk paths are set correctly or not.

## Installation

### Setup

### Run Tests

* First step is to start the `appium` server, This project includes the appium node module so you don't have to download it externally. You can run the appium server by the following npm command.

```
npm run appium
```
* Next you have to transpile/compile your typescript files to javascript files, you could do this by running the command -

```
npm run build
```

Next step is to execute the config files. This project has 2 config files -

* [wdio.config.ts](./config/wdio.config.ts) - This config file is used to run tests in real mobile native apps.
You would have to change the `appium settings` to run tests in your device.


```
capabilities: [
{
    appiumVersion: '1.7.1',
    browserName: 'chrome',  // browser name should be specified
    platformName: 'Android',
    platformVersion: '5.1.1',
    deviceName: 'THF755e0384', // device name is mandatory
    waitforTimeout: waitforTimeout,
    commandTimeout: commandTimeout,
    newCommandTimeout: 30 * 60000,
}
],
```
