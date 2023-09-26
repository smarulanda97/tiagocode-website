import { ElementType } from 'react';

import { PolymorphicProps } from '@/types';
import { Styles } from '@/components/Button/Button.styles';

function ButtonComponent<As extends ElementType = 'button'>(
    props: PolymorphicProps<As, {}>
) {
    const { as, ...otherProps } = props;
    const styles = Styles({ type: 'download' });
    const Component = as || 'button';

    return <Component {...otherProps} className={styles} />;
}

export default ButtonComponent;
