import Link from 'next/link';

import { Icon } from '@/components';
import { SocialNetworkProps } from '@/types';

function SocialNetworkComponent(props: SocialNetworkProps) {
    const { id, icon, link, title } = props;

    return (
        <Link key={id} href={link}>
            <Icon
                {...icon}
                className={`bg-gray-nurse-200 flex h-10 w-10 items-center justify-center rounded-lg shadow-md`}
            />
        </Link>
    );
}

export default SocialNetworkComponent;
