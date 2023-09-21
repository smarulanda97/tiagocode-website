import { ElementType } from 'react';

import { PolymorphicProps, CardProps } from '@/types';
import * as css from './Card.styles';

function CardComponent<C extends ElementType = 'li'>(
    props: PolymorphicProps<C, CardProps>
) {
    const { as, date, title, subtitle, summary } = props;
    const Component = as || 'li';

    return (
        <Component className={css.card}>
            {date && <span className={css.date}>{date}</span>}
            {title && <h3 className={css.title}>{title}</h3>}
            {subtitle && <p className={css.subtitle}>{subtitle}</p>}
            {summary && <p className={css.summary}>{summary}</p>}
        </Component>
    );
}

export default CardComponent;
