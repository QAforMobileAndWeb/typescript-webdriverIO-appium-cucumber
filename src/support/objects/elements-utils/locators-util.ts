/**
 * WebriverIO info: https://webdriver.io/docs/selectors.html#mobile-selectors
 * Appium info:     http://appium.io/docs/en/commands/element/find-elements/#selector-strategies
 * UiSelector info: https://developer.android.com/reference/android/support/test/uiautomator/UiSelector
 */
class LocatorsUtils {

    public getAppPackage(locatorValue) {
        return `ru.yandex.weatherplugin:${locatorValue}`;
    }

    public getPermissionPackage(locatorValue) {
        return `com.android.permissioncontroller:${locatorValue}`;
    }

    public getResourceId(resourceId: string, platform: string = 'android') {
        return `${platform}=new UiSelector().resourceId("${resourceId}")`;
    }

    public getClassName(className: string, platform: string = 'android') {
        return `${platform}=new UiSelector().className("${className}")`;
    }

    public getElementByText(text: string, platform: string = 'android') {
        return $(`${platform}=new UiSelector().text("${text}")`);
    }
}

export const LU = new LocatorsUtils();
