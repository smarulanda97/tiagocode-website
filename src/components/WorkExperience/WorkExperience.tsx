import { Card } from '@/components';
import { WorkExperienceProps } from '@/types';

function WorkExperienceComponent(props: WorkExperienceProps) {
    const { id, date, role, company, overview, description } = props;

    return (
        <Card
            as={'div'}
            type={'simple'}
            id={id}
            date={date}
            title={company}
            subtitle={role}
            summary={overview}
            text={description}
        />
    );
}

export default WorkExperienceComponent;
