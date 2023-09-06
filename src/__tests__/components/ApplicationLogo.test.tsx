import { renderer } from '@/helpers/testing';
import Logo from '@/components/Logo/Logo';

describe('component::Logo', () => {
    it('should render the component correctly', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
