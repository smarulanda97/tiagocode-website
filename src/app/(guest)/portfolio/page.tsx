import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks';

export default function Home() {
    return (
        <div className='container grid grid-cols-12 justify-between pb-16 md:gap-10 lg:mt-[220px]'>
            <section className='col-span-12 lg:col-span-4'>
                <div className='bg-gray-nurse relative mx-auto mb-6 mt-[180px] w-full px-6 text-center md:mt-[180px] md:mt-[220px] lg:mb-0 lg:mt-0 lg:rounded-2xl'>
                    <Image
                        src='/codesprint.jpg'
                        alt=''
                        quality={100}
                        width={240}
                        height={240}
                        className='absolute left-[50%] mx-auto -mt-[140px] h-[240px] w-[240px] -translate-x-[50%] transform rounded-[20px] drop-shadow-xl'
                    />
                    <div className='pb-8 pt-[100px]'>
                        <h1 className='mb-1 mt-6 text-2xl font-semibold'>
                            Santiago Marulanda
                        </h1>
                        <h3 className='mb-4 inline-block rounded-lg px-5 py-1.5'>
                            Backend Developer PHP
                        </h3>
                        <p className='mb-4 text-left text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Alias animi asperiores, cum cupiditate earum
                            eveniet explicabo, in inventore labore laudantium
                            molestiae neque optio praesentium quis quo quod
                            recusandae! Harum, nesciunt.
                        </p>
                        <SocialNetworks
                            className='flex justify-center space-x-3'
                            elements={[
                                {
                                    id: '1',
                                    name: 'linkedin',
                                    link: 'https://google.com',
                                    color: '#0072b1',
                                },
                                {
                                    id: '2',
                                    name: 'facebook',
                                    link: 'https://google.com',
                                    color: '#1773EA',
                                },
                                {
                                    id: '3',
                                    name: 'website',
                                    link: 'https://google.com',
                                    color: '#e14a84',
                                },
                            ]}
                        />
                        <ul className='bg-gray-nurse-200 mt-7 rounded-2xl p-7 dark:bg-[#1D1D1D]'>
                            <li className='flex border-b border-[#E3E3E3] py-2.5'>
                                <Icon
                                    icon={'phone'}
                                    className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#E93B81] shadow-md'
                                />
                                <div className='5 ml-2 text-left'>
                                    <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                                        Phone
                                    </p>
                                    <p className='break-all'>
                                        <a
                                            className='transition duration-300 hover:text-[#FA5252]'
                                            href='tel:+1234567890'
                                        >
                                            +356 990 43478
                                        </a>
                                    </p>
                                </div>
                            </li>
                            <li className='flex border-b border-[#E3E3E3] py-2.5'>
                                <Icon
                                    icon={'email'}
                                    className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#FD7590] shadow-md'
                                />
                                <div className='5 ml-2 text-left'>
                                    <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                                        Email
                                    </p>
                                    <p className='break-all'>
                                        <a
                                            className='transition duration-300 hover:text-[#FA5252]'
                                            href='tel:+1234567890'
                                        >
                                            santiagomm1997@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </li>
                            <li className='flex border-b border-[#E3E3E3] py-2.5'>
                                <Icon
                                    icon={'location'}
                                    className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#6AB5B9] shadow-md'
                                />
                                <div className='5 ml-2 text-left'>
                                    <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                                        Location
                                    </p>
                                    <p className='break-all'>
                                        <a
                                            className='transition duration-300 hover:text-[#FA5252]'
                                            href='tel:+1234567890'
                                        >
                                            Malta
                                        </a>
                                    </p>
                                </div>
                            </li>
                            <li className='flex border-b border-[#E3E3E3] py-2.5'>
                                <Icon
                                    icon={'location'}
                                    className='bg-gray-nurse flex h-10 w-10 items-center justify-center rounded-lg text-[#6AB5B9] shadow-md'
                                />
                                <div className='5 ml-2 text-left'>
                                    <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                                        Nationality
                                    </p>
                                    <p className='break-all'>
                                        <a
                                            className='transition duration-300 hover:text-[#FA5252]'
                                            href='tel:+1234567890'
                                        >
                                            Colombia
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <a
                            href=''
                            className='mx-auto mt-6 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#84c375] from-[#DD2476] to-[#36632b] to-[#fa5252ef] px-8 py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-l'
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
            <section className='col-span-12 -mt-[140px] lg:col-span-8'>
                <div className='bg-gray-nurse lg:rounded-2xl'>
                    <div className='container px-4 sm:px-5 md:px-10 lg:px-14'>
                        <div className='py-12'>
                            <h2 className='text-4xl font-bold'>Resume</h2>
                            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'>
                                <div>
                                    <div className='mb-4 flex items-center space-x-2'>
                                        <Icon
                                            icon={'work'}
                                            className='text-apple block text-3xl'
                                        />
                                        <h4 className='text-2xl font-medium dark:text-white'>
                                            Experience
                                        </h4>
                                    </div>
                                    <div className='bg-apple-200 mb-6 space-y-2 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425]'>
                                        <span className='text-gray-lite block text-sm dark:text-[#b7b7b7]'>
                                            july 2022 - present
                                        </span>
                                        <h3 className='text-xl'>Videoslots</h3>
                                        <p className='text-base dark:text-[#b7b7b7]'>
                                            Backend Developer.
                                        </p>
                                    </div>
                                    <div className='bg-bay-leaf-200 mb-6 space-y-2 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425]'>
                                        <span className='text-gray-lite block text-sm dark:text-[#b7b7b7]'>
                                            july 2022 - present
                                        </span>
                                        <h3 className='text-xl dark:text-white'>
                                            VMLY&R
                                        </h3>
                                        <p className='text-base dark:text-[#b7b7b7]'>
                                            Backend Developer.
                                        </p>
                                    </div>
                                    <div className='bg-apple-200 mb-6 space-y-2 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425]'>
                                        <span className='text-gray-lite block text-sm dark:text-[#b7b7b7]'>
                                            july 2022 - present
                                        </span>
                                        <h3 className='text-xl'>Videoslots</h3>
                                        <p className='text-base dark:text-[#b7b7b7]'>
                                            Backend Developer.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='mb-4 flex items-center space-x-2'>
                                        <Icon
                                            icon={'education'}
                                            className='text-apple block text-3xl'
                                        />
                                        <h4 className='text-2xl font-medium dark:text-white'>
                                            Education
                                        </h4>
                                    </div>
                                    <div className='bg-bay-leaf-200 mb-6 space-y-2 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425]'>
                                        <span className='text-gray-lite block text-sm dark:text-[#b7b7b7]'>
                                            july 2022 - present
                                        </span>
                                        <h3 className='text-xl dark:text-white'>
                                            Computer Science
                                        </h3>
                                        <p className='text-base dark:text-[#b7b7b7]'>
                                            Imperialize Technical Institute.
                                        </p>
                                    </div>
                                    <div className='bg-apple-200 mb-6 space-y-2 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425]'>
                                        <span className='text-gray-lite block text-sm dark:text-[#b7b7b7]'>
                                            july 2022 - present
                                        </span>
                                        <h3 className='text-xl dark:text-white'>
                                            Julius2Grow
                                        </h3>
                                        <p className='text-base dark:text-[#b7b7b7]'>
                                            Backend Developer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-nurse-200 container px-4 py-12 sm:px-5 md:px-10 lg:rounded-2xl lg:px-20'>
                        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                            <div className='col-span-1'>
                                <h4 className='mb-8 text-2xl font-medium dark:text-white'>
                                    Skills
                                </h4>
                                <div className='mb-7'>
                                    <div className='flex justify-between py-1'>
                                        <span className='text-gray text-base font-semibold dark:text-[#A6A6A6]'>
                                            Web Design
                                        </span>
                                        <span className='text-gray pr-5 text-base font-semibold dark:text-[#A6A6A6]'>
                                            80%
                                        </span>
                                    </div>
                                    <svg
                                        className='rc-progress-line'
                                        viewBox='0 0 100 1'
                                        preserveAspectRatio='none'
                                    >
                                        <path
                                            className='rc-progress-line-trail'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#D9D9D9'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                        ></path>
                                        <path
                                            className='rc-progress-line-path'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#4F913F'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                            style={{}}
                                        ></path>
                                    </svg>
                                </div>
                                <div className='mb-7'>
                                    <div className='flex justify-between py-1'>
                                        <span className='text-gray text-base font-semibold dark:text-[#A6A6A6]'>
                                            Web Design
                                        </span>
                                        <span className='text-gray pr-5 text-base font-semibold dark:text-[#A6A6A6]'>
                                            80%
                                        </span>
                                    </div>
                                    <svg
                                        className='rc-progress-line'
                                        viewBox='0 0 100 1'
                                        preserveAspectRatio='none'
                                    >
                                        <path
                                            className='rc-progress-line-trail'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#D9D9D9'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                        ></path>
                                        <path
                                            className='rc-progress-line-path'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#61b24d'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                            style={{}}
                                        ></path>
                                    </svg>
                                </div>
                                <div className='mb-7'>
                                    <div className='flex justify-between py-1'>
                                        <span className='text-gray text-base font-semibold dark:text-[#A6A6A6]'>
                                            Web Design
                                        </span>
                                        <span className='text-gray pr-5 text-base font-semibold dark:text-[#A6A6A6]'>
                                            80%
                                        </span>
                                    </div>
                                    <svg
                                        className='rc-progress-line'
                                        viewBox='0 0 100 1'
                                        preserveAspectRatio='none'
                                    >
                                        <path
                                            className='rc-progress-line-trail'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#D9D9D9'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                        ></path>
                                        <path
                                            className='rc-progress-line-path'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#36632b'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                            style={{}}
                                        ></path>
                                    </svg>
                                </div>
                                <div className='mb-7'>
                                    <div className='flex justify-between py-1'>
                                        <span className='text-gray text-base font-semibold dark:text-[#A6A6A6]'>
                                            Web Design
                                        </span>
                                        <span className='text-gray pr-5 text-base font-semibold dark:text-[#A6A6A6]'>
                                            80%
                                        </span>
                                    </div>
                                    <svg
                                        className='rc-progress-line'
                                        viewBox='0 0 100 1'
                                        preserveAspectRatio='none'
                                    >
                                        <path
                                            className='rc-progress-line-trail'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#D9D9D9'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                        ></path>
                                        <path
                                            className='rc-progress-line-path'
                                            d='M 0.5,0.5 L 99.5,0.5'
                                            strokeLinecap='round'
                                            stroke='#a7d49c'
                                            strokeWidth='1'
                                            fillOpacity='0'
                                            style={{}}
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <h4 className='mb-8 text-2xl font-medium dark:text-white'>
                                    Knowledge
                                </h4>
                                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-3 md:gap-y-3'>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        PHP
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        PHP
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        PHP
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        PHP
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        Drupal
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        Drupal
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        Laravel
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        Laravel
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        Laravel
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        JavaScript
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        JavaScript
                                    </span>
                                    <span className='bg-apple-300 rounded px-3 py-1 text-[15px]'>
                                        PHP
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
