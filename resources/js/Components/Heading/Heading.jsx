import React from 'react';
import PropTypes from 'prop-types';

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
export default function Heading(props) {
    const { type = 'h1', children, ...forwardedProps } = props;

    if (!headingTypes.includes(type)) {
        return <span />;
    }

    return React.createElement(type, forwardedProps, children);
}

Heading.propTypes = {
    type: PropTypes.oneOf(headingTypes),
};
