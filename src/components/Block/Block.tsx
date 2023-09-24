import { Icon } from '@/components';
import { BlockProps } from '@/types';
import { Styles } from './Block.styles';

function BlockComponent(props: BlockProps) {
    const styles = Styles();
    const { icon, title, subtitle, description, children, ...otherProps } =
        props;

    return (
        <div {...otherProps}>
            <div>
                <div className={styles.header()}>
                    {icon && <Icon {...icon} className={styles.icon()} />}
                    {title && <h2 className={styles.title()}>{title}</h2>}
                </div>
                {subtitle && <p>{subtitle}</p>}
                {description && (
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                )}
            </div>
            {children}
        </div>
    );
}

export default BlockComponent;
