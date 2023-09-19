import { Block } from '@/components';
import { create, render } from '@/tests/utils';
import { Block as BlockContent, Mock } from '@/types';

const content: BlockContent = create(Mock.Block);

describe('components::Block', () => {
    it('should render the icon, title, subtitle, and description correctly', () => {
        const { getByTestId, getByRole, getByText } = render(<Block {...content} />);

        expect(getByTestId('icon')).toBeInTheDocument();
        expect(getByRole('heading')).toBeInTheDocument();
        expect(getByRole('heading')).toHaveTextContent(content.title);
        expect(getByText(content.subtitle)).toBeInTheDocument();
        expect(getByText(content.description)).toBeInTheDocument();
    });

    it('should render children component/content', () => {
        const { getByText } = render(
            <Block {...content}>
                <p>Hello world!</p>
            </Block>
        );
        expect(getByText('Hello world!')).toBeInTheDocument();
    });

    test('icon, subtitle, and description might be optional', () => {
        const content: BlockContent = create(Mock.Block, {
            icon: undefined,
            subtitle: undefined,
            description: undefined,
        });
        const { queryByTestId, queryByText } = render(<Block {...content} />);

        expect(queryByTestId('icon')).not.toBeInTheDocument();
    });
});
