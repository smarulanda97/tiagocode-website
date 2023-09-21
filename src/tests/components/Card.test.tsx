import { Card } from '@/components';
import { create, render } from '@/tests/utils';
import { CardProps, Mock } from '@/types';

const content = create<CardProps>(Mock.Card);

describe('components::Card', () => {
    it.todo('should render the full text in a modal');

    it('should render the date, title, subtitle and summary', () => {
        const { getByText } = render(<Card {...content} />);

        expect(getByText(content.title)).toBeInTheDocument();
        expect(getByText(content.subtitle ?? '')).toBeInTheDocument();
        expect(getByText(content.date ?? '')).toBeInTheDocument();
    });
});
