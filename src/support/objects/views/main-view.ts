const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-utils/elements-util';
import { LU } from './../elements-utils/locators-util';

export class MainView {

    private viewElements = {
        // top tool bar
        'top toolbar segment': {
            android: LU.getResourceId(LU.getAppPackage('id/home_toolbar_toolbar_linear_layout')),
            ios: ''
        },
        'to-favorite button': {
            android: LU.getResourceId(LU.getAppPackage('id/home_toolbar_left_button')),
            ios: ''
        },
        'weather info location': {
            android: LU.getResourceId(LU.getAppPackage('id/top_text_title')),
            ios: ''
        },
        'to-setting button': {
            android: LU.getResourceId(LU.getAppPackage('id/home_toolbar_right_button')),
            ios: ''
        },
        'to-set favorite button': {
            android: LU.getResourceId(LU.getAppPackage('id/search_button')),
            ios: ''
        },
        // weather info
        'weather info segment': {
            android: LU.getResourceId(LU.getAppPackage('id/home_illustration_content')),
            ios: ''
        },
        'central weather info square': {
            android: LU.getResourceId(LU.getAppPackage('id/home_top_info_view')),
            ios: ''
        },
        'hourly forecast': {
            android: LU.getResourceId(LU.getAppPackage('id/home_hourly_forecast')),
            ios: ''
        },
        // alerts
        'alerts segment': {
            android: LU.getResourceId(LU.getAppPackage('id/home_alert_recycler_view')),
            ios: ''
        },
        'alert image': {
            android: LU.getResourceId(LU.getAppPackage('id/alert_item_images_container')),
            ios: ''
        },
        'alert text': {
            android: LU.getResourceId(LU.getAppPackage('id/alert_item_text')),
            ios: ''
        },
        'call to action': {
            android: LU.getResourceId(LU.getAppPackage('id/alert_item_call_to_action_text')),
            ios: ''
        },
        // forecast list
        'daily forecast segment': {
            android: LU.getResourceId(LU.getAppPackage('id/home_days_forecast_recycler_view')),
            ios: ''
        }
    };

    public async isElementVisible(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.isElementVisible(requiredElement);
    }

    public async isViewFullyLoaded() {
        const elementNames = [
            'top toolbar segment',
            'weather info segment',
            'alerts segment',
            'daily forecast segment'
        ];

        for (const elementName of elementNames) {
            const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);
            await utils.waitReady(requiredElement);
        }
    }

    public async clickOnElement(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.clickOnElement(requiredElement);
    }

    public async getElementText(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.getElementText(requiredElement);
    }
}
