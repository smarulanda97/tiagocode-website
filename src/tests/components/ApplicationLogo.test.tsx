import { Logo } from '@/components';
import { renderer } from '@/tests/utils';

describe('component::Logo', () => {
    it('should render the component correctly', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
