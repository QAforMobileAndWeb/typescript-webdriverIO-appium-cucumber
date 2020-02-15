const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-utils/elements-util';
import { LU } from './../elements-utils/locators-util';

export class SettingsView {

    private viewElements = {
        'to-main-view button': {
            android: LU.getClassName('android.widget.ImageButton'),
            ios: ''
        },
        'view title': {
            android: '//*[@resource-id="ru.yandex.weatherplugin:id/toolbar"]//*[@class="android.widget.TextView"]',
            ios: ''
        },
        'sign in button': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_auth_left_text')),
            ios: ''
        },
        'sign in description': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_auth_description')),
            ios: ''
        },
        'temperature row': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_temp_switch_container')),
            ios: ''
        },
        'wind speed row': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_wind_switch_container')),
            ios: ''
        },
        'pressure row': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_pressure_switch_container')),
            ios: ''
        },
        'location row': {
            android: LU.getResourceId(LU.getAppPackage('id/settings_location_widget_expandable')),
            ios: ''
        }
    };

    public async isViewFullyLoaded() {
        const elementNames = [
            'sign in description',
            'temperature row',
            'location row'
        ];

        for (const elementName of elementNames) {
            const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);
            await utils.waitReady(requiredElement);
        }
    }

    public async isElementVisible(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.isElementVisible(requiredElement, 30000);
    }

    public async getElementText(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.getElementText(requiredElement);
    }

}
