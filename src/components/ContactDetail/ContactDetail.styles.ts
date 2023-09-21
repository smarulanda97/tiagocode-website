import {
    classnames,
    alignItems,
    borders,
    boxShadow,
    display,
    height,
    justifyContent,
    margin,
    padding,
    textAlign,
    transitionDuration,
    transitionProperty,
    width,
    typography,
} from 'tailwindcss-classnames';

export const container = classnames(
    padding('py-2.5'),
    display('flex'),
    borders('border-b')
);

export const icon = classnames(
    height('h-10'),
    width('w-10'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    boxShadow('shadow-md'),
    borders('rounded-lg')
);

export const content = classnames(margin('ml-2'), textAlign('text-left'));

export const title = classnames(typography('text-xs'));

export const link = classnames(
    transitionProperty('transition'),
    transitionDuration('duration-300')
);
