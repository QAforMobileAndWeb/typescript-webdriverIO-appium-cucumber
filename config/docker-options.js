/**
 * https://github.com/budtmo/docker-android
 */

const dockerOptions = {
    // docker run --privileged -d -p 6080:6080 -p 5554:5554 -p 5555:5555
    // -e DEVICE="Samsung Galaxy S6" --name android-container
    'samsung galaxy s6': {
        image: 'budtmo/docker-android-x86-8.1',
        healthCheck: 'http://localhost:6080',
        options: {
            e: [ DEVICE="Samsung Galaxy S6" ],
            p: [
                '6080:6080',
                '5554:5554',
                '5555:5555'
            ],
            shmSize: '2g'
        }
    }
};

module.exports = dockerOptions;