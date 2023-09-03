import { createElement } from 'react';

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default function Heading(props) {
    const { type = 'h1', children, ...forwardedProps } = props;

    if (!headingTypes.includes(type)) {
        return <span />;
    }

    return createElement(type, forwardedProps, children);
}
