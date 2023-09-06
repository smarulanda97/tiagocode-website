import { Icon, IconsConfig, SvgSource } from '@/types';
import { Link } from '@/types/general';
import { IconLink } from '@/types/icons';

const baseConfig: IconsConfig = {
    source: {
        icons: {
            ...import('@/assets/icons'),
        },
    },
};

/**
 *
 * @param icon
 * @param config
 */
function getIcon(icon: string | Icon, config: IconsConfig = {}) {
    if (!config) {
        config = baseConfig;
    }

    if (typeof icon !== 'string') {
        icon = (icon as Icon).name;
    }

    return resolveSvgIcon(icon, config.source);
}

/**
 * Get an inline svg icon (presented as string) from the given source
 * of icons.
 *
 * @param name
 * @param source
 */
function resolveSvgIcon(name: string, source: SvgSource) {
    if (!Object.prototype.hasOwnProperty.call(source.icons, name)) {
        return null;
    }

    return source.icons[name];
}

/**
 * Return an object with the link attributes for the given icon.
 *
 * @param icon
 */
function getIconLink(icon: Icon): Link {
    if (!icon?.link) {
        return {};
    } else if (typeof icon.link === 'string') {
        return resolveLinkAttrs(icon.link);
    } else if (typeof icon.link !== 'object') {
        return {};
    }

    return resolveLinkAttrs(icon.link.url, icon.link?.title);
}

/**
 * Return the attributes of the icon link.
 *
 * @param url
 * @param title
 */
function resolveLinkAttrs(url: string, title?: string): Link {
    return {
        url: url,
        title: title || '',
    };
}

module.exports = {
    getIcon,
    getIconLink,
};
