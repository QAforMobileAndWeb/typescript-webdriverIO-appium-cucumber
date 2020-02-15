const configHelper = require('./../../../../config/config-helper.js');
import { DialogPanel } from '../fragments/dialog-panel';
import { FavoritesView } from './favorites-view';
import { MainView } from './main-view';
import { SettingsView } from './settings-view';

export class BaseView {
    private curContainer;

    get currentContainer() {
        return this.curContainer;
    }

    public setContainer(containerName: string) {
        const containers = {
            'dialog panel': DialogPanel,
            'favorites view': FavoritesView,
            'main view': MainView,
            'settings view': SettingsView
        };

        this.curContainer = new containers[containerName]();
        configHelper.logger.info(`setContainer :: current container set to ${containerName}`);
    }

    public getContainer(containerName: string) {
        this.setContainer(containerName);

        return this.curContainer;
    }
}
