/**
 * more info: https://webdriver.io/docs/wdio-docker-service.html#dockeroptionshealthcheck
 */
const healthCheck = {

    url: 'http://localhost:6080',

    maxRetries: 5,

    inspectInterval: 1000,

    startDelay: 240000
};


/**
 * more information: https://github.com/budtmo/docker-android
 * docker run command:
 * sudo docker run 
 * --privileged (Only for ubuntu OS. This flag allow to use system image x86 for better performance)
 * -d -p 6080:6080 -p 5554:5554 -p 5555:5555 
 * -e DEVICE="Samsung Galaxy S10" (Device name. Default device is Nexus 5)
 * -e EMULATOR_ARGS="-gpu host" (see: https://gist.github.com/JonathanLalou/180c87554d8278b0e6d7)
 * --name android-container budtmo/docker-android-x86-10.0
 */ 
function getDockerOptions(platformVersion, deviceName) {

    return {

        // budtmo/docker-android-x86-10.0 / budtmo/docker-android-x86-8.1
        // image: `budtmo/docker-android-x86-${platformVersion}`,
        image: 'android-10-app',

        healthCheck: healthCheck,

        options: {            
            rm: true,
            privileged: true,
            d: true,
            // Samsung Galaxy S10 / Samsung Galaxy S8
            e: [ 
                `DEVICE=${deviceName}`,
                'EMULATOR_ARGS=-gpu host'
             ],
            p: [
                '6080:6080',
                '5554:5554',
                '5555:5555'
            ]            
        }
    };
}

module.exports.getDockerOptions = getDockerOptions;