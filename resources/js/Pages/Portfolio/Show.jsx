import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ auth, laravelVersion, phpVersion }) {
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
                            <p className="text-sm text-left mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores, cum cupiditate earum eveniet explicabo, in inventore labore laudantium molestiae neque optio praesentium quis quo quod recusandae! Harum, nesciunt.</p>
                            <div className="flex justify-center space-x-3">
                                <a href="#">
                                    <span className="flex items-center justify-center h-10 w-10 text-[#0072b1] rounded-lg bg-gray-nurse-200 shadow-md">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                    </span>
                                </a>
                                <a href="#">
                                    <span className="flex items-center justify-center h-10 w-10 text-[#1773EA] rounded-lg bg-gray-nurse-200 shadow-md">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                    </span>
                                </a>
                                <a href="#">
                                    <span className="flex items-center justify-center h-10 w-10 text-[#e14a84] rounded-lg bg-gray-nurse-200 shadow-md">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                                    </span>
                                </a>
                            </div>

                            <ul className="p-7 rounded-2xl mt-7 bg-gray-nurse-200 dark:bg-[#1D1D1D]">
                               <li className="flex py-2.5 border-b border-[#E3E3E3]">
                                   <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#E93B81]">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                                   </span>
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
                                    <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#FD7590]">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
                                    </span>
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
                                   <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#6AB5B9]">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                   </span>
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
                                   <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-nurse shadow-md text-[#6AB5B9]">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                   </span>
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

                            <a href="" className="inline-flex items-center mx-auto bg-gradient-to-r from-[#84c375] to-[#36632b] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
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
                                            <div className="text-3xl text-apple">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path></svg>
                                            </div>
                                            <h4 className="text-2xl dark:text-white font-medium">Experience</h4>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">july 2022 - present</span>
                                            <h3 className="text-xl">Videoslots</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">
                                                Backend Developer.
                                            </p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-bay-leaf-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">july 2022 - present</span>
                                            <h3 className="text-xl dark:text-white">VMLY&R</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">
                                                Backend Developer.
                                            </p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">july 2022 - present</span>
                                            <h3 className="text-xl">Videoslots</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">
                                                Backend Developer.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-4">
                                            <div className="text-3xl text-apple">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg>
                                            </div>
                                            <h4 className="text-2xl dark:text-white font-medium">Education</h4>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-bay-leaf-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">july 2022 - present</span>
                                            <h3 className="text-xl dark:text-white">Computer Science</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">
                                                Imperialize Technical Institute.
                                            </p>
                                        </div>
                                        <div className="py-4 px-5 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-apple-200">
                                            <span className="text-sm text-gray-lite dark:text-[#b7b7b7] block">july 2022 - present</span>
                                            <h3 className="text-xl dark:text-white">Julius2Grow</h3>
                                            <p className="text-base dark:text-[#b7b7b7]">
                                                Backend Developer.
                                            </p>
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
                                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#4F913F" strokeWidth="1" fillOpacity="0" style={{}}></path>
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
                                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#61b24d" strokeWidth="1" fillOpacity="0" style={{}}></path>
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
                                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#36632b" strokeWidth="1" fillOpacity="0" style={{}}></path>
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
                                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#a7d49c" strokeWidth="1" fillOpacity="0" style={{}}></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-2xl dark:text-white font-medium mb-8">Knowledge</h4>
                                    <div className="flex flex-wrap gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3">
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">Drupal</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">Drupal</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">Laravel</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">JavaScript</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">JavaScript</button>
                                        <button className="rounded bg-apple-300 py-1 px-3 text-[15px]">PHP</button>
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