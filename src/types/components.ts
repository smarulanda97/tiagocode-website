import { HTMLAttributes } from 'react';

/*
|--------------------------------------------------------------------------
| Types -> Generics for components
|--------------------------------------------------------------------------
|
| The general/common custom types used across different components
| in the application.
|
*/

/*
|--------------------------------------------------------------------------
| Types -> Component: Icon
|--------------------------------------------------------------------------
|
| The custom types related to the Icon component.
|
*/

export interface Icon extends HTMLAttributes<HTMLElement> {
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

export type SocialNetwork = {
    id: string;
    icon: Icon;
    link: string;
    title?: string;
};

export interface SocialNetworks extends HTMLAttributes<HTMLElement> {
    items: Array<SocialNetwork>;
}

/*
|--------------------------------------------------------------------------
| Types -> Component: ContactDetails
|--------------------------------------------------------------------------
|
| The custom types related to the ContactDetails component.
|
*/

export type ContactDetail = {
    id: string;
    icon: Icon;
    link?: string;
    title: string;
    description: string;
};

export interface ContactDetails extends HTMLAttributes<HTMLElement> {
    items: Array<ContactDetail>;
}

/*
|--------------------------------------------------------------------------
| Types -> Component: Block
|--------------------------------------------------------------------------
|
| The custom types related to the Block component.
|
*/

export interface Block extends HTMLAttributes<HTMLDivElement> {
    icon?: Icon;
    title: string;
    subtitle?: string;
    description?: string;
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

export interface ListItem extends HTMLAttributes<HTMLElement> {
    id: string;
}

export interface List<T extends ListItem> extends HTMLAttributes<HTMLUListElement> {
    items: Array<T>;
    itemComponent?: (itemComponentProps: T) => React.ReactNode;
}

export interface Experience extends ListItem {
    date: string;
    role: string;
    company: string;
    description?: string;
}

export type WorkExperienceList = List<Experience>;
