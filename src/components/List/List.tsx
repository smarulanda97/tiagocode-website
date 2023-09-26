import React, { ElementType } from 'react';
import { PolymorphicProps, ListProps, ListItemProps } from '@/types';

function ListItemComponent(props: ListItemProps) {
    return <li key={props.id}></li>;
}

function ListComponent<As extends ElementType = 'ul'>(
    props: PolymorphicProps<As, ListProps>
) {
    const {
        as,
        items = [],
        itemComponent = ListItemComponent,
        ...otherProps
    } = props;
    const Component = as || 'ul';

    return (
        <Component {...otherProps}>
            {items.length
                ? items.map((componentProps) => itemComponent(componentProps))
                : null}
        </Component>
    );
}

export default ListComponent;
