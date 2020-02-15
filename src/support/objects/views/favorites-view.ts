const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-utils/elements-util';
import { LU } from './../elements-utils/locators-util';

export class FavoritesView {

    private viewElements = {
        // top tool bar
        'back button': {
            android: LU.getResourceId(LU.addAppPackage('id/back_button')),
            ios: ''
        },
        'search button': {
            android: LU.getResourceId(LU.addAppPackage('id/search_button')),
            ios: ''
        },
        // searching
        'search input': {
            android: LU.getResourceId(LU.addAppPackage('id/search_input_edit_text')),
            ios: ''
        },
        'search results': {
            android: LU.getResourceId(LU.addAppPackage('id/search_recycler_view')),
            ios: ''
        },
        'search hint': {
            android: LU.getResourceId(LU.addAppPackage('id/search_placeholder')),
            ios: ''
        },
        'found item': {
            android: LU.getResourceId(LU.addAppPackage('id/item_search_root')),
            ios: ''
        },
        'reset button': {
            android: LU.getResourceId(LU.addAppPackage('id/search_clear_image_view')),
            ios: ''
        },
        // favorites segment
        'favorites segment': {
            android: LU.getResourceId(LU.addAppPackage('id/favorites_content')),
            ios: ''
        },
        'location cards': {
            android: LU.getClassName('android.widget.RelativeLayout'),
            ios: ''
        },
        'add favorites description': {
            android: LU.getResourceId(LU.addAppPackage('id/favorite_description')),
            ios: ''
        }
    };

    public async isViewFullyLoaded() {
        const elementNames = [
            'back button',
            'favorites segment'
        ];

        for (const elementName of elementNames) {
            const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);
            await utils.waitReady(requiredElement);
        }
    }

    public async getElementsCount(elementsName: string) {
        const requiredElements = await $$(this.viewElements[elementsName][configHelper.platform]);

        return requiredElements.length;
    }

    public async clickOnElement(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.clickOnElement(requiredElement);
    }

    public async isElementVisible(elementName: string, waitDuring = 30000) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.isElementVisible(requiredElement, waitDuring);
    }

    public async getElementText(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.getElementText(requiredElement);
    }

    public async fillElement(elementName: string, valueToFill: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);
        await utils.fillElement(requiredElement, valueToFill);
    }
}
