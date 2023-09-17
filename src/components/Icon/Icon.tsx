import { Icon } from '@/types';
import { getIcon } from '@/helpers';

function IconComponent(props: Icon) {
    const { name, color = '#000', ...otherProps } = props;

    return (
        <span
            {...otherProps}
            data-testid={'icon'}
            dangerouslySetInnerHTML={{ __html: getIcon(name) ?? '' }}
        />
    );
}

export default IconComponent;
