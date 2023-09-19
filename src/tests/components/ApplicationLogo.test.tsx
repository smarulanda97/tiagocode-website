import { Logo } from '@/components';
import { renderer } from '@/tests/utils';

describe('components::Logo', () => {
    it('should render the component correctly', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
