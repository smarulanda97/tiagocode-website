import { faker } from '@faker-js/faker';

import { isAbsoluteUrl } from '@/helpers/url';

describe('helpers::url', () => {
    describe('function isAbsoluteUrl()', () => {
        it('should return true if the given url is absolute', () => {
            expect(isAbsoluteUrl(faker.internet.url())).toBeTruthy();
        });
    });
});
