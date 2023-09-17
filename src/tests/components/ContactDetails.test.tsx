import { ContactDetails } from '@/components';
import { ContactDetail, Mock } from '@/types';
import { createMany, render } from '@/tests/utils';

const items = createMany<ContactDetail>(Mock.ContactDetail, 4);

describe('components::ContactDetails', () => {
    it.each(items)('should render correctly', ({ title, description }) => {
        const { getByText, getByRole, debug } = render(<ContactDetails items={items} />);
        expect(getByText(title)).toBeInTheDocument();
        expect(getByRole('link', { name: description })).toBeInTheDocument();
    });
});
