import Link from 'next/link';

import { Icon } from '@/components';
import { ContactDetailProps } from '@/types';
import { Styles } from './ContactDetail.styles';

function ContactDetailComponent(props: ContactDetailProps) {
    const styles = Styles();
    const { id, title, description, icon, link } = props;

    return (
        <div key={id} className={styles.container()}>
            <div>
                <Icon {...icon} className={styles.icon()} />
            </div>
            <div className={styles.content()}>
                <p className={styles.title()}>{title}</p>
                <p className={styles.description()}>
                    {link ? (
                        <Link href={link} className={styles.link()}>
                            {description}
                        </Link>
                    ) : null}
                    {!link ? description : null}
                </p>
            </div>
        </div>
    );
}

export default ContactDetailComponent;
