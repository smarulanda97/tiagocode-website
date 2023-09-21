import { jest } from '@jest/globals';

import * as helpers from '@/helpers/icons';
import { Mock, SocialNetworkProps } from '@/types';
import { SocialNetwork, List } from '@/components';
import { render, create, createMany } from '@/tests/utils';

const items = createMany<SocialNetworkProps>(Mock.SocialNetwork, 3);

describe('components::SocialNetworks', () => {
    jest.spyOn(helpers, 'getIcon').mockReturnValue(create(Mock.Svg));

    it('should render the component correctly', () => {
        const { getAllByRole, container } = render(
            <List items={items} itemComponent={SocialNetwork} />
        );

        expect(getAllByRole('link')).toHaveLength(items.length);
        expect(container.querySelectorAll('svg')).toHaveLength(items.length);
    });
});
