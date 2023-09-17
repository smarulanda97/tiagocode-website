import { faker } from '@faker-js/faker';
import { Mock, ContactDetail, Icon, IconsConfig, SocialNetwork } from '@/types';

/*
|--------------------------------------------------------------------------
| Helper -> mocks
|--------------------------------------------------------------------------
|
| Helpers functions related to generating mocks functionality (these
| functions should be only used for testing purposes):
|
| function create() ->
|   Returns an object with fake properties.
|   Those objects should be used only for testing purpose,
|   in those scenarios when a mocked data might be needed.
|
| function createMany() ->
|   Returns a list of objects with fake properties (by default 2 objects).
|   Those objects should be used only for testing purpose,
|   in those scenarios when a mocked data might be needed.
|
*/

/**
 * @param type
 */
export function create<T>(type: Mock): T {
    return factory(type) as T;
}

/**
 * @param type
 * @param quantity
 */
export function createMany<T>(type: Mock, quantity: number = 2): Array<T> {
    const elements: Array<T> = [];
    for (let i: number = 0; i < quantity; i++) elements.push(factory(type));

    return elements;
}

/**
 * @param type
 */
function factory(type: Mock): any {
    switch (type) {
        case Mock.Svg:
            return createSvg();
        case Mock.Icon:
            return createIcon();
        case Mock.IconsConfig:
            return createIconsConfig();
        case Mock.SocialNetwork:
            return createSocialNetwork();
        case Mock.ContactDetail:
            return createContactDetail();
        default:
            return {};
    }
}

function createSvg(): string {
    return decodeURIComponent(faker.image.dataUri());
}

function createIcon(): Icon {
    return {
        name: faker.word.noun(),
        color: faker.color.rgb(),
    };
}

function createIconsConfig(): IconsConfig {
    return {
        source: {
            icons: {
                'icon-1': createSvg(),
                'icon-2': createSvg(),
            },
        },
    };
}

function createSocialNetwork(): SocialNetwork {
    return {
        id: faker.string.uuid(),
        link: faker.internet.url(),
        title: faker.word.noun(),
        icon: createIcon(),
    };
}

function createContactDetail(): ContactDetail {
    return {
        id: faker.string.uuid(),
        link: faker.internet.url(),
        title: faker.word.noun(),
        description: faker.word.preposition(),
        icon: createIcon(),
    };
}
