import { render } from '@/lib/testing';
import ApplicationLogo from '@/components/ApplicationLogo/ApplicationLogo';

describe('Component::ApplicationLogo', () => {
    it('It renders an svg image', () => {
        const { container } = render(<ApplicationLogo />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
