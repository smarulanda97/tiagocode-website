import Link from 'next/link';

import { Icon } from '@/components';
import { ContactDetails } from '@/types';

function ContactDetailsComponent(props: ContactDetails) {
    const { items = [], ...otherProps } = props;

    return (
        <ul {...otherProps}>
            {items.map(({ id, title, description, icon, link }) => (
                <li key={id} className='flex border-b border-[#E3E3E3] py-2.5'>
                    <Icon
                        {...icon}
                        className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#E93B81] shadow-md'
                    />
                    <div className='5 ml-2 text-left'>
                        <p className='text-xs text-[#44566C]'>{title}</p>
                        <p className='break-all'>
                            {!link ? (
                                description
                            ) : (
                                <Link
                                    href={link}
                                    className='transition duration-300 hover:text-[#FA5252]'
                                >
                                    {description}
                                </Link>
                            )}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ContactDetailsComponent;
