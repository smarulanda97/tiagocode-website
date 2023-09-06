import { Link } from '@/types/general';

/**
 * Define the
 */
export type IconsConfig = {
    source: SvgSource;
};

/**
 * Define the basic structure of the object to store the icons in memory.
 */
export type SvgSource = {
    icons: {
        [string]: string;
    };
};

/**
 *
 */
export type IconLink = string | Link;

/**
 *
 */
export interface Icon extends Link {
    id?: string;
    name: string;
    color?: string;
    link?: IconLink;
}
