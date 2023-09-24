import Image from 'next/image';
import {
    Block,
    ContactDetail,
    List,
    SocialNetwork,
    WorkExperience,
} from '@/components';
import data from '@/data.json';
import { Styles } from './NodePortfolio.styles';

function NodePortfolioComponent() {
    const styles = Styles();

    return (
        <div className={styles.container()}>
            <section className={styles.leftColumn()}>
                <div className={styles.leftContent()}>
                    <Image
                        src='/codesprint.jpg'
                        alt=''
                        quality={100}
                        width={240}
                        height={240}
                        className={styles.image()}
                    />
                    <div className='pb-8 md:pt-[100px]'>
                        <h1 className='text-jungle mb-1 mt-6 text-2xl font-semibold'>
                            Santiago Marulanda
                        </h1>
                        <h3 className='text-aquamarine mb-4 inline-block rounded-lg px-5 py-1.5 font-semibold'>
                            Backend Developer PHP
                        </h3>
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
                            className={styles.contactDetails()}
                        />
                        {/*<a*/}
                        {/*    href=''*/}
                        {/*    className='mx-auto mt-6 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#84c375] from-[#DD2476] to-[#36632b] to-[#fa5252ef] px-8 py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-l'*/}
                        {/*>*/}
                        {/*    Download CV*/}
                        {/*</a>*/}
                    </div>
                </div>
            </section>
            <section className={styles.rightColumn()}>
                <div className={styles.rightContent()}>
                    <div className='container px-4 sm:px-5 md:px-10 lg:px-14'>
                        <div className='py-12'>
                            <h2 className='text-4xl font-bold'>Resume</h2>

                            <p className='mb-4 mt-[30px] text-left text-sm text-gray-600'>
                                💪 I am a semi senior Drupal backend developer
                                with +4 years of experience developing websites,
                                E-commerce, integrating different kinds of API
                                (Google AD, payment gateways, ERP web services),
                                and working with headless CMS. My main stack is
                                based on PHP using Drupal and Laravel.
                            </p>
                            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'>
                                <Block
                                    icon={{ name: 'work', color: '#189cb4' }}
                                    title={'Experience'}
                                >
                                    <List
                                        as={'div'}
                                        items={data.workExperience}
                                        itemComponent={WorkExperience}
                                    />
                                </Block>
                                <Block
                                    icon={{
                                        name: 'education',
                                        color: '#189cb4',
                                    }}
                                    title={'Education'}
                                >
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

export default NodePortfolioComponent;
