import { tv } from 'tailwind-variants';

export const Styles = tv({
    slots: {
        container: ['py-2.5', 'flex', 'border-b'],
        icon: [
            'h-10',
            'w-10',
            'flex',
            'items-center',
            'justify-center',
            'shadow-md',
            'bg-white',
            'rounded-lg',
        ],
        content: ['ml-2', 'text-left', 'break-words', 'overflow-hidden'],
        title: ['text-xs'],
        description: ['break-words'],
        link: ['transition', 'duration-300'],
    },
});
