import { tv } from 'tailwind-variants';

export const Styles = tv({
    slots: {
        container: ['px-5', 'py-4', 'space-y-2', 'rounded-lg', 'bg-white'],
        date: ['block', 'text-sm'],
        title: ['text-xl'],
        subtitle: ['text-base'],
        summary: ['text-base'],
    },
    variants: {
        type: {
            simple: {
                container: 'bg-smoke',
            },
        },
    },
});
