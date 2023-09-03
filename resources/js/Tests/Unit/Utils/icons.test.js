import { describe, it, expect, beforeAll } from 'vitest';

import { resolveInlineIcon } from '@/Utils/icons';

describe('Utils::Icons', () => {
    let source = {};
    beforeAll(() => {
        source = {
            facebook: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>`,
        };
    });

    describe('Util::Icons::resolveInlineIcon', () => {
        it('should resolve the corresponding icon by the given icon name', () => {
            expect(resolveInlineIcon('facebook', { source })).toContain(
                `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>`
            );
        });

        it("should return null if the icon doesn't exists", () => {
            expect(resolveInlineIcon('non-existing-icon-name', { source })).toBeNull();
        });

        it('should throw an error if the parameter `icon` is not provided', () => {
            expect(() => {
                resolveInlineIcon('', { source });
            }).toThrowError();
        });
    });
});
