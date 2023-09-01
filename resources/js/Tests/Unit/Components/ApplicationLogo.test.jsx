import { describe, it, expect } from 'vitest';
import { render } from '@/Utils/tests.utils.js';
import ApplicationLogo from '@/Components/ApplicationLogo.jsx';

describe('Component::ApplicationLogo', () => {
    it('It renders correctly', () => {
        const { getByRole } = render(<ApplicationLogo />);
        expect(getByRole('graphics-document')).toBeInTheDocument();
    });
});
