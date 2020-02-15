
## Mobile automation for native application

using
```
appium
webdriverio
cucumber
chai
typescript
allure
```

### Requirements

1. NodeJS installed globally in the system.

2. JAVA installed in the system, **JAVA_HOME** environment variable.

3. Android (sdk) installed in the system, **ANDROID_HOME** environment variable.


### Setup

```
npm install
```

### Run Tests

* start appium server:

```
npm run start-appium
```

* execute the config files. This project has 2 config files:

[wdio.config.js](config/wdio.conf.js) - used for running tests, with already running Appium server
and emulator

```
npm run test --tags=
```

[wdio.docker.config.js](config/wdio.docker.conf.js) - starts docker container with Appium server and emuator

```
npm run test-docker --tags=
```

### Options:
```
--tags= @main-view or @main-view,@favorites,@launch-app (@launch-app | @favorites | @main-view | @settings)

--platform= (android | ios (not supported yet), default: android)

--fullPlatform= android-8.1-api-27 (default: android-10.0-api-29)

--device= for Dockerized emulators (default: 'Samsung Galaxy S10')

--adbDeviceName= (for real device - serial number, for emulators - 'emulator-5554', default: 'emulator-5554').
                  To know adbDeviceName run command: adb devices

--wdioLogging= (trace | debug | info | warn | error | silent, default: debug)

--dryRun= (true | false, default: false) for checking if all cucumber steps defined
```

Examples:

* **running on default/non-default manually configured emulator (Android 8.1, 10.0):**

based on [platform version distribution](https://developer.android.com/about/dashboards/index.html?utm_source=suzunone)

```
profile:
       {
        platform: 'android'
        fullPlatform: 'android-10.0-api-29'
        device: 'Nexus 5 API 29 (1080*1920)' (depends on manually started emulator,
                                              can be skipped, if non-Dockerized emulators)
        adbDeviceName: 'emulator-5554' (depends on the rinning emulators count)
       }
```

commands:
```
 npm run test --tags=@main-view
 npm run test --tags=@main-view --fullPlatform=android-8.1-api-27
```

* **running on real device:**

Device should be USB connected and configured to run test:
```
1. Develover mode is switched on

on MIUI 9 and above:

2. Settings -> Additional Settings -> Developer options ->

   turn ON "USB Debugging"
   turn ON "Install via USB"
   set USB Configuration to Charging
   turn ON "install via USB
   turn OFF "MIUI optimization" and Restart

   MTP(Media Transfer Protocol) is the default mode.
```

```
profile:
       {
        platform: 'android'
        fullPlatform: 'android-6.0.1-api-23'
        device: 'Redmi Note 3 (1080*1920)' (can be skipped, if non-Dockerized emulators)
        adbDeviceName: '8a48ad27' (on phone: Settings -> General info -> Serial number
                                   or command: adb devices)
       }
```

command:
```
npm run test --tags=@main-view --fullPlatform=android-6.0.1-api-23 --adbDeviceName='8a48ad27'
```

* **running on Dockerized emulators:**
```
profile:
       {
        platform: 'android' (!currently, only for Android 10.0 platform)
        fullPlatform: 'android-10.0-api-29'
        device: 'Samsung Galaxy S10' (default: 'Samsung Galaxy S10',
                                      configured option, see List of Devices)
        adbDeviceName: 'emulator-5554' (depends on the rinning emulators count)
       }
```

command:
```
npm run test-docker --tags=@main-view --device='Samsung Galaxy S9'
```

### List of Devices

see https://github.com/budtmo/docker-android#list-of-devices

### Running tests within Dockerized Appium and emulator

Requirements:

1. Nested Virtualization should be enable, Linux OS (Ubuntu)
2. Docker installed
3. built locally Docker images

```
.\docker\android-10.0> docker build -t appium-android-10.0 .

```

Android:

| --fullPlatform command option | docker image        |
| ----------------------------- | ------------------- |
| android-10.0-api-29           | appium-android-10.0 |

after docker container started - noVNC available on 6080 port, appium - on 4723 port


### Reporting

Allure is used for tests results reporting. For allure report generating use:

```
npm run generate-report
```

For report opened in default browser:

on Windows:

```
npm run win-launch-report
```

on Linux (Ubuntu):

```
npm run ubuntu-launch-report
```