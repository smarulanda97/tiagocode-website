import { Link } from '@inertiajs/react';

import ApplicationLogo from '@/Components/ApplicationLogo/ApplicationLogo';

export default function Guest({ children }) {
    return (
        <div className="w-full min-h-screen bg-outer-space">
            <header className="container max-w-7xl mx-auto">
                <nav>
                    <Link href="">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-nurse" />
                    </Link>
                </nav>
            </header>
            <main className="container max-w-7xl mx-auto flex justify-between">{children}</main>
        </div>
    );
}
