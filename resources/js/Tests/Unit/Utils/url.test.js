import { it, describe, expect } from 'vitest';
import { faker } from '@faker-js/faker';

import { isAbsoluteUrl } from '@/Utils/url';

describe('Utils::Url', () => {
    describe('Utils::Url::isAbsoluteUrl', () => {
        it('should return true if the given url is absolute', () => {
            expect(isAbsoluteUrl(faker.internet.url())).toBeTruthy();
        });
    });
});
