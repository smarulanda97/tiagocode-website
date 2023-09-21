import Image from 'next/image';
import data from '@/data.json';
import { SocialNetwork, Block, List, WorkExperience, ContactDetail } from '@/components';

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
                        <h1 className='mb-1 mt-6 text-2xl font-semibold'>Santiago Marulanda M</h1>
                        <h3 className='mb-4 inline-block rounded-lg px-5 py-1.5'>
                            Mid Backend Developer PHP
                        </h3>
                        <p className='mb-4 text-left text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi
                            asperiores, cum cupiditate earum eveniet explicabo, in inventore labore
                            laudantium molestiae neque optio praesentium quis quo quod recusandae!
                            Harum, nesciunt.
                        </p>
                        <List
                            as={'div'}
                            items={data.socialNetworks}
                            itemComponent={SocialNetwork}
                            className='flex justify-center space-x-3'
                        />
                        <List
                            as={'div'}
                            items={data.contactDetails}
                            itemComponent={ContactDetail}
                            className='bg-gray-nurse-200 mt-7 rounded-2xl p-7'
                        />
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
                                <Block icon={{ name: 'work' }} title={'Experience'}>
                                    <List
                                        as={'div'}
                                        items={data.workExperience}
                                        itemComponent={WorkExperience}
                                    />
                                </Block>
                                <Block icon={{ name: 'education' }} title={'Education'}>
                                    <List
                                        as={'div'}
                                        items={data.education}
                                        itemComponent={WorkExperience}
                                    />
                                </Block>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
