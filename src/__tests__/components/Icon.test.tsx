import { jest } from '@jest/globals';

import Icon from '@/components/Icon/Icon';
import * as iconsHelper from '@/helpers/icons';
import { render, testingIcon } from '@/helpers/testing';

describe('components::Icon', () => {
    jest.spyOn(iconsHelper, 'getIcon').mockReturnValue(testingIcon);

    it('should render a svg icon if it exists in the icons source', () => {
        const { container, queryByRole, debug } = render(
            <Icon icon={{ name: 'testing-icon' }} />
        );

        expect(container.querySelector('span')).toBeInTheDocument();
        expect(container.querySelector('svg')).toBeInTheDocument();
        expect(iconsHelper.getIcon).toHaveBeenCalled();
        expect(iconsHelper.getIcon).toHaveBeenCalledWith({
            name: 'testing-icon',
        });
    });

    it("should render an empty span tag if the icon doesn't exists in the source", () => {
        jest.spyOn(iconsHelper, 'getIcon').mockReturnValue(undefined);
        const { container } = render(
            <Icon icon={{ name: 'testing-icon-100' }} />
        );

        expect(container.querySelector('span')).toBeEmptyDOMElement();
    });

    it('should be wrapped in an anchor tag if the `href` prop is passed', () => {
        const { getByRole } = render(
            <Icon icon={{ name: 'testing-icon', link: '/' }} />
        );

        const linkedWrapper = getByRole('link');
        expect(linkedWrapper).toBeInTheDocument();
        expect(linkedWrapper).toHaveAttribute('href', '/');
    });

    it('should forward additional props to the icon wrapper (except `href` and `icon`)', () => {
        const { container } = render(
            <Icon icon={{ name: 'testing-icon', link: '/' }} className={''} />
        );

        const wrapper = container.querySelector('span');
        expect(wrapper).toHaveAttribute('class');
        expect(wrapper).not.toHaveAttribute('href');
        expect(wrapper).not.toHaveAttribute('icon');
    });
});
