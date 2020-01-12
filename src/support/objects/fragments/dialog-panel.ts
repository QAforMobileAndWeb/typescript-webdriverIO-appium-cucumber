const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-util';

/**
 * info: https://webdriver.io/docs/selectors.html#mobile-selectors
 * http://appium.io/docs/en/commands/element/find-elements/#selector-strategies
 */
export class DialogPanel {
    private panelElements = {
        'location alert': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/action_bar_root' ),
            ios: ''
        },
        'location message': {
            android: utils.getResourceId('android', 'android:id/message'),
            ios: ''
        },
        'continue button': {
            android: utils.getResourceId('android', 'android:id/button1'),
            ios: ''
        },
        'permissions container': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/content_container'),
            ios: ''
        },
        'permission icon': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/permission_icon'),
            ios: ''
        },
        'permission message': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/permission_message'),
            ios: ''
        },
        'allow always button': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/permission_allow_always_button'),
            ios: ''
        },
        'allow foreground button': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/permission_allow_foreground_only_button'),
            ios: ''
        },
        'deny button': {
            android: utils.getResourceId('android', 'com.android.permissioncontroller:id/permission_deny_button'),
            ios: ''
        }
    };

    public async isElementVisible(elementName: string) {
        const requiredElement = await $(this.panelElements[elementName][configHelper.platform]);

        return utils.isElementVisible(requiredElement);
    }

    public async getElementText(elementName: string) {
        const requiredElement = await $(this.panelElements[elementName][configHelper.platform]);

        return utils.getElementText(requiredElement);
    }

    public async clickOnElement(elementName: string) {
        const requiredElement = await $(this.panelElements[elementName][configHelper.platform]);

        return utils.clickOnElement(requiredElement);
    }
}
