import { describe, expect, it, vi } from 'vitest';

import Icon from '@/Components/Icon/Icon';
import { resolveInlineIcon } from '@/Utils/icons';
import { render, inlineDummySvg } from '@/Utils/testing';

vi.mock('@/Utils/icons', async importOriginal => {
    const module = await importOriginal();

    return {
        ...module,
        resolveInlineIcon: vi.fn(),
    };
});

describe('Components::Icon', () => {
    it('should render an icon in svg format by the give prop `name`', () => {
        vi.mocked(resolveInlineIcon).mockReturnValue(inlineDummySvg());

        const { container, queryByRole } = render(<Icon icon={'facebook'} />);
        expect(container.querySelector('span')).toBeInTheDocument();
        expect(container.querySelector('svg')).toBeInTheDocument();
        expect(queryByRole('link')).not.toBeInTheDocument();

        expect(vi.mocked(resolveInlineIcon)).toHaveBeenCalledOnce();
        expect(vi.mocked(resolveInlineIcon)).toHaveBeenCalledWith('facebook');
    });

    it('should render empty span tag if the icon is not found', () => {
        vi.mocked(resolveInlineIcon).mockReturnValue(null);
        const { container } = render(<Icon icon={'non-existing-icon'} />);
        expect(container.querySelector('span')).toBeEmptyDOMElement();
    });

    it('should be wrapped in an anchor tag if the prop `href` is provided', () => {
        vi.mocked(resolveInlineIcon).mockReturnValue(inlineDummySvg());

        const { getByRole } = render(<Icon icon={'facebook'} href={'/'} />);
        expect(getByRole('link')).toBeInTheDocument();
        expect(getByRole('link')).toHaveAttribute('href', '/');
    });

    it('should forward additional props to span tag (except `href` and `icon`)', () => {
        vi.mocked(resolveInlineIcon).mockReturnValue(inlineDummySvg());

        const { container } = render(<Icon icon={'my-icon'} href={'/'} className={''} />);
        const span = container.querySelector('span');
        expect(span).toHaveAttribute('class');
        expect(span).not.toHaveAttribute('href');
        expect(span).not.toHaveAttribute('icon');
    });
});
