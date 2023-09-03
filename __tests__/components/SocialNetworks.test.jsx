import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { faker } from '@faker-js/faker';

import { resolveInlineIcon } from '@/Utils/icons';
import { render, inlineDummySvg } from '@/Utils/testing';
import SocialNetworks from '@/Components/SocialNetworks/SocialNetworks';

vi.mock('@/Utils/icons', async importOriginal => {
    const module = await importOriginal();
    return {
        ...module,
        resolveInlineIcon: vi.fn(),
    };
});

const socialNetwork = () => ({
    id: faker.string.uuid(),
    color: '#fff',
    icon: 'dummy',
    url: 'https://dummy.com/',
});

beforeEach(() => vi.mocked(resolveInlineIcon).mockReturnValue(inlineDummySvg()));

afterEach(() => vi.clearAllMocks());

describe('Components::SocialNetworks', () => {
    it('Should render correctly the links and svg icons', () => {
        const elements = [socialNetwork(), socialNetwork(), socialNetwork()];
        const { getAllByRole, container } = render(<SocialNetworks elements={elements} />);
        const links = getAllByRole('link');

        expect(links).toHaveLength(3);
        expect(links.map(link => link.getAttribute('href'))).toEqual(elements.map(element => element.url));
        expect(container.querySelectorAll('svg')).toHaveLength(3);
        expect(true).toBeTruthy();
    });

    it('should forward the color classname to the icon', () => {
        const network = socialNetwork();
        const { getByRole, container } = render(<SocialNetworks elements={[network]} />);

        expect(getByRole('link')).toBeInTheDocument(1);
        expect(container.getElementsByClassName(`text-[${network.color}]`)).toHaveLength(1);
    });
});
