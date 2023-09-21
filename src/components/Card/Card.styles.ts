import {
    backgroundColor,
    borders,
    classnames,
    display,
    fontSize,
    margin,
    padding,
    spacing,
    textColor,
} from 'tailwindcss-classnames';

export const card = classnames(
    margin('mb-6'),
    padding('px-5', 'py-4'),
    spacing('space-y-2'),
    borders('rounded-lg'),
    backgroundColor('bg-white')
);

export const date = classnames(
    textColor('text-gray-lite'),
    display('block'),
    fontSize('text-sm')
);

export const title = classnames(fontSize('text-xl'));

export const subtitle = classnames(fontSize('text-base'));

export const summary = classnames(fontSize('text-base'));
