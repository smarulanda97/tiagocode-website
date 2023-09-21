import Link from 'next/link';

import { Icon } from '@/components';
import { ContactDetailProps } from '@/types';

function ContactDetailComponent(props: ContactDetailProps) {
    const { id, title, description, icon, link } = props;

    return (
        <div key={id} className='flex border-b border-[#E3E3E3] py-2.5'>
            <Icon
                {...icon}
                className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#E93B81] shadow-md'
            />
            <div className='5 ml-2 text-left'>
                <p className='text-xs text-[#44566C]'>{title}</p>
                <p className='break-all'>
                    {link && (
                        <Link href={link} className='transition duration-300 hover:text-[#FA5252]'>
                            {description}
                        </Link>
                    )}
                    {!link && description}
                </p>
            </div>
        </div>
    );
}

export default ContactDetailComponent;
