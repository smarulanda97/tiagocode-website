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
