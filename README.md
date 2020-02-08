---

### typescript webdriverIO appium cucumber

## Getting Started

### Requirements

1. NodeJS installed globally in the system.

2. JAVA(jdk) installed in the system, **JAVA_HOME** environment variable.

3. Andriod(sdk) installed in the system, **ANDROID_HOME** environment variable.


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

[wdio.config.js](./config/wdio.config.js) - used for running tests, with already running Appium server
and emulator

```
npm run test --tags=
```

[wdio.docker.config.js](./config/wdio.docker.config.js) - starts docker container with Appium server and emuator

```
npm run test-docker --tags=
```

options:

   --tags= @main-view,@favorites,@launch-app (@launch-app-overview | @favorites | @launch-app | @main-view )
   --platform= (android | ios, default: android)
   --fullPlatform= android-8.1-api-27 (default: android-10.0-api-29)
   --device= for Dockerized emulators (default: 'Samsung Galaxy S10')

   --adbDeviceName= (for real device - serial number, for emulators - 'emulator-5554',
                     default: 'emulator-5554'). To know adbDeviceName run command: adb devices

   --wdioLogging= (trace | debug | info | warn | error | silent, default: debug)

   --dryRun= (true | false, default: false) for checking if all cucumber steps defined

### example:

* running on default/non-default manually configured emulator:
profile:
       {
        platform: 'android'
        fullPlatform: 'android-10.0-api-29'
        device: 'Nexus 5 API 29 (1080*1920)' (depends on manually started emulator,
                                              can be skipped, if non-Dockerized emulators)
        adbDeviceName: 'emulator-5554' (depends on the rinning emulators count)
       }

commands:
```
 npm run test --tags=@main-view
 npm run test --tags=@main-view --fullPlatform=android-8.1-api-27
```

* running on real device:
profile:
       {
        platform: 'android'
        fullPlatform: 'android-6.0.1-api-23'
        device: 'Redmi Note 3 (1080*1920)' (can be skipped, if non-Dockerized emulators)
        adbDeviceName: '8a48ad27' (on phone: Settings -> General info -> Serial number
                                   or command: adb devices)
       }

command:
```
npm run test --tags=@main-view --fullPlatform=android-6.0.1-api-23 --adbDeviceName='8a48ad27'
```

* running on Dockerized emulators:
profile:
       {
        platform: 'android' (!only for android platform)
        fullPlatform: 'android-10.0-api-29' (default) or 'android-8.1-api-27' (see available Docker images)
        device: 'Samsung Galaxy S10' (default: 'Samsung Galaxy S10',
                                      configured option, see List of Devices)
        adbDeviceName: 'emulator-5554' (depends on the rinning emulators count)
       }

command:
```
npm run test-docker --tags=@main-view --device='Samsung Galaxy S9'
```

### List of Devices
Type	Device Name
Phone	Samsung Galaxy S10
Phone	Samsung Galaxy S9
Phone	Samsung Galaxy S8
Phone	Samsung Galaxy S7 Edge
Phone	Samsung Galaxy S7
Phone	Samsung Galaxy S6
Phone	Nexus 4
Phone	Nexus 5
Phone	Nexus One
Phone	Nexus S
Tablet	Nexus 7


### Run tests within Dockerized Appium && emulators

* Requirements:
1. Nested Virtualization should be enable, Linix
2. Docker installed
3. built local Docker image

```
.\docker> docker build .

```

Android:

| fullPlatform         | docker image        | description                         |
| -------------------- | ------------------- | ----------------------------------- |
| android-10.0-api-29  | appium-android-10.0 | the latest (2019) Android OS        |
| android-8.1-api-27   | appium-android-8.1  | popular (2017) Android OS - 15,4%** |

*** - in accordance with https://developer.android.com/about/dashboards/index.html?utm_source=suzunone

noVnc available on 6080 port, appium - on 4723 port


### Reporting

Allure is used for tests results reporting. For allure report generating use:

```
npm run generate-report
```

For report opened in default browser:

Windows:

```
npm run win-launch-report
```

Ubuntu:

```
npm run ubuntu-launch-report
```