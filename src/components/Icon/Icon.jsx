import { memo } from 'react';
import Link from 'next/link';
import { resolveInlineIcon } from '@/lib/icons';

function Icon(props) {
    const { icon, href, ...forwardedProps } = props;

    if (!href) {
        return <span {...forwardedProps} dangerouslySetInnerHTML={{ __html: resolveInlineIcon(icon) }} />;
    }

    return (
        <Link href={href}>
            <span {...forwardedProps} dangerouslySetInnerHTML={{ __html: resolveInlineIcon(icon) }} />
        </Link>
    );
}

export default memo(memo);
