import PropTypes from 'prop-types';
import Icon from '@/Components/Icon/Icon.jsx';

export default function SocialNetworks(props) {
    const { elements = [], ...forwardedProps } = props;

    return (
        <div {...forwardedProps}>
            {elements.map(({ id, icon, url, color }) => (
                <Icon
                    key={id}
                    icon={icon}
                    href={url}
                    className={`flex items-center justify-center h-10 w-10 rounded-lg bg-gray-nurse-200 shadow-md text-[${color}]`}
                />
            ))}
        </div>
    );
}

SocialNetworks.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};
