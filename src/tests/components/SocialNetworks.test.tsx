import { jest } from '@jest/globals';

import * as helpers from '@/helpers/icons';
import { SocialNetworks } from '@/components';
import { Mock, SocialNetwork } from '@/types';
import { render, create, createMany } from '@/tests/utils';

const items = createMany<SocialNetwork>(Mock.SocialNetwork, 3);

describe('components::SocialNetworks', () => {
    jest.spyOn(helpers, 'getIcon').mockReturnValue(create(Mock.Svg));

    it('should render the component correctly', () => {
        const { getAllByRole, container } = render(<SocialNetworks items={items} />);
        expect(getAllByRole('link')).toHaveLength(items.length);
        expect(container.querySelectorAll('svg')).toHaveLength(items.length);
    });
});
