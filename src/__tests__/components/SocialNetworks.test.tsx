import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';

import { Icon as IconType } from '@/types';
import * as iconsHelper from '@/helpers/icons';
import { render, testingIcon } from '@/helpers/testing';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks';

const elements: IconType[] = [
    {
        id: faker.string.uuid(),
        name: 'testing-icon-1',
        link: faker.internet.url(),
        color: '#000',
    },
    {
        id: faker.string.uuid(),
        name: 'testing-icon-1',
        link: faker.internet.url(),
        color: '#000',
    },
    {
        id: faker.string.uuid(),
        name: 'testing-icon-1',
        link: faker.internet.url(),
        color: '#000',
    },
];

describe('components::SocialNetworks', () => {
    jest.spyOn(iconsHelper, 'getIcon').mockReturnValue(testingIcon);

    it('should render the component correctly', () => {
        const { getAllByRole, container, debug } = render(
            <SocialNetworks elements={elements} />
        );

        const wrappers = getAllByRole('link');
        expect(wrappers).toHaveLength(elements.length);
        expect(container.querySelectorAll('svg')).toHaveLength(elements.length);
    });

    it('should forward the color classname to the icon', () => {
        const { getByRole, container } = render(
            <SocialNetworks elements={[elements[0]]} />
        );

        expect(getByRole('link')).toBeInTheDocument(1);
        expect(
            container.getElementsByClassName(`text-[${elements[0].color}]`)
        ).toHaveLength(1);
    });
});
