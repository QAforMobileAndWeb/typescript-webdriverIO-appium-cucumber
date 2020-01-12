const configHelper = require('./../../../config/config-helper.js');

class ElementsUtils {

    public getResourceId(platform, resourceId) {
        return `${platform}=new UiSelector().resourceId("${resourceId}")`;
    }

    public getClassName(platform, className) {
        return `${platform}=new UiSelector().className("${className}")`;
    }

    public getElementByText(platform: string, text: string) {
        return $(`${platform}=new UiSelector().text("${text}")`);
    }

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
        await this.clearElementValue(element);

        await element.setValue(valueToFill);
        const result = await element.getValue();

        if (result !== valueToFill) {
            configHelper.logger.error(`setValue :: ${element.selector} :: cannot set value`);
        }
    }

    public async clickOnElement(element) {
        try {
            await element.click();
            configHelper.logger.info(`click on :: ${element.selector}`);
        } catch (error) {
            configHelper.logger.error(`click on :: ${element.selector} :: error ${error.message}`);
        }
    }
}
export const utils = new ElementsUtils();
