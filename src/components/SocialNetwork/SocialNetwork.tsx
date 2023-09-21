import Link from 'next/link';

import { Icon } from '@/components';
import { SocialNetworkProps } from '@/types';
import * as css from './SocialNetwork.styles';

function SocialNetworkComponent(props: SocialNetworkProps) {
    const { id, icon, link, title } = props;

    return (
        <Link key={id} href={link}>
            <Icon {...icon} className={css.icon} />
        </Link>
    );
}

export default SocialNetworkComponent;
