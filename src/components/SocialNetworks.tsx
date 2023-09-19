import Link from 'next/link';

import { Icon } from '@/components';
import { SocialNetworks } from '@/types';

function SocialNetworksComponent(props: SocialNetworks) {
    const { items = [], ...otherProps } = props;

    return (
        <div {...otherProps}>
            {items.map(({ id, link, icon }) => (
                <Link key={id} href={link}>
                    <Icon
                        {...icon}
                        className={`bg-gray-nurse-200 flex h-10 w-10 items-center justify-center rounded-lg shadow-md`}
                    />
                </Link>
            ))}
        </div>
    );
}

export default SocialNetworksComponent;
