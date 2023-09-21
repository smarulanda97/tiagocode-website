import { ContactDetail, List } from '@/components';
import { createMany, render } from '@/tests/utils';
import { ContactDetailProps, Mock } from '@/types';

const items = createMany<ContactDetailProps>(Mock.ContactDetail, 4);

describe('components::ContactDetail', () => {
    it.each(items)('should render correctly', ({ title, description }) => {
        const { getByText, getByRole, debug } = render(
            <List items={items} itemComponent={ContactDetail} />
        );
        expect(getByText(title)).toBeInTheDocument();
        expect(getByRole('link', { name: description })).toBeInTheDocument();
    });
});
