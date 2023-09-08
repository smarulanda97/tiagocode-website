import { faker } from '@faker-js/faker';

import { render } from '@/helpers/testing';
import ContactDetails from '@/components/ContactDetails/ContactDetails';

const elements: ContactDetailsType[] = [
    {
        id: faker.string.uuid(),
        title: 'phone',
        description: faker.phone.number(),
        icon: {
            name: 'phone',
        },
    },
    {
        id: faker.string.uuid(),
        title: 'phone',
        description: faker.phone.number(),
        icon: {
            name: 'phone',
        },
    },
];

describe('components::ContactDetails', () => {
    it.skip('should render correctly', () => {
        const { getByText, getByRole } = render(<ContactDetails />);

        expect(getByText(elements[0].title)).toBeInTheDocument();
        expect(getByText(elements[0].description)).toBeInTheDocument();
        expect(getByRole('link')).toBeInTheDocument();
    });
});
