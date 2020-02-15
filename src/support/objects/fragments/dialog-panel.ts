const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-utils/elements-util';
import { LU } from './../elements-utils/locators-util';

export class DialogPanel {

    private panelElements = {
        'location alert': {
            android: LU.getResourceId(LU.getAppPackage('id/action_bar_root')),
            ios: ''
        },
        'location message': {
            android: LU.getResourceId('android:id/message'),
            ios: ''
        },
        'continue button': {
            android: LU.getResourceId('android:id/button1'),
            ios: ''
        },
        'permissions container': {
            android: LU.getResourceId(LU.getPermissionPackage('id/content_container')),
            ios: ''
        },
        'permission icon': {
            android: LU.getResourceId(LU.getPermissionPackage('id/permission_icon')),
            ios: ''
        },
        'permission message': {
            android: LU.getResourceId(LU.getPermissionPackage('id/permission_message')),
            ios: ''
        },
        'allow always button': {
            android: LU.getResourceId(LU.getPermissionPackage('id/permission_allow_always_button')),
            ios: ''
        },
        'allow foreground button': {
            android: LU.getResourceId(LU.getPermissionPackage('id/permission_allow_foreground_only_button')),
            ios: ''
        },
        'deny button': {
            android: LU.getResourceId(LU.getPermissionPackage('id/permission_deny_button')),
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
