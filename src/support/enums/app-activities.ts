
/**
 * using: sudo adb shell "dumpsys activity activities | grep ResumedActivity"
 */
export enum Activities {
    launch = '.ui.activity.SplashActivity',
    'main view' = '.newui.container.ContainerActivity',
    'dark pop up' = 'ru.yandex.searchlib.splash.DarkSplashActivity',
    'settings view' = '.newui.settings.SettingsActivity',
    'favorites search' = '.newui.SearchActivity'
}
