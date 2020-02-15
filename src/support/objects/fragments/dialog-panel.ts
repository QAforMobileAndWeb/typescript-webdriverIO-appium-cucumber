const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-utils/elements-util';
import { LU } from './../elements-utils/locators-util';

export class DialogPanel {

    private panelElements = {
        'location alert': {
            android: LU.getResourceId(LU.addAppPackage('id/action_bar_root')),
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
            android: {
                '8.1': LU.getResourceId(LU.addInstallerPackage('id/dialog_container')),
                '10.0': LU.getResourceId(LU.addPermissionPackage('id/content_container'))
            },
            ios: ''
        },
        'permission icon': {
            android: LU.getResourceId(LU.addPermissionPackage('id/permission_icon')),
            ios: ''
        },
        'permission message': {
            android: LU.getResourceId(LU.addPermissionPackage('id/permission_message')),
            ios: ''
        },
        'allow always button': {
            android: LU.getResourceId(LU.addPermissionPackage('id/permission_allow_always_button')),
            ios: ''
        },
        'allow foreground button': {
            android: LU.getResourceId(LU.addPermissionPackage('id/permission_allow_foreground_only_button')),
            ios: ''
        },
        'deny button': {
            android: {
                '8.1': LU.getResourceId(LU.addInstallerPackage('id/permission_deny_button')),
                '10.0': LU.getResourceId(LU.addPermissionPackage('id/permission_deny_button'))
            },
            ios: ''
        }
    };

    public async isElementVisible(elementName: string, hasVersion: boolean = false) {
        const requiredElement = await $(this.getLocator(elementName, hasVersion));

        return utils.isElementVisible(requiredElement);
    }

    public async getElementText(elementName: string) {
        const requiredElement = await $(this.getLocator(elementName, false));

        return utils.getElementText(requiredElement);
    }

    public async clickOnElement(elementName: string, hasVersion: boolean = false) {
        const requiredElement = await $(this.getLocator(elementName, hasVersion));

        return utils.clickOnElement(requiredElement);
    }

    public async continueLocationAlert() {
        const isVisible = await this.isElementVisible('location alert');

        if (isVisible) {
            await this.clickOnElement('continue button');
        }
    }

    public async denyPermissions() {
        const isVisible = await this.isElementVisible('permissions container', true);

        if (isVisible) {
            await this.clickOnElement('deny button', true);
        }
    }

    private getLocator(elementName: string, hasVersion) {

        const [, version] = configHelper.fullPlatform.split('-');
        const locator = this.panelElements[elementName][configHelper.platform];

        return hasVersion
            ? locator[version]
            : locator;
    }
}
