import { Block } from '@/types';
import { Icon } from '@/components';

function BlockComponent(props: Block) {
    const { icon, title, subtitle, description, children, ...otherProps } = props;

    return (
        <div {...otherProps}>
            <div>
                <div className={'mb-4 flex items-center space-x-2'}>
                    {icon ? <Icon {...icon} className='text-apple block text-3xl' /> : null}
                    {title ? <h2 className='text-2xl font-medium'>{title}</h2> : null}
                </div>
                {subtitle ? <p>{subtitle}</p> : null}
                {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : null}
            </div>
            {children}
        </div>
    );
}

export default BlockComponent;
