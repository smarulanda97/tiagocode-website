import Link from 'next/link';

import { Icon } from '@/components';
import { SocialNetworkProps } from '@/types';
import { Styles } from './SocialNetwork.styles';

function SocialNetworkComponent(props: SocialNetworkProps) {
    const styles = Styles();
    const { id, icon, link, title } = props;

    return (
        <Link key={id} href={link}>
            <Icon {...icon} className={styles.icon()} />
        </Link>
    );
}

export default SocialNetworkComponent;
