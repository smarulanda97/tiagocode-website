import Link from 'next/link';

import { Icon } from '@/components';
import { ContactDetailProps } from '@/types';
import * as css from './ContactDetail.styles';

function ContactDetailComponent(props: ContactDetailProps) {
    const { id, title, description, icon, link } = props;

    return (
        <div key={id} className={css.container}>
            <Icon {...icon} className={css.icon} />
            <div className={css.content}>
                <p className={css.title}>{title}</p>
                <p>
                    {link ? (
                        <Link href={link} className={css.link}>
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
