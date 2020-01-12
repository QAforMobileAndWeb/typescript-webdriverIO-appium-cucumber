const capabilities = {
    'android-10-api-29': {
        appActivity: '.ui.activity.SplashActivity', // App activity of the app
        appPackage: 'ru.yandex.weatherplugin',  // Package name of your app
        appiumVersion: '1.7.2',                 // Appium module version
        browserName: '',                        // browser name is empty for native apps
        commandTimeout: 60 * 1000,
        deviceName: 'emulator-5554',              // device name of the mobile device
        newCommandTimeout: 60 * 1000,
        platformName: 'Android',
        // app: './app/LGCalculator.apk',  // Path to your native app
        platformVersion: '10',              // Android platform version of the device
        waitforTimeout: 60 * 1000
    },
    'android-8.1-api-27': {
        appActivity: '.ui.activity.SplashActivity', // App activity of the app
        appPackage: 'ru.yandex.weatherplugin',  // Package name of your app
        appiumVersion: '1.7.2',                 // Appium module version
        browserName: '',                        // browser name is empty for native apps
        commandTimeout: 60 * 1000,
        deviceName: 'emulator-5556',              // device name of the mobile device
        newCommandTimeout: 60 * 1000,
        platformName: 'Android',
        // app: './app/LGCalculator.apk',  // Path to your native app
        platformVersion: '8.1',              // Android platform version of the device
        waitforTimeout: 60 * 1000
    }
};

module.exports = capabilities;