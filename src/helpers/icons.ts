import { IconsConfig } from '@/types';
import * as iconsList from '@/assets/icons';

/*
|--------------------------------------------------------------------------
| Helper -> icons
|--------------------------------------------------------------------------
|
| Helpers functions related to the icons functionality:
|
| function getIcon() ->
|   Gets an svg icon from the source (by the given name).
|   The default source is a ts file that contains all the icons.
|
*/

const defaultConfig: IconsConfig = {
    source: {
        icons: iconsList,
    },
};

export function getIcon(name: string, config?: IconsConfig) {
    if (!config) {
        config = defaultConfig;
    } else if (
        !Object.prototype.hasOwnProperty.call(config.source.icons, name)
    ) {
        return null;
    }

    return config.source.icons[name];
}
