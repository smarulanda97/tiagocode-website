import { afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

/**
 * Returns an inline SVG to use as a mock
 *
 * @returns {string}
 */
export function inlineDummySvg() {
    return `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>`;
}

function customRender(ui, options = {}) {
    return render(ui, {
        wrapper: ({ children }) => children,
        ...options,
    });
}
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
