import { tv } from 'tailwind-variants';

export const Styles = tv({
    slots: {
        container: [
            'pb-16',
            'lg:mt-[220px]',
            'container',
            'grid',
            'grid-cols-12',
            'md:gap-5',
            'justify-between',
        ],
        leftColumn: ['col-span-12', 'md:col-span-4', 'xl:col-span-4'],
        rightColumn: [
            'md:-mt-[140px]',
            'col-span-12',
            'md:col-span-8',
            'xl:col-span-8',
        ],
        leftContent: [
            'px-6',
            'md:mb-6',
            'pt-[50px]',
            'lg:pt-0',
            'mx-auto',
            'w-full',
            'relative',
            'text-center',
            'lg:rounded-2xl',
            'bg-white',
            'md:shadow-xl',
        ],
        rightContent: ['w-full', 'bg-white', 'lg:rounded-2xl', 'md:shadow-xl'],
        image: [
            'mx-auto',
            'md:-mt-[140px]',
            'w-[240px]',
            'h-[240px]',
            'md:absolute',
            'left-[50%]',
            'transform',
            'md:-translate-x-[50%]',
            'drop-shadow-xl',
            'rounded-[20px]',
        ],
        contactDetails: ['mt-7', 'p-5', 'rounded-2xl', 'bg-smoke'],
    },
});
