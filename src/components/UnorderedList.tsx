import { List, ListItem, WorkExperienceList } from '@/types';

function DefaultItemComponent(props: ListItem) {
    return <li key={props.id}>hello</li>;
}

function UnorderedList(props: List<any>) {
    const {
        icon,
        title,
        description,
        items = [],
        itemComponent = DefaultItemComponent,
        ...otherProps
    } = props;

    return (
        <ul {...otherProps}>
            {items.map((itemComponentProps) => itemComponent(itemComponentProps))}
        </ul>
    );
}

export default UnorderedList;
