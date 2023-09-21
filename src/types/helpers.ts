/*
|--------------------------------------------------------------------------
| Types -> Helper: icons
|--------------------------------------------------------------------------
|
| The custom types related to all the helpers functions .
|
*/

import { jest } from '@jest/globals';

export type IconsConfig = {
    source: SvgSource;
};

export type SvgSource = {
    icons: {
        [key: string]: string;
    };
};

/*
|--------------------------------------------------------------------------
| Types -> Helper: mocks
|--------------------------------------------------------------------------
|
| The custom types related to the mocked data for testing.
|
*/

export enum Mock {
    Svg,
    Icon,
    IconsConfig,
    SocialNetwork,
    ContactDetail,
    Block,
    List,
    Experience,
    Card,
}

export type getIconMock = jest.Mock<(name: string, config: IconsConfig) => string | null>;
