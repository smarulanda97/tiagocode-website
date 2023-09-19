import { UnorderedList } from '@/components';
import { create, render } from '@/tests/utils';
import { Mock, WorkExperienceList } from '@/types';

const workExperienceList = create<WorkExperienceList>(Mock.List);

describe('components::UnorderedList', () => {
    it('should render the list and its items', () => {
        const { getByTestId, getByRole, getAllByRole, getByText } = render(
            <UnorderedList {...workExperienceList} />
        );

        expect(getByRole('list')).toBeInTheDocument();
        expect(getAllByRole('listitem')).toHaveLength(workExperienceList.items.length);
    });

    it('should be able to render a custom list item', () => {
        const { getAllByRole } = render(
            <UnorderedList
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
