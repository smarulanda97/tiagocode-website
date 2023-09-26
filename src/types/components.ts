import React, {
    ElementType,
    HTMLAttributes,
    PropsWithChildren,
    ComponentPropsWithoutRef,
} from 'react';

/*
|--------------------------------------------------------------------------
| Types -> Generics for components
|--------------------------------------------------------------------------
|
| The general/common custom types used across different components
| in the application.
|
*/

type AsProp<As extends ElementType> = {
    as?: As;
};

type PropsToOmit<As extends ElementType, P> = keyof (AsProp<As> & P);

export type PolymorphicProps<
    As extends ElementType,
    Props = {},
> = PropsWithChildren<Props & AsProp<As>> &
    Omit<ComponentPropsWithoutRef<As>, PropsToOmit<As, Props>>;

/*
|--------------------------------------------------------------------------
| Types -> Component: Icon
|--------------------------------------------------------------------------
|
| The custom types related to the Icon component.
|
*/

export interface IconProps extends HTMLAttributes<HTMLElement> {
    name: string;
    color?: string;
}

/*
|--------------------------------------------------------------------------
| Types -> Component: SocialNetworks
|--------------------------------------------------------------------------
|
| The custom types related to the SocialNetworks component.
|
*/

export type SocialNetworkProps = {
    id: string;
    link: string;
    title?: string;
    icon: IconProps;
};

/*
|--------------------------------------------------------------------------
| Types -> Component: ContactDetails
|--------------------------------------------------------------------------
|
| The custom types related to the ContactDetails component.
|
*/

export type ContactDetailProps = {
    id: string;
    link?: string;
    title: string;
    description: string;
    icon: IconProps;
};

/*
|--------------------------------------------------------------------------
| Types -> Component: Block
|--------------------------------------------------------------------------
|
| The custom types related to the Block component.
|
*/

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    description?: string;
    icon?: IconProps;
}

/*
|--------------------------------------------------------------------------
| Types -> Component: List
|--------------------------------------------------------------------------
|
| The custom types related to the List component. It is used by different
| sections of the application like 'work experience' and 'education'.
|
*/

export interface ListItemProps extends HTMLAttributes<HTMLElement> {
    id: string;
}

export interface ListProps {
    items: Array<any>;
    itemComponent?: (
        itemComponentProps: any
    ) => React.ReactComponentElement<any>;
}

/*
|--------------------------------------------------------------------------
| Types -> Component: Card
|--------------------------------------------------------------------------
|
| The custom types related to the Card component.
|
*/

export type CardProps = {
    id: string;
    date?: string;
    title: string;
    subtitle?: string;
    summary?: string;
    text?: string;
    type?: string;
};

/*
|--------------------------------------------------------------------------
| Types -> Component: WorkExperience
|--------------------------------------------------------------------------
|
| The custom types related to the WorkExperience component.
|
*/

export interface WorkExperienceProps extends ListItemProps {
    date: string;
    role: string;
    company: string;
    overview?: string;
    description?: string;
}
