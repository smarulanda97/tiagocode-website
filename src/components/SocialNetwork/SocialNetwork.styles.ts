import {
    alignItems,
    borders,
    boxShadow,
    classnames,
    display,
    height,
    justifyContent,
    width,
} from 'tailwindcss-classnames';

export const icon = classnames(
    height('h-10'),
    width('w-10'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    borders('rounded-lg'),
    boxShadow('shadow-md')
);
