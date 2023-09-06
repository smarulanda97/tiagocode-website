import Link from 'next/link';

import { Icon as IconType } from '@/types';
import { getIcon, getIconLink } from '@/helpers/icons';

type Props = {
    icon: IconType;
};

const Icon: React.FC<Props> = (props) => {
    const { icon, ...otherProps } = props;
    const { url } = getIconLink(icon);

    return url ? (
        <Link href={url}>
            <IconSvg icon={icon} {...otherProps} />
        </Link>
    ) : (
        <IconSvg icon={icon} {...otherProps} />
    );
};

const IconSvg: React.FC = (props) => {
    const { icon, ...otherProps } = props;
    return (
        <span
            {...otherProps}
            dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
        />
    );
};

export default Icon;
