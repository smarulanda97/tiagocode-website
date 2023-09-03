import { Link, Head } from '@inertiajs/react';

import GuestLayout from '@/Layouts/GuestLayout';
import Icon from '@/Components/Icon/Icon.jsx';
import SocialNetworks from '@/Components/SocialNetworks/SocialNetworks.jsx';

export default function Show() {
    return (
        <GuestLayout>
            <div className="container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px] pb-16">
                <section className="col-span-12 lg:col-span-4">
                    <div className="w-full px-6 mb-6 lg:mb-0 mt-[180px] md:mt-[180px] md:mt-[220px] lg:mt-0 mx-auto relative bg-gray-nurse text-center lg:rounded-2xl">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        />
                        <div className="pt-[100px] pb-8">
                            <h1 className="mt-6 mb-1 text-2xl font-semibold">Santiago Marulanda</h1>
                            <h3 className="mb-4 inline-block px-5 py-1.5 rounded-lg">Backend Developer PHP</h3>
                            <p className="text-sm text-left mb-4 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores, cum cupiditate
                                earum eveniet explicabo, in inventore labore laudantium molestiae neque optio praesentium quis quo
                                quod recusandae! Harum, nesciunt.
                            </p>
                            <SocialNetworks
                                className="flex justify-center space-x-3"
                                elements={[
                                    { id: '1', icon: 'linkedin', url: 'https://google.com', color: '#0072b1' },
                                    { id: '2', icon: 'facebook', url: 'https://google.com', color: '#1773EA' },
                                    { id: '3', icon: 'website', url: 'https://google.com', color: '#e14a84' },
                                ]}
                            />
                            <ul className="p-7 rounded-2xl mt-7 bg-gray-nurse-200 dark:bg-[#1D1D1D]">
                                <li className="flex py-2.5 border-b border-[#E3E3E3]">
                                    <Icon
                                        icon={'phone'}
                                        className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#E93B81]"
                                    />
                                    <div className="text-left ml-2 5">
                                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                                        <p className="break-all">
                                            <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">
                                                +356 990 43478
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex py-2.5 border-b border-[#E3E3E3]">
                                    <Icon
                                        icon={'email'}
                                        className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#FD7590]"
                                    />
                                    <div className="text-left ml-2 5">
                                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                                        <p className="break-all">
                                            <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">
                                                santiagomm1997@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex py-2.5 border-b border-[#E3E3E3]">
                                    <Icon
                                        icon={'location'}
                                        className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#6AB5B9]"
                                    />
                                    <div className="text-left ml-2 5">
                                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
                                        <p className="break-all">
                                            <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">
                                                Malta
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex py-2.5 border-b border-[#E3E3E3]">
                                    <Icon
                                        icon={'location'}
                                        className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#6AB5B9]"
                                    />
                                    <div className="text-left ml-2 5">
                                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Nationality</p>
                                        <p className="break-all">
                                            <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">
                                                Colombia
                                            </a>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <a
                                href=""
                                className="inline-flex items-center mx-auto bg-gradient-to-r from-[#84c375] to-[#36632b] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </section>
                <section className="col-span-12 lg:col-span-8 -mt-[140px]">
                    <div className="lg:rounded-2xl bg-gray-nurse">
                        <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
                            <div className="py-12">
                                <h2 className="text-4xl font-bold">Resume</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                                    <div>
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Icon icon={'work'} className="block text-3xl text-apple" />
                                            <h4 className="text-2xl dark:text-white font-medium">Experience</h4>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">
                                                july 2022 - present
                                            </span>
                                            <h3 className="text-xl">Videoslots</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">Backend Developer.</p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-bay-leaf-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">
                                                july 2022 - present
                                            </span>
                                            <h3 className="text-xl dark:text-white">VMLY&R</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">Backend Developer.</p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">
                                                july 2022 - present
                                            </span>
                                            <h3 className="text-xl">Videoslots</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">Backend Developer.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Icon icon={'education'} className="block text-3xl text-apple" />
                                            <h4 className="text-2xl dark:text-white font-medium">Education</h4>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-bay-leaf-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">
                                                july 2022 - present
                                            </span>
                                            <h3 className="text-xl dark:text-white">Computer Science</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">Imperialize Technical Institute.</p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">
                                                july 2022 - present
                                            </span>
                                            <h3 className="text-xl dark:text-white">Julius2Grow</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">Backend Developer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container bg-gray-nurse-200 py-12 px-4 sm:px-5 md:px-10 lg:px-20 lg:rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="col-span-1">
                                    <h4 className="text-2xl dark:text-white font-medium mb-8">Skills</h4>
                                    <div className="mb-7">
                                        <div className="flex justify-between py-1">
                                            <span className="text-base text-gray font-semibold dark:text-[#A6A6A6]">
                                                Web Design
                                            </span>
                                            <span className="text-base font-semibold text-gray pr-5 dark:text-[#A6A6A6]">
                                                80%
                                            </span>
                                        </div>
                                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#D9D9D9"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#4F913F"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                                style={{}}
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="mb-7">
                                        <div className="flex justify-between py-1">
                                            <span className="text-base text-gray font-semibold dark:text-[#A6A6A6]">
                                                Web Design
                                            </span>
                                            <span className="text-base font-semibold text-gray pr-5 dark:text-[#A6A6A6]">
                                                80%
                                            </span>
                                        </div>
                                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#D9D9D9"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#61b24d"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                                style={{}}
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="mb-7">
                                        <div className="flex justify-between py-1">
                                            <span className="text-base text-gray font-semibold dark:text-[#A6A6A6]">
                                                Web Design
                                            </span>
                                            <span className="text-base font-semibold text-gray pr-5 dark:text-[#A6A6A6]">
                                                80%
                                            </span>
                                        </div>
                                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#D9D9D9"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#36632b"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                                style={{}}
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="mb-7">
                                        <div className="flex justify-between py-1">
                                            <span className="text-base text-gray font-semibold dark:text-[#A6A6A6]">
                                                Web Design
                                            </span>
                                            <span className="text-base font-semibold text-gray pr-5 dark:text-[#A6A6A6]">
                                                80%
                                            </span>
                                        </div>
                                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#D9D9D9"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.5,0.5 L 99.5,0.5"
                                                strokeLinecap="round"
                                                stroke="#a7d49c"
                                                strokeWidth="1"
                                                fillOpacity="0"
                                                style={{}}
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-2xl dark:text-white font-medium mb-8">Knowledge</h4>
                                    <div className="flex flex-wrap gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3">
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">Drupal</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">Drupal</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">JavaScript</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">JavaScript</span>
                                        <span className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
