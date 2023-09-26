import { tv } from 'tailwind-variants';

export const Styles = tv({
    base: [],
    variants: {
        type: {
            download: [
                'mt-6',
                'px-6',
                'py-2',
                'mx-auto',
                'inline-flex',
                'items-center',
                'rounded-[35px]',
                'bg-gradient-to-r',
                'from-[#189cb4]',
                'to-[#56717f]',
                'text-lg',
                'text-white',
                'transition',
                'duration-200',
                'ease-linear',
                'hover:bg-gradient-to-l',
            ],
        },
    },
});
