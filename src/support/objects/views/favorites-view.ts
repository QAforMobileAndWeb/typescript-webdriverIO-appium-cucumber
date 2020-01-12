const configHelper = require('./../../../../config/config-helper.js');
import { utils } from './../elements-util';

export class FavoritesView {
    private viewElements = {
        // top tool bar
        'back button': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/back_button'),
            ios: ''
        },
        'search button': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_button'),
            ios: ''
        },
        // searching
        'search input': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_input_edit_text'),
            ios: ''
        },
        'search input text': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_input_edit_text'),
            ios: ''
        },
        'search results': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_recycler_view'),
            ios: ''
        },
        'search hint': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_placeholder'),
            ios: ''
        },
        'found item': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/item_search_root'),
            ios: ''
        },
        'reset button': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/search_clear_image_view'),
            ios: ''
        },
        // favorites segment
        'favorites segment': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/favorites_content'),
            ios: ''
        },
        'location cards': {
            android: utils.getClassName('android', 'android.widget.RelativeLayout'),
            ios: ''
        },
        'add favorites description': {
            android: utils.getResourceId('android', 'ru.yandex.weatherplugin:id/favorite_description'),
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

    public async isElementVisible(elementName: string) {
        const requiredElement = await $(this.viewElements[elementName][configHelper.platform]);

        return utils.isElementVisible(requiredElement, 30000);
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
