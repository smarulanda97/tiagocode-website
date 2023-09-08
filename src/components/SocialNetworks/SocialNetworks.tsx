import { IconType } from '@/types';
import Icon from '@/components/Icon/Icon';

interface Props {
    elements: IconType[];
}

const SocialNetworks: React.FC<Props> = (props) => {
    const { elements = [], ...forwardedProps } = props;

    return (
        <div {...forwardedProps}>
            {elements.map((icon: IconType) => {
                const { id, color } = icon;
                return (
                    <Icon
                        key={id}
                        icon={icon}
                        className={`bg-gray-nurse-200 flex h-10 w-10 items-center justify-center rounded-lg shadow-md text-[${color}]`}
                    />
                );
            })}
        </div>
    );
};

export default SocialNetworks;
