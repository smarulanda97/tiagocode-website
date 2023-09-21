import {
    alignItems,
    classnames,
    display,
    fontSize,
    fontWeight,
    margin,
    spacing,
    textColor,
} from 'tailwindcss-classnames';

export const header = classnames(
    margin('mb-4'),
    spacing('space-x-2'),
    display('flex'),
    alignItems('items-center')
);

export const icon = classnames(
    textColor('text-black'),
    fontSize('text-3xl'),
    display('block')
);

export const title = classnames(
    fontSize('text-2xl'),
    fontWeight('font-medium')
);
