/**
 * more information: http://appium.io/docs/en/writing-running-appium/caps/
 */
function getCapabilities(platformName, platformVersion, adbDeviceName) {

  return {

    waitforTimeout: 60000,

    // browser' for Android, is empty string if automating an app
    browserName: '',      
    
    // device name: adb devices
    'appium:deviceName': adbDeviceName,
  
    // how long (in seconds) Appium will wait for a new command from the client
    'appium:newCommandTimeout': 60000,
    
    'platformName': `${platformName}`,

    // android platform version of the device
    'appium:platformVersion': `${platformVersion}`,

    'appium:noSign': true,

    'appium:clearSystemFiles': true,

    // remoteAppsCacheLimit - remote cached apks (default is 10), which are pushed 
    // to the device-under-test's local storage. Set this capability to 0 to disable caching
    // having error: 'Failed to parse APK file'
    'appium:remoteAppsCacheLimit': 0,

    // adb finding devide and install apk
    'appium:adbExecTimeout': 60000,

    'appium:androidInstallTimeout': 180000,

    // uiAutomator2 launch app
    'appium:uiautomator2ServerLaunchTimeout': 180000,

    'appium:uiautomator2ServerInstallTimeout': 180000,      

    // automation engine to use:
    // Android: Appium | UiAutomator2 | Espresso, iOS: XCUITest 
    'appium:automationName': 'uiautomator2',
  
    // ---===Application===---
    // path to .apk file      
    'appium:app': 'app/ru.yandex.weatherplugin_6.5.12_9341.apk',

    // package name of the app
    'appium:appPackage': 'ru.yandex.weatherplugin', 

    // app activity for app launch
    'appium:appActivity': '.ui.activity.SplashActivity'
  };
           
};

module.exports.getCapabilities = getCapabilities;