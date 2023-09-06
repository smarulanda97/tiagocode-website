import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';

import { testingIcon } from '@/helpers/testing';
import { Icon, IconsConfig, SvgSource } from '@/types';
import { getIcon, getIconLink } from '@/helpers/icons';
const actualImplementation = jest.requireActual('@/helpers/icons');

getIcon.mockImplementation((name: string, config: IconsConfig<SvgSource>) =>
    actualImplementation.getIcon(name, config)
);

describe('helpers::icons', () => {
    describe('function getIconLink()', () => {
        const icon: Icon = {
            name: 'testing-icon-1',
            link: {
                url: faker.internet.url(),
                title: faker.word.words(5),
            },
        };

        it('should destructure the link properties of an icon', () => {
            expect(getIconLink(icon)).toMatchObject({
                url: icon.link.url,
                title: icon.link.title,
            });
        });

        it('should return an empty object if the link property is missing', () => {
            icon.link = undefined;
            expect(getIconLink(icon)).toStrictEqual({});
        });

        it('should be possible to pass an string instead of an IconLink type', () => {
            icon.link = faker.internet.url();
            expect(getIconLink(icon)).toEqual({
                url: icon.link,
                title: '',
            });
        });
    });

    describe('function getIcon()', () => {
        const source: SvgSource = {
            icons: {
                'testing-icon-1': testingIcon,
                'testing-icon-2': testingIcon,
            },
        };

        it('should load an icon from the icons source by the give name', () => {
            expect(getIcon('testing-icon-1', { source })).toContain(
                testingIcon
            );
        });

        it("should return null if the icon doesn't exists", () => {
            expect(getIcon('testing-icon-100', { source })).toBeNull();
        });

        it('should accept an icon object as an argument', () => {
            const icon: Icon = {
                name: 'testing-icon-1',
                link: {},
            };
            expect(getIcon(icon, { source })).toContain(testingIcon);
        });
    });
});
