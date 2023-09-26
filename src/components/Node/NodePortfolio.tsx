import Image from 'next/image';
import {
    Block,
    Button,
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
                        priority={true}
                    />
                    <div className='pb-8 md:pt-[100px]'>
                        <h1 className='mb-1 mt-6 text-2xl font-semibold text-jungle'>
                            Santiago Marulanda
                        </h1>
                        <h3 className='mb-4 inline-block rounded-lg px-5 py-1.5 font-semibold text-aquamarine'>
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
                        <Button as={'a'} href={''}>
                            Download CV
                        </Button>
                        {/*<a*/}
                        {/*    href=''*/}
                        {/*>*/}
                        {/*    Download CV*/}
                        {/*</a>*/}
                    </div>
                </div>
            </section>
            <section className={styles.rightColumn()}>
                <div className={styles.rightContent()}>
                    <div className='container px-4 sm:px-5 md:px-10 lg:px-10'>
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
                            <Block
                                icon={{ name: 'work', color: '#189cb4' }}
                                title={'Experience'}
                                className={'mt-[30px]'}
                            >
                                <List
                                    as={'div'}
                                    items={data.workExperience}
                                    itemComponent={WorkExperience}
                                    className={
                                        'grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'
                                    }
                                />
                            </Block>
                            <Block
                                icon={{
                                    name: 'education',
                                    color: '#189cb4',
                                }}
                                title={'Education'}
                                className={'mt-[30px]'}
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
            </section>
        </div>
    );
}

export default NodePortfolioComponent;
