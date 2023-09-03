import { describe, it, expect, beforeAll } from 'vitest';
import { faker } from '@faker-js/faker';

import { render } from '@/Utils/testing.js';
import Heading from '@/Components/Heading/Heading';

beforeAll(() => {
    console.error = () => null;
    console.warn = () => null;
});

describe('Component::Heading', () => {
    it('should render h1 by default if the prop `level` is not passed', () => {
        const { getByRole } = render(<Heading />);
        expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it.each([
        ['h1', 1],
        ['h2', 2],
        ['h3', 3],
        ['h4', 4],
        ['h5', 5],
        ['h6', 6],
    ])('should render a %s tag if the prop `type=h%s` is passed', (type, expected) => {
        const { getByRole } = render(<Heading type={type} />);
        expect(getByRole('heading', { level: expected })).toBeInTheDocument();
    });

    it('should render an empty component if the prop `type` with invalid value is passed', () => {
        const { container } = render(<Heading type={'h8'} />);
        expect(container.querySelector('span')).toBeEmptyDOMElement();
    });

    it('should wrap the children prop', () => {
        const content = faker.lorem.paragraph();
        const { getByRole } = render(<Heading>{content}</Heading>);
        expect(getByRole('heading')).toHaveTextContent(content);
    });

    it('should forward additional props to heading tag', () => {
        const { getByRole } = render(<Heading className={'style-1'} id={'heading-1'}></Heading>);
        const heading = getByRole('heading', { level: 1 });

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute('id', 'heading-1');
        expect(heading).toHaveAttribute('class', 'style-1');
    });
});
