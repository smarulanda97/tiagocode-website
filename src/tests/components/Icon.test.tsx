import { beforeEach, jest } from '@jest/globals';

import { Mock } from '@/types';
import { Icon } from '@/components';
import * as helpers from '@/helpers';
import { create, render } from '@/tests/utils';

beforeEach(() => {
    jest.spyOn(helpers, 'getIcon').mockReturnValue(create<string>(Mock.Svg));
});

describe('components::Icon', () => {
    it('should render a svg icon if it exists in the source', () => {
        const { getByTestId } = render(<Icon name={'icon-1'} />);
        expect(getByTestId('icon')).toBeInTheDocument();
        expect(helpers.getIcon).toHaveBeenCalledWith('icon-1');
    });

    it("should render an empty span tag if the icon doesn't exists in the source", () => {
        jest.spyOn(helpers, 'getIcon').mockReturnValue(null);
        const { getByTestId } = render(<Icon name={'testing-icon-100'} />);
        expect(getByTestId('icon')).toBeEmptyDOMElement();
    });

    it('should forward additional HTML properties to the span tag', () => {
        const { getByTestId, debug } = render(<Icon name={'icon-1'} className={'class-1'} />);
        expect(getByTestId('icon')).toBeInTheDocument();
        expect(getByTestId('icon')).toHaveAttribute('class', 'class-1');
    });

    it.skip('should have the classname for the color black (#000) by default', () => {
        const { container } = render(<Icon name={'icon-1'} />);
        expect(container.querySelector('span')).toHaveClass('text-[#000]');
    });
});
