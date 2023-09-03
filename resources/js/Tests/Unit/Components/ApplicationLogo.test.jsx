import { describe, it, expect } from 'vitest';
import { render } from '@/Utils/testing';
import ApplicationLogo from '@/Components/ApplicationLogo/ApplicationLogo';

describe('Component::ApplicationLogo', () => {
    it('It renders an svg image', () => {
        const { container } = render(<ApplicationLogo />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
