import { Icon } from '@/components';
import { BlockProps } from '@/types';
import * as css from './Block.styles';

function BlockComponent(props: BlockProps) {
    const { icon, title, subtitle, description, children, ...otherProps } =
        props;

    return (
        <div {...otherProps}>
            <div>
                <div className={css.header}>
                    {icon ? <Icon {...icon} className={css.icon} /> : null}
                    {title ? <h2 className={css.title}>{title}</h2> : null}
                </div>
                {subtitle ? <p>{subtitle}</p> : null}
                {description ? (
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                ) : null}
            </div>
            {children}
        </div>
    );
}

export default BlockComponent;
