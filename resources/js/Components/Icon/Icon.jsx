import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';

import { resolveInlineIcon } from '@/Utils/icons.js';
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

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default React.memo(Icon);
