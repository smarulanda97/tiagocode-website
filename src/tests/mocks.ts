import { faker } from '@faker-js/faker';
import {
    ContactDetail,
    Experience,
    Icon,
    IconsConfig,
    List,
    Block,
    SocialNetwork,
    Mock,
} from '@/types';

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
 * @param overrides
 */
export function create<T>(type: Mock, overrides: object = {}): T {
    let mock = factory(type);
    if (!(typeof mock === 'object')) return mock;

    return {
        ...mock,
        ...overrides,
    };
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
        case Mock.Block:
            return createBlock();
        case Mock.List:
            return createList();
        case Mock.Experience:
            return createExperience();
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
                'icon-1': create(Mock.Svg),
                'icon-2': create(Mock.Svg),
            },
        },
    };
}

function createSocialNetwork(): SocialNetwork {
    return {
        id: faker.string.uuid(),
        link: faker.internet.url(),
        title: faker.word.noun(),
        icon: create(Mock.Icon),
    };
}

function createContactDetail(): ContactDetail {
    return {
        id: faker.string.uuid(),
        link: faker.internet.url(),
        title: faker.word.noun(),
        description: faker.word.preposition(),
        icon: create(Mock.Icon),
    };
}

function createBlock(): Block {
    return {
        icon: create(Mock.Icon),
        title: faker.lorem.words(4),
        subtitle: faker.lorem.words(8),
        description: faker.lorem.paragraph(),
    };
}

function createList(): List<any> {
    return {
        items: createMany(Mock.Experience, Math.floor(Math.random() * 10)),
    };
}

function createExperience(): Experience {
    return {
        id: faker.string.uuid(),
        date: faker.date.anytime(),
        role: faker.person.jobTitle(),
        company: faker.company.name(),
        description: faker.lorem.text(),
    };
}
