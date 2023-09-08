import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='bg-outer-space min-h-screen w-full'>
            <header className='container mx-auto flex max-w-7xl justify-between'></header>
            <main className='container mx-auto flex max-w-7xl justify-center'>
                {children}
            </main>
        </div>
    );
}
