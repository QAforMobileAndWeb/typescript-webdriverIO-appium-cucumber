const configHelper = require('./../../../../config/config-helper.js');
import { Activities } from './../../enums/app-activities';
import { Locations } from './../../enums/locations';

class ElementsUtils {

    public async waitReady(element, timeOut = 3000) {
        try {
            await element.waitForDisplayed(timeOut);
        } catch (error) {
            configHelper.logger.error(`element ${element.selector} wait for displayed: ${error.message}`);
        }
    }

    public async isElementVisible(element, timeOut = 3000) {
        await this.waitReady(element, timeOut);
        const visibility = await element.isDisplayed();

        configHelper.logger.info(`isDisplayed :: ${element.selector} :: result "${visibility}"`);

        return visibility;
    }

    public async getElementText(element) {
        let text;
        try {
            text = await element.getText();
            configHelper.logger.info(`getText :: ${element.selector} :: text "${text}"`);
        } catch (error) {
            configHelper.logger.error(`getText :: ${element.selector} :: error ${error.message}`);
        }

        return text;
    }

    public async clearElementValue(element) {
        await element.clearValue();

        const result = await element.getValue();
        if (result !== '') {
            configHelper.logger.error(`clearValue :: ${element.selector} :: cannot clean value`);
        }
    }

    public async fillElement(element, valueToFill) {
       await element.setValue(valueToFill);
    }

    public async clickOnElement(element) {
        try {
            await element.click();
            configHelper.logger.info(`click on :: ${element.selector}`);
        } catch (error) {
            configHelper.logger.error(`click on :: ${element.selector} :: error ${error.message}`);
        }
    }

    /* do not work: wanted to launch some app view - launching activity, but no throuth UI
    public async launch(activityName) {
        const appPackage = 'ru.yandex.weatherplugin';
        await browser.startActivity(appPackage, Activities[activityName]);

        configHelper.logger.info(`launch activity :: ${Activities[activityName]}`);
    }
    */

    public async setGeoLocation(locationName: string) {

        // setGeoLocation do not change location - TODO
        await browser.setGeoLocation(Locations[locationName]);
        const currentLocation = await browser.getGeoLocation();

        configHelper.logger.info(`current geoLocation "${JSON.stringify(currentLocation)}"`);
    }

}

export const utils = new ElementsUtils();
