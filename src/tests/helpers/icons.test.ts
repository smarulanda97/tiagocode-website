import { beforeEach, jest } from '@jest/globals';

import { getIcon } from '@/helpers';
import { create } from '@/tests/utils';
import { getIconMock, IconsConfig, Mock } from '@/types';
import { facebook as facebookIcon } from '@/assets/icons';

const config = create<IconsConfig>(Mock.IconsConfig);

beforeEach(() => {
    (getIcon as getIconMock).mockImplementation((name, config) =>
        // @ts-ignore
        jest.requireActual('@/helpers/icons').getIcon(name, config)
    );
});

describe('helpers::icons -> function getIcon()', () => {
    it('should load an icon from the icons source by the give name', () => {
        expect(getIcon('icon-1', config)).toContain(create(Mock.Svg));
        expect(getIcon('icon-2', config)).toContain(create(Mock.Svg));
    });

    it("should return null if the icon doesn't exists", () => {
        expect(getIcon('icon-100', config)).toBeNull();
    });

    it('should use the default svg icons source from @/assets/icons/index.ts', () => {
        expect(getIcon('facebook')).toContain(facebookIcon);
    });
});
