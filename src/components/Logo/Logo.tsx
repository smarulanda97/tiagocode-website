import { JSX, SVGProps } from 'react';

export default function Logo(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            id='Capa_1'
            data-name='Capa 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 460.35 323.37'
        >
            <path
                className='cls-1'
                d='M623.43,1760.47l-203.12,83a24.73,24.73,0,0,1-19-.13l-151.53-64.43,56.41-10.43,89,37.82a24.66,24.66,0,0,0,18.55.3l129.82-50.2-99.27-36.84-231.59,42.83L166,1532.15a8.5,8.5,0,0,1,9.2-10.15l234.07,23.88a12.42,12.42,0,0,1,10.91,9.88l22.58,109.7L411,1669.62l-17.32-85.32a12.41,12.41,0,0,0-11.14-9.9l-178.68-14.79,32.9,162.1,210.38-34.84,176.16,65.38A4.41,4.41,0,0,1,623.43,1760.47Z'
                transform='translate(-165.83 -1521.95)'
            />
        </svg>
    );
}
