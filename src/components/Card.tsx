import { ElementType } from 'react';
import { PolymorphicProps, CardProps } from '@/types';

function CardComponent<C extends ElementType = 'li'>(props: PolymorphicProps<C, CardProps>) {
    const { as, date, title, subtitle, summary } = props;
    const Component = as || 'li';

    return (
        <Component className='bg-bay-leaf-200 mb-6 space-y-2 rounded-lg px-5 py-4'>
            {date && <span className='text-gray-lite block text-sm'>{date}</span>}
            {title && <h3 className='text-xl'>{title}</h3>}
            {subtitle && <p className='text-base'>{subtitle}</p>}
            {summary && <p className='text-basse'>{summary}</p>}
        </Component>
    );
}

export default CardComponent;
