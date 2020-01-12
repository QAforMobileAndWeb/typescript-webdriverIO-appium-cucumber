import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { Messages } from '../../support/enums/messages';
import { BaseView } from '../../support/objects/views/base-view';
import { utils } from '../../support/objects/elements-util';

const baseView = new BaseView();

defineSupportCode(({ Given, When, Then }) => {

    When(/I launch application and skip dialog panels/, async () => {
        const dialogPanel = baseView.getContainer('dialog panel');
        const isLocationAlertVisible = await dialogPanel.isElementVisible('location alert');
        if (isLocationAlertVisible) {
            await dialogPanel.clickOnElement('continue button');
        }

        const isPermissionsAlertVisible = await dialogPanel.isElementVisible('permissions container');
        if (isPermissionsAlertVisible) {
            await dialogPanel.clickOnElement('deny button');
        }
    });

    When(/I wait the (main|favorites|settings) view is loaded/, async (pageName) => {
        await baseView.getContainer(`${pageName} view`).isViewFullyLoaded();
    });

    When(/I click on '(.+)'/, async (elementName) => {
        await baseView.currentContainer.clickOnElement(elementName);
    });

    When(/I fill '(.+)' with '(.+)'/, async (elementName, valueToFill) => {
        await baseView.currentContainer.fillElement(elementName, valueToFill);
    });

    Then(/'(.+)' elements should be '(.+)'/, async (elementsName, expectedCount) => {
        const actualCount = await baseView.currentContainer.getElementsCount(elementsName);

        expect(actualCount).to.equal(+expectedCount);
    });

    Then(/the '(.+)' should be (invisible|visible) within (main view|favorites view|setting view|dialog panel)/,
        async (elementName, expectedVisibility, containerName) => {
        const expectedState = expectedVisibility === 'visible';

        const actualState = await baseView.getContainer(containerName).isElementVisible(elementName, 6000);
        expect(actualState).to.equal(expectedState);
    });

    Then(/element(?:s|) (?:are|is) (invisible|visible) on current container:/, async (expectedVisibility, elements) => {
        const expectedState = expectedVisibility === 'visible';

        const expectedElements = elements.hashes().map((el) => el.itemName);

        for (const elementName of expectedElements) {
            const actualState = await baseView.currentContainer.isElementVisible(elementName);

            expect(actualState).to.equal(expectedState,
                `${elementName} visibility - actual: ${actualState}, expected: ${expectedState}`);
        }
    });

    Then(/element with '(.+)' text should be visible/, async (text) => {
        const requiredElement = await utils.getElementByText('android', text);
        const actualState = await utils.isElementVisible(requiredElement);

        expect(actualState).to.equal(true);
    });

    Then(/element '(.+)' text should be '(.*)'/, async (elementName, expectedValue) => {
        const actualValue = await baseView.currentContainer.getElementText(elementName);

        if (Messages[expectedValue]) {
            expectedValue = Messages[expectedValue];
        }

        expect(actualValue).to.equal(expectedValue,
            `${elementName} text - actual: ${actualValue}, expected: ${expectedValue}`);
    });

    Then(/keyboard should be (invisible|visible)/, async (expectedVisibility) => {
        const expectedState = expectedVisibility === 'visible';
        const actualState = await browser.isKeyboardShown();

        expect(actualState).to.equal(expectedState, `keyboard - actual: ${actualState}, expected: ${expectedState}`);
    });
});
