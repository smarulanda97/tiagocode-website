import { ElementType } from 'react';

import { PolymorphicProps, CardProps } from '@/types';
import { Styles } from './Card.styles';

function CardComponent<C extends ElementType = 'li'>(
    props: PolymorphicProps<C, CardProps>
) {
    const { as, date, title, subtitle, summary, type = 'simple' } = props;
    const styles = Styles({ type: 'simple' });
    const Component = as || 'li';

    return (
        <Component className={styles.container()}>
            {date && <span className={styles.date()}>{date}</span>}
            {title && <h3 className={styles.title()}>{title}</h3>}
            {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}
            {summary && <p className={styles.summary()}>{summary}</p>}
        </Component>
    );
}

export default CardComponent;
