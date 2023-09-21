import { List } from '@/components';
import { ListProps, Mock } from '@/types';
import { create, render } from '@/tests/utils';

const workExperienceList = create<ListProps>(Mock.List);

describe('components::List', () => {
    it('should render the list and its items', () => {
        const { getByTestId, getByRole, getAllByRole, getByText } = render(
            <List {...workExperienceList} />
        );

        expect(getByRole('list')).toBeInTheDocument();
        expect(getAllByRole('listitem')).toHaveLength(workExperienceList.items.length);
    });

    it('should be able to render a custom list item', () => {
        const { getAllByRole } = render(
            <List
                items={workExperienceList.items}
                itemComponent={(props) => (
                    <li key={props.id}>
                        <h3>{props.company}</h3>
                    </li>
                )}
            />
        );

        expect(getAllByRole('heading', { level: 3 })).toHaveLength(workExperienceList.items.length);
    });
});
