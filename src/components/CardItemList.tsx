function CardItemList(props) {
    const { date, role, company } = props;

    return (
        <li className='bg-bay-leaf-200 mb-6 space-y-2 rounded-lg px-5 py-4'>
            <span className='text-gray-lite block text-sm'>{date}</span>
            <h3 className='text-xl'>{company}</h3>
            <p className='text-base'>{role}</p>
        </li>
    );
}

export default CardItemList;
