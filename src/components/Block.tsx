import { Icon } from '@/components';
import { BlockProps } from '@/types';

function BlockComponent(props: BlockProps) {
    const { icon, title, subtitle, description, children, ...otherProps } = props;

    return (
        <div {...otherProps}>
            <div>
                <div className={'mb-4 flex items-center space-x-2'}>
                    {icon && <Icon {...icon} className='text-apple block text-3xl' />}
                    {title && <h2 className='text-2xl font-medium'>{title}</h2>}
                </div>
                {subtitle && <p>{subtitle}</p>}
                {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
            </div>
            {children}
        </div>
    );
}

export default BlockComponent;
