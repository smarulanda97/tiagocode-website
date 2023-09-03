import { faker } from '@faker-js/faker';
import { isAbsoluteUrl } from '@/lib/url';

describe('Lib::Url::isAbsoluteUrl', () => {
    it('should return true if the given url is absolute', () => {
        expect(isAbsoluteUrl(faker.internet.url())).toBeTruthy();
    });
});
