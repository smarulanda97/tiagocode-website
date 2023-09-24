import { tv } from 'tailwind-variants';

export const Styles = tv({
    slots: {
        base: [],
        header: ['mb-4', 'space-x-2', 'flex', 'items-center'],
        title: ['text-2xl', 'font-medium'],
        icon: ['block', 'text-black', 'text-3xl'],
    },
});
